	// 根据左侧div来显示主页面的内容
	$(".dian").on("click", function () {
	    let $div = $(this);
	    $(".student").eq($div.index()).show().siblings(".student").hide();
	});
	$("button").on("click", function () {
	    let $btn = $(this);
        let $num = $btn.attr("value");
        let $inputs=$btn.siblings("input");
	    $.ajax({
            //对象语法:防止多个参数不确定有没有
	        url: "/cha/admo_login_astu",
	        type: "post",
	        data: {
	            uname: $inputs[0].value,
	            upwd: $inputs[1].value
	        },
	        //其实支持对象语法{属性:值,属性:值...}
	        dataType: "json" //如果服务端返回的是json字符串则可自动调用JSON.parse()将json字符串转为js数组或对象
	    }).then(function (data) {
	        // 注： jQuery3.x以上才支持promise
	        //then 会在收到的服务端的响应后自动执行
	        //形参result会自动接住服务端返回的数据
	        alert(data);
	        // $btn.siblings("input").attr("value", "");
        });     
	})


	// $(".category_banner ul li").hover(function(){
	// 	var $li=$(this);
	// 	// clearInterval(timer);
	// 	$(".category_banner .fore_banner").eq($(this).index()).show().siblings(".fore_banner").hide();
	// })
	// div1.onclick=function(){
	// 	adStudent.style.display="block";
	// 	adTeacher.style.display="none";
	// 	deStudent.style.display="none";
	// 	deTeacher.style.display="none";
	// }
	// div2.onclick=function(){
	// 	adStudent.style.display="none";
	// 	adTeacher.style.display="block";
	// 	deStudent.style.display="none";
	// 	deTeacher.style.display="none";
	// }
	// div3.onclick=function(){
	// 	adStudent.style.display="none";
	// 	adTeacher.style.display="none";
	// 	deStudent.style.display="block";
	// 	deTeacher.style.display="none";
	// }
	// div4.onclick=function(){
	// 	adStudent.style.display="none";
	// 	adTeacher.style.display="none";
	// 	deStudent.style.display="none";
	// 	deTeacher.style.display="block";
	// }
	// function joinStu(){
	// 	$.ajax({
	//         //对象语法:防止多个参数不确定有没有
	//         url: "/cha/admo_login_astu",
	//         type: "post",
	//         data: {
	//             uname: as_uname.value,
	//             upwd: as_upwd.value
	//         },
	//         //其实支持对象语法{属性:值,属性:值...}
	//         dataType: "json" //如果服务端返回的是json字符串则可自动调用JSON.parse()将json字符串转为js数组或对象
	//     }).then(function (data) {
	//         // 注： jQuery3.x以上才支持promise
	//         //then 会在收到的服务端的响应后自动执行
	//         //形参result会自动接住服务端返回的数据
	//         alert(data);
	// 		as_uname.value="";
	// 		as_upwd.value="";
	//     });
	// 	// var xhr = new XMLHttpRequest();
	// 	// xhr.onreadystatechange=function(){
	// 	// 	if(xhr.readyState==4&&xhr.status==200){
	// 	// 		var data=xhr.responseText;

	// 	// 	}
	// 	// }

	// 	// xhr.open("post","/cha/admo_login_astu",true);
	// 	// xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// 	// var formdata ="uname="+as_uname.value+"&upwd="+as_upwd.value;
	// 	// xhr.send(formdata);
	// }
	// function joinTea(){
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.onreadystatechange=function(){
	// 		if(xhr.readyState==4&&xhr.status==200){
	// 			var data=xhr.responseText;
	// 			alert(data);
	// 			as_uname.value="";
	// 			as_upwd.value="";
	// 		}
	// 	}
	// 	xhr.open("post","/cha/admo_login_atea",true);
	// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// 	var formdata ="uname="+at_uname.value+"&upwd="+at_upwd.value;
	// 	xhr.send(formdata);
	// }
	// function delStu(){
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.onreadystatechange=function(){
	// 		if(xhr.readyState==4&&xhr.status==200){
	// 			var data=xhr.responseText;
	// 			alert(data);
	// 			ds_uname.value="";
	// 		}
	// 	}

	// 	xhr.open("post","/cha/admo_del_astu",true);
	// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// 	var formdata ="uname="+ds_uname.value;
	// 	xhr.send(formdata);
	// }
	// function delTea(){
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.onreadystatechange=function(){
	// 		if(xhr.readyState==4&&xhr.status==200){
	// 			var data=xhr.responseText;
	// 			alert(data);
	// 			dt_id.value="";
	// 		}
	// 	}

	// 	xhr.open("post","/cha/admo_del_atea",true);
	// 	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// 	var formdata ="uname="+dt_id.value;
	// 	xhr.send(formdata);
	// }