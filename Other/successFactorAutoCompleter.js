var successFactorAutoCompleter = setInterval(function(){ 
	if($("input[data-correct='true']").length){
		$("input[data-correct='true']").click();
		$("button#quizSubmitButton").click()
		$("button#nextQuestionButton").click();
	}else if($("div#mainContent>a.home").length){
		$("div#mainContent>a.home").click();
	}else if($("div#mainContent>a.thumbnail:not(:has(>div>span.label-success))").length){
		$("div#mainContent>a.thumbnail:not(:has(>div>span.label-success))").first().click();
	}else if($("button.vjs-big-play-button").length && $("video#mainVideo_html5_api").prop("ended") === false){
		$("button.vjs-big-play-button").click();
		$("video#mainVideo_html5_api").prop("volume",0);
		$("video#mainVideo_html5_api").prop("playbackRate", 1000000);
	}
}, 100);
//clearInterval(successFactorAutoCompleter)