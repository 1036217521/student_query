const express = require("express");
//引入mysql连接模块
var pool = require("../pool.js");


//创建路由器
var router = express.Router();

//写路由
//管理员登录
router.post("/admio_login", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("1");
		return;
	}
	if (!obj.upwd) {
		res.send("0");
		return;
	}
	var sql = "SELECT * FROM admio WHERE ausername=? and apassword=?";
	pool.query(sql, [obj.uname, obj.upwd], (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send("sec");
		} else {
			res.send("2");
		}
	});
});
//管理员添加学生账号
router.post("/admo_login_astu", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("账号为空");
		return;
	}
	if (!obj.upwd) {
		res.send("密码为空");
		return;
	}
	var s_sql = "SELECT * FROM s_user WHERE stu_username=?";
	pool.query(s_sql, [obj.uname], (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send("账号已存在，请重新输入");
		} else {
			var i_sql = "INSERT INTO s_user VALUES('NULL',?,?)";
			pool.query(i_sql, [obj.uname, obj.upwd], (err, data) => {
				if (err) throw err;
				if (data.affectedRows == 1) {
					res.send("添加成功");
				} else {
					res.send("添加失败");
				}
			});
		}
	});

});
//管理员添加教师账号
router.post("/admo_login_atea", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("账号为空");
		return;
	}
	if (!obj.upwd) {
		res.send("密码为空");
		return;
	}
	var s_sql = "SELECT * FROM t_user WHERE tea_username=?";
	pool.query(s_sql, [obj.uname], (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send("账号已存在，请重新输入");
		} else {
			var i_sql = "INSERT INTO s_user VALUES('NULL',?,?)";
			pool.query(sql, [obj.uname, obj.upwd], (err, data) => {
				if (err) throw err;
				if (data.affectedRows == 1) {
					res.send("添加成功");
				} else {
					res.send("添加失败");
				}
			});
		}
	});

});
//管理员删除学生账号
router.post("/admo_del_astu", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("账号为空");
		return;
	}
	var s_sql = "DELETE FROM s_user WHERE stu_username=?";
	pool.query(s_sql, [obj.uname], (err, data) => {
		if (err) throw err;
		if (data.affectedRows > 0) {
			res.send("删除成功");
		}else{
			res.send("账户不存在");
		}
	});

});
//管理员删除教师账号
router.post("/admo_del_atea", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("账号为空");
		return;
	}
	var s_sql = "DELETE FROM t_user WHERE tea_id=?";
	pool.query(s_sql, [obj.uname], (err, data) => {
		if (err) throw err;
		if (data.affectedRows > 0) {
			res.send("删除成功");
		}else{
			res.send("账户不存在");
		}
	});

});
//学生登录
router.post("/stu_login", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("1");
		return;
	}
	if (!obj.upwd) {
		res.send("0");
		return;
	}
	var sql = "SELECT * FROM s_user WHERE stu_username=? and stu_password=?";
	pool.query(sql, [obj.uname, obj.upwd], (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send("sec");
		} else {
			res.send("2");
		}
	});

});
//显示科目
router.get("/course", (req, res) => {
	var sql = "SELECT * FROM course";
	pool.query(sql, (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send(data);
		}
	})
});
//显示姓名
router.post("/stu_join", (req, res) => {
	var obj = req.body;
	var sql = "SELECT * FROM score WHERE stu_id=?";
	pool.query(sql, [obj.uname], (err, data) => {
		if (data.length > 0) {
			res.send(data);
		}
	});
})
//显示成绩
router.get("/score", (req, res) => {
	var obj = req.query;
	var sql = "SELECT * FROM score WHERE stu_id=?";
	pool.query(sql, [obj.uid], (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send(data);
		}
	})
});
//更改密码
router.post("/uppwd", (req, res) => {
	var obj = req.body;
	var sql = "UPDATE s_user SET stu_password=? WHERE stu_password=?";
	pool.query(sql, [obj.newpwd, obj.oldpwd], (err, data) => {
		if (err) throw err;
		res.send("修改成功");
	});
});
//教师登录
router.post("/teacher_login", (req, res) => {
	var obj = req.body;
	if (!obj.uname) {
		res.send("1");
		return;
	}
	if (!obj.upwd) {
		res.send("0");
		return;
	}
	var sql = "SELECT * FROM t_user WHERE tea_username=? and tea_password=?";
	pool.query(sql, [obj.uname, obj.upwd], (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send("sec");
		} else {
			res.send("2");
		}
	});

});
//添加学生成绩
router.post("/tea_add", (req, res) => {
	var obj = req.body;
	for (var key in obj) {
		if (!obj[key]) {
			res.send(key + "不能为空");
			return;
		}
	}
	var sql1 = "SELECT * FROM score WHERE stu_id=?";
	pool.query(sql1, [obj.uname], (err, data) => {
		if (err) throw err;
		if (data.length > 0) {
			res.send("该学生已有成绩");
		} else {
			var sql2 = "SELECT * FROM s_user WHERE stu_username=?";
			pool.query(sql2, [obj.uname], (err, data) => {
				if (err) throw err;
				if (data.length > 0) {
					var sql3 = "INSERT INTO score VALUES(NULL,?,?,?,?,?,?,?,?,?)";
					pool.query(sql3, [obj.uname, obj.name, obj.stu1, obj.stu2, obj.stu3, obj.stu4, obj.stu5, obj.stu6, obj.stu7], (err, data) => {
						if (err) throw err;				
							res.send("添加成功");
					});

				} else {
					res.send("没有该学生");
				}
			});
		}
	});
});


//导出
module.exports = router;