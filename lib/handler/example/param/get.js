// JavaScript Document
module.exports=function(param,sysparam,cb){
	console.log("param",param);
	var req=sysparam.req;
	
	console.log("query",req.query);
	
	
	var a=parseInt(param.a||0);
	var b=parseInt(param.b||0);
	return {
			flag:true,
			result:a+b,
			param:param,
			msg:"测试sum运算"
		};
}