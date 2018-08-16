var nowIndex = getNowIndex();
	firebase.database().ref().once('value').then(function(snapshot) {
		nowIndex = Object.keys(snapshot.val()).length;
	});

function submit(){

	console.log(nowIndex);
	
	firebase.database().ref().once('value').then(function(snapshot) {
		nowIndex = Object.keys(snapshot.val()).length;
	});
	
	if (nowIndex != undefined) {
		firebase.database().ref().update({
		    [nowIndex] : document.getElementById("questionTextarea").value
	  	}, function(error) {
		    if (error) {
		      // The write failed...
		      	alert("送出有問題，請重新送出");
		    }else{
		    	alert("成功～");
		    	document.getElementById("questionTextarea").value = ""
		    }
		});
	}else{
		alert("沒有送到，再送出一次");
	};
}

function getNowIndex(){
	firebase.database().ref().once('value').then(function(snapshot) {
	  // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
		return Object.keys(snapshot.val()).length;
	});
}
