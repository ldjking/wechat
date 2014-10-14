var express = require('express');
var app = express();
var fs = require("fs");
var util = require('util');

process.on('uncaughtException', function(e) {
    console.log("server on error");　　
    console.log(e);
});

//app.use(cookieParser());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);


function logErrors(err, req, res, next) {
	console.log("logErrors");
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.send(500, {
            error: 'Something blew up!'
        });
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}


function handler(req, res) { //处理所有服务请求  服务请求是否需要
    var method = req.path;

	var param = {};
	var sysParam = {}; //系统参数  文件根目录  当前用户
	sysParam.base = __dirname;
	sysParam.req = req;
	sysParam.res = res;
	

	try {
		var fn = require("./lib/handler" + method + ".js");
		var result = fn(param, sysParam); //也允许异步返回
		//console.log("result=["+result+"]");
		if (result != null) {
			res.setHeader('content-type', 'text/html;charset=utf-8');
			res.send(result); //直接返回结果
		}
	}catch(e) {
		console.log(e);
		var result = {
			flag: false,
			code: "501",
			msg: "方法不存在",
			err:e
		};
		res.send(result);
	}
}


app.all('*', function(req, res, next) {
   //console.log("set Header first");
   res.header("Access-Control-Allow-Origin", "*");
   //res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Cookie");
   //res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   //res.header("Access-Control-Request-Headers","Content-Type,Content-Length, Authorization, Accept,X-Requested-With,Cookie");
   //res.header('Set-Cookie','myCookie=test');
   if(req.method=="OPTIONS") res.send(200);/*让options快速返回*/
   else  next();
});
app.use("/handler/", handler); //服务处理程序 handler
app.use("/web/", express.static(__dirname + '/web')); //静态资源web

var port=process.env.PORT||80;
var host=process.env.IP||"localhost";


console.log("app listen host=["+host+"] on port=["+port+"]");
app.listen(port,host);
//app.listen(80,host);
//cache自动化维护
var watch = require('watch')

watch.watchTree(__dirname + "/lib/", handlerChange); //handler文件发生变化清除改项缓存

function handlerChange(f, curr, prev) { //服务变化
    if (typeof f == "object" && prev === null && curr === null) {
        // Finished walking the tree
    } else if (prev === null) {
        // f is a new file
        // var rs=require(f);
    } else if (curr.nlink === 0) {
        console.log("handler file delete " + f);
        delete require.cache[f]; //删除

    } else {
        console.log("handler file change " + f);
        delete require.cache[f];
        //var rs = require(f); //重新加载改资源  确保下次使用能快速
        //console.log(rs.toString());
    }
}


