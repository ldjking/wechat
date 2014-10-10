var request=require("request");
function fetch(url,cb){
	request(url, function (error, response, body) {
			var result={ec:0,url:url};
			if (!error && response.statusCode == 200) {
				//console.log("request url succ["+url+"]");
				result.data=body;
			}
			else{
				console.log(error);
				result.ec=1;
				result.msg=error;
			}
			
			cb(result);
		});
}

fetch("http://ke.qq.com",function(result){
		console.log(result.data);

});