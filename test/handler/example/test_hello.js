var request=require("request");
var url="http://localhost/handler/example/hello?a=10&b=10";
request(url, function (error, response, body) {
	if(error){
		console.log("error");
	}
	else{
		console.log(body);
	}
});