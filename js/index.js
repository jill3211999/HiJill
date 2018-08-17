function submit(){
	
	firebase.database().ref().once('value').then(function(snapshot) {
		var nowIndex = Object.keys(snapshot.val()).length;

		if (nowIndex != undefined && document.getElementById("questionTextarea").value != "") {
			firebase.database().ref().update({
			    [nowIndex] : document.getElementById("questionTextarea").value
		  	}, function(error) {
			    if (error) {
			      // The write failed...
			      	alert("送出有問題，請重新送出");
			    }else{
			    	alert("成功～");
			    	document.getElementById("questionTextarea").value = "";
			    }
			});
		}else{
			alert("沒有送到，再送出一次");
		};
	});
	

}
