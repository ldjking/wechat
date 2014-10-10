// JavaScript Document
module.exports=function(param,sysparam,cb){
	console.log("param=[+param+]");
	
	var result={type:"html"};
	result.html="hello world with callback";
	cb(result);//异步回调
}