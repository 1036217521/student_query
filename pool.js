//连接数据库
const mysql = require("mysql");
//创建连接池
var pool = mysql.createPool({
	host:"127.0.0.1",
	post:"3306",
	user:"root",
	password:"",
	database:"4X",
	connectionLimit:20
});
//导出
module.exports = pool;
