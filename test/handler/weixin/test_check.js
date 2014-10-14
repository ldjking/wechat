var request=require("request");
var url="http://localhost/handler/weixin/check?signature=aaa&timestamp=313123123&nonce=132312&echostr=fster";
request(url, function (error, response, body) {
	if(error){
		console.log("error");
	}
	else{
		console.log("body:",body);
	}
});