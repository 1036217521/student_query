#客户端连接服务器使用编码
SET NAMES UTF8;
#删除数据库，如果存在
DROP DATABASE IF EXISTS 4X;
#创建数据库
CREATE DATABASE 4X CHARSET=UTF8;
#进入数据库
USE 4X;
#创建表

--#创建学生信息表
--CREATE TABLE student (
--	xid INT PRIMARY KEY AUTO_INCREMENT,  #学生编号，主键，自增
--	xuser VARCHAR(10),		     #学生学号
--	xname VARCHAR(10),		     #学生姓名
--	xsex BOOL			     #学生性别
----	xage  TINYINT,			     #学生年龄,
----	xphone CHAR(11)			     #学生联系电话
--);
--#插入学生
--INSERT INTO student VALUES
--(1,"001","杨华",1),
--(NULL,"002","乐港",1),
--(NULL,"003","杨明",1),
--(NULL,"004","李欣",0),
--(NULL,"005","梁歌华",1),
--(NULL,"006","月宴",0),
--(NULL,"007","杨雨",0),
--(NULL,"008","阳语",1),
--(NULL,"009","月言",0);

#创建科目表
CREATE TABLE course (
	course_id SMALLINT PRIMARY KEY AUTO_INCREMENT,   #科目id，主键，自增
	course_name VARCHAR(10)                          #科目名称
);
#插入科目
INSERT INTO course VALUES
(1,"高数"),
(NULL,"c语言导论"),
(NULL,"线性代数"),
(NULL,"英语"),
(NULL,"计算机操作系统"),
(NULL,"c#"),
(NULL,"面向对象技术");

#创建成绩表
CREATE TABLE score(
	cid TINYINT PRIMARY KEY AUTO_INCREMENT,     #成绩id，主键，自增
	stu_id VARCHAR(10),			    #学生学号
	stu_name VARCHAR(10),                       #学生姓名
	-- xsex BOOL,				    #学生性别
--	sub_name VARCHAR(10)			    #科目成绩	
	stu1 INT,				    #得分
	stu2 INT,
	stu3 INT,
	stu4 INT,
	stu5 INT,
	stu6 INT,
	stu7 INT

);
#插入成绩表
INSERT INTO score VALUES
(1,"001","杨华",75,78,84,90,85,75,98),
(NULL,"002","乐港",78,81,87,95,64,87,46),
(NULL,"003","杨明",84,89,98,99,90,97,96),
(NULL,"004","李欣",59,60,60,68,67,68,79),
(NULL,"005","梁歌华",90,90,98,91,93,92,91),
(NULL,"006","月宴",95,95,94,89,86,97,99),
(NULL,"007","杨雨",76,75,70,78,81,88,81);


#创建管理员表
CREATE TABLE admio (
	aid INT PRIMARY KEY AUTO_INCREMENT,   #管理员编号
	ausername VARCHAR(20) NOT NULL,    #管理员账号
	apassword VARCHAR(20) NOT NULL	   #管理员密码

);
#插入管理员
INSERT INTO admio VALUES(1,"1036217521","13460489518");
INSERT INTO admio VALUES(NULL,"sicheng","sicheng");

#学生账号表
CREATE TABLE s_user(
	stu_id INT PRIMARY KEY AUTO_INCREMENT,   #学生编号
	stu_username VARCHAR(20) NOT NULL,    #学生账号(学号)
	stu_password VARCHAR(20) NOT NULL     #学生密码
);
#插入学生账号
INSERT INTO s_user VALUES
(1,"001","123456"),
(NULL,"002","123456"),
(NULL,"003","123456"),
(NULL,"004","123456"),
(NULL,"005","123456"),
(NULL,"006","123456"),
(NULL,"007","123456"),
(NULL,"008","123456"),
(NULL,"009","123456");



#教师账号表
CREATE TABLE t_user(
	tea_id INT PRIMARY KEY AUTO_INCREMENT,   #教师编号
	tea_username VARCHAR(20) NOT NULL,    #教师账号
	tea_password VARCHAR(20) NOT NULL     #教师密码
);

#插入教师
INSERT INTO t_user VALUES
(1,"1036217521","1036217521"),
(NULL,"13460489518","13460489518");


