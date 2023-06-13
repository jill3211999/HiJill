function submit(){

	// if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
    //     return false;
    // }
    // var elem = document.createElement('input');
    // elem.type = 'file';
    // return !elem.disabled;
    
	
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
