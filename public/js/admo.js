
	div1.onclick=function(){
		adStudent.style.display="block";
		adTeacher.style.display="none";
		deStudent.style.display="none";
		deTeacher.style.display="none";
	}
	div2.onclick=function(){
		adStudent.style.display="none";
		adTeacher.style.display="block";
		deStudent.style.display="none";
		deTeacher.style.display="none";
	}
	div3.onclick=function(){
		adStudent.style.display="none";
		adTeacher.style.display="none";
		deStudent.style.display="block";
		deTeacher.style.display="none";
	}
	div4.onclick=function(){
		adStudent.style.display="none";
		adTeacher.style.display="none";
		deStudent.style.display="none";
		deTeacher.style.display="block";
	}
	function joinStu(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var data=xhr.responseText;
				alert(data);
				as_uname.value="";
				as_upwd.value="";
			}
		}
		
		xhr.open("post","/cha/admo_login_astu",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var formdata ="uname="+as_uname.value+"&upwd="+as_upwd.value;
		xhr.send(formdata);
	}
	function joinTea(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var data=xhr.responseText;
				alert(data);
				as_uname.value="";
				as_upwd.value="";
			}
		}
		xhr.open("post","/cha/admo_login_atea",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var formdata ="uname="+at_uname.value+"&upwd="+at_upwd.value;
		xhr.send(formdata);
	}
	function delStu(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var data=xhr.responseText;
				alert(data);
				ds_uname.value="";
			}
		}
		
		xhr.open("post","/cha/admo_del_astu",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var formdata ="uname="+ds_uname.value;
		xhr.send(formdata);
	}
	function delTea(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var data=xhr.responseText;
				alert(data);
				dt_id.value="";
			}
		}
		
		xhr.open("post","/cha/admo_del_atea",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var formdata ="uname="+dt_id.value;
		xhr.send(formdata);
	}



