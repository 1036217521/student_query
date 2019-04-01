
function selStu() {
    (function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = xhr.responseText;
                var users = JSON.parse(data);
                kemu = users;
                console.log(kemu);
                var html = "";
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
        var url = "/cha/score?uid=" + uname.value;
        xhr.open("get", url, true);
        xhr.send(null);
    })();
}

function show() {
    xian.style.display = "block";
    yin.style.display = "none";
}

function showyin() {
    xian.style.display = "none";
    yin.style.display = "block";
    (function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = xhr.responseText;
                var users = JSON.parse(data);
                td1.innerHTML = users[0].course_name;
                td2.innerHTML = users[1].course_name;
                td3.innerHTML = users[2].course_name;
                td4.innerHTML = users[3].course_name;
                td5.innerHTML = users[4].course_name;
                td6.innerHTML = users[5].course_name;
                td7.innerHTML = users[6].course_name;
            }
        }
        xhr.open("get", "/cha/course", true);
        xhr.send(null);
    })();

}

function goscore() {
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = xhr.responseText;
            alert(data);
            stu_id.value=stu_name.value=stu1.value=stu2.value=stu3.value=stu4.value=stu5.value=stu6.value=stu7.value="";
        }
    }
    xhr.open("post", "/cha/tea_add", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var formdata = "uname=" + stu_id.value + "&name=" + stu_name.value + "&stu1=" + stu1.value + "&stu2=" + stu2.value + "&stu3=" + stu3.value + "&stu4=" + stu4.value + "&stu5=" + stu5.value + "&stu6=" + stu6.value + "&stu7=" + stu7.value;
    xhr.send(formdata);
}