const express = require("express");
const router =require("./router/router.js")  //引入路由器
//建立服务器
var server = express();

//引入body-parser模块  解析post传输的数据,并配置中间件
var bodyParser = require("body-Parser");
server.use(bodyParser.urlencoded({
	extended:false
}));

//托管静态资源到目标目录下
server.use(express.static("public"));

//挂载路由
server.use("/cha",router);



//主页面跳转
server.get("/",(req,res)=>{
	res.redirect("./view/student.html");
});
//管理员路径
server.get("/admi",(req,res)=>{
	res.redirect("./view/admio.html");
});
//教师路径
server.get("/tea",(req,res)=>{
	res.redirect("./view/teacher.html");
});
server.listen(8080,()=>{
	console.log("在端口8080打开");
});


