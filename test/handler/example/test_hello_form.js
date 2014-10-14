var request=require("request");
var fs=require("fs");
var path=require("path");
var url="http://localhost/handler/example/hello";
request.post({url:url,formData:{key:'value'}},function(e,r,b){
	console.log(b);
})
//form.append('b', '21');
