	//获取学号和密码
	var stu_username = document.cookie.split("&")[0].split("=")[1];
	console.log(document.cookie);
	console.log(stu_username);
	var stu_upwd = document.cookie.split("&")[1].split("=")[1];
	console.log(stu_upwd);
	//ajax
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && xhr.status == 200) {
	        var data = xhr.responseText;
	        var users = JSON.parse(data);
	        uname.innerHTML = users[0].stu_name;
	    }
	}
	xhr.open("post", "/cha/stu_join", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	var formdata = "uname=" + stu_username;
	xhr.send(formdata);

	function show() {
	    yin.style.display = "none";
	    xian.style.display = "block";
	    p1.innerHTML += "，你本次的成绩为：";
	    //获取科目
	    (function () {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4 && xhr.status == 200) {
	                var data = xhr.responseText;
	                var users = JSON.parse(data);
	                var html = "";
	                html += "<tr>";
	                for (var i = 0; i < users.length; i++) {
	                    html += "<td>" + users[i].course_name + "</td>"
	                }
	                html += "</tr>";
	                myhead.innerHTML += html;
	            }
	        }
	        xhr.open("get", "/cha/course", true);
	        xhr.send(null);
	    })();
	    (function () {
	        console.log(1);
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4 && xhr.status == 200) {
	                var data = xhr.responseText;
	                var users = JSON.parse(data);
	                console.log(users);
	                var html = "";
	                html += "<tbody>";
	                html += "<td>" + users[0].stu1 + "</td>";
	                html += "<td>" + users[0].stu2 + "</td>";
	                html += "<td>" + users[0].stu3 + "</td>";
	                html += "<td>" + users[0].stu4 + "</td>";
	                html += "<td>" + users[0].stu5 + "</td>";
	                html += "<td>" + users[0].stu6 + "</td>";
	                html += "<td>" + users[0].stu7 + "</td>";
	                html += "</tbody>";
	                myhead.innerHTML += html;
	            }
	        }
	        var url = "/cha/score?uid=" + stu_username;
	        xhr.open("get", url, true);
	        xhr.send(null);
	    })();
	}

	function showyin() {
	    xian.style.display = "none";
	    yin.style.display = "block";
	}

	function changepwd() {
	    var pwd1 = oldpwd.value;
	    var pwd2 = newpwd.value;
	    var pwd3 = pwd.value;
	    if (pwd1 != stu_upwd) {
	        alert("初始密码不正确");
	    } else if (!pwd2) {
	        alert("请输入新密码");
	    } else if (!pwd3) {
	        alert("请重新输入密码");
	    } else if (pwd2 != pwd3) {
	        alert("两次密码不一致");
	    } else {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState == 4 && xhr.status == 200) {
	                var data = xhr.responseText;
	                alert(data);
	                window.location.href = "./student.html"
	            }
	        }
	        xhr.open("post", "/cha/uppwd", true);
	        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	        var formdata = "newpwd=" + pwd2 + "&oldpwd=" + pwd1;
	        xhr.send(formdata);
	    }

	}