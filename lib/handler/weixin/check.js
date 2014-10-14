var sha1=require("sha1");
var token="randomstr123#QQ";
module.exports=function(param,sysParam,cb){//微信校验
	
	var req=sysParam.req;
	var signature=req.signature;
	var timestamp=req.timestamp;
	var nonce=req.nonce;
	var echostr=req.echostr;
	
	var arr=[token,timestamp,echostr];
	var str=arr.sort().join("");
	
	var str2=sha1(str);
	console.log("req.query",req.query);
	
	
	if(str2==signature){
		return echostr;
	}
	else{
		return "false";
	}
}