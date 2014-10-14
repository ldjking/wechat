var request=require("request");
 var query={ signature: '5aec9d761bd8af9c5ff7ce1887be1b51dcef1051',
  echostr: '7136364309361012716',
  timestamp: '1413286340',
  nonce: '1727323041' }



var url="http://localhost/handler/weixin?";
url+="signature="+query.signature+"&timestamp="+query.timestamp+"&nonce="+query.nonce+"&echostr="+query.echostr;
url+="&r="+new Date().getTime();
console.log(url);
request(url, function (error, response, body) {
	if(error){
		console.log("error");
	}
	else{
		console.log("body:",body);
	}
});