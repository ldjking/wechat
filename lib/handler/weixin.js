var check=require("./weixin/checkToken");
module.exports=function(param,sysParam,cb){//微信校验
	
	var req=sysParam.req;
	var query=req.query;
	var signature=query.signature;
	var timestamp=query.timestamp;
	var nonce=query.nonce;
	var echostr=query.echostr;
	
	console.log("wexin check",req.query);
	var result=check(signature,timestamp,nonce,echostr);
	console.log("check result=["+result+"]");

	return result;
}