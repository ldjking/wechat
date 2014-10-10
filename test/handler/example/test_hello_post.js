var request=require("request");
var url="http://localhost/handler/example/hello?a=10&b=10";
var opt={
		method:"POST",
		body:"a=100&b=100"
	};
request(url, opt, function (error, response, body) {
	if(error){
		console.log("error");
	}
	else{
		console.log(body);
	}
});