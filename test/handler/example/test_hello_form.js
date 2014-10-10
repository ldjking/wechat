var request=require("request");
var fs=require("fs");
var path=require("path");
var url="http://localhost/handler/example/hello";
var r = request.post(url, function(err, httpResponse, body) {
  if (err) {
    return console.error('post form failed:', err);
  }
  console.log('post form successful!  Server responded with:', body);
})
var form = r.form()
form.append('a', '100')
//form.append('b', '21');
