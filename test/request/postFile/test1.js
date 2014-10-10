var request=require("request");
var fs=require("fs");
var path=require("path");
var r = request.post('http://isdreport.server.com:443/imweb_pubars/handler/upload/banner', function optionalCallback (err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
})
var form = r.form()
form.append('my_field', 'my_value')
// form.append('my_buffer', new Buffer([1, 2, 3]));
// form.append('my_file1', fs.createReadStream(path.join(__dirname, 'test1.js')));
// form.append('my_file2', fs.createReadStream(path.resolve(__dirname, "../",'request.js')));
// form.append('my_file3', fs.createReadStream(path.resolve(__dirname, "../",'test1.js')));
// form.append('my_file4', fs.createReadStream(path.resolve(__dirname, "../",'test1.js')));
form.append('my_file5', fs.createReadStream(__dirname+'/banner_abroad.jpg'));


//form.append('remote_file', request('http://google.com/doodle.png'))form.append('my_buffer', new Buffer([1, 2, 3]))