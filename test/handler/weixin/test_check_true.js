var request=require("request");
var signature="d6052d426941e652f7ee1a17a4febd9c6fe1ea5b";
var timestamp="1413285292";
var nonce="1828028929";
var echostr="4510389981213951469";


var url="http://localhost/handler/weixin?";
url+="signature="+signature+"&timestamp="+timestamp+"&nonce="+nonce+"&echostr="+echostr;
url+="&r="+new Date().getTime();
request(url, function (error, response, body) {
	if(error){
		console.log("error");
	}
	else{
		console.log("body:",body);
	}
});