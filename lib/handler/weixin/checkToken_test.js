// JavaScript Document
var sha1=require("sha1");
var token="randomstr123#QQ";
var signature="d6052d426941e652f7ee1a17a4febd9c6fe1ea5b";
var timestamp="1413285292";
var nonce="1828028929";
var echostr="4510389981213951469";

var arr=[token,timestamp,nonce];
var str=arr.sort().join("");
console.log("str:",str);
var str2=sha1(str);

var result="false";
if(str2==signature){
	result= echostr;
}
else{
	result= "false";
}
console.log("check result",result);
