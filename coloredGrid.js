window.onload = function() {
	grid.run()
}

var grid = (function(){
	var colorsArr = ["red", "blue", "green", "pink", "orange", "yellow", "purple", "black"]
	var recentlyChanged = []


	function assignRandomColor(square){
		var isNewColor;
		while(isNewColor != true){
			var randIndex = randomInteger(0, colorsArr.length - 1);
			var randColor = colorsArr[randIndex];
			isNewColor = checkCurrentColor(square, randColor);
		}
		square.style.background = randColor
		if(square.style.background != randColor){
			debugger;
		}
	}

	function checkCurrentColor(square, color){
		return !(square.style.background === color);
	}

	function chooseRandomSquare(){
		var squareRecentlyChanged, htmlId;
		while(squareRecentlyChanged != false){
			var randNum = randomInteger(1, 16);
			htmlId = "square-" + randNum;
			squareRecentlyChanged = checkForRecentChange(htmlId);
		}
		recentlyChanged.push(htmlId);
		leaveForTwoSeconds(htmlId);
		return document.getElementById(htmlId);
	}

	function checkForRecentChange(htmlId){
		if(recentlyChanged.includes(htmlId)){
			return true;
		} else {
			return false;
		}
	}

	function leaveForTwoSeconds(htmlId){
		setTimeout(function(){
			var index = recentlyChanged.indexOf(htmlId);
			recentlyChanged.splice(index, 1);
		}, 2000)
	}

	function performColorChanges(interval){
		var target = chooseRandomSquare();
		assignRandomColor(target);
		setTimeout(function(){performColorChanges(interval)} ,interval);
	}

	function randomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return{
		run: function(){
			setTimeout(function(){performColorChanges(250)} ,250);
		}
	}
})(); 