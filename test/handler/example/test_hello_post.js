var request=require("request");
var url="http://localhost/handler/example/hello";
var opt={
		uri:url,
		method:"POST",
		body:"a=100&b=100111111",
		headers:{
			'User-Agent': 'request',
			'Cookie':'c1=10;c2=100',
			'Conteent-Type':'text/html',
		}
	};
request(opt, function (error, response, body) {
	if(error){
		console.log("error");
	}
	else{
		console.log(body);
	}
});