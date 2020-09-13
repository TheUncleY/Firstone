window.onload = function() {
	var cans = document.getElementById('can');
	var stage = new createjs.Stage(cans);
	var image = new Image();
	image.src = 'img/tu.jpg';
	var bitmap;
	var Img = document.getElementById('img');
	var Div = document.getElementById('div1');
	var Div3  = document.getElementById('div3');
	var Div4 = document.getElementById('div4');
	var oImg = document.getElementsByTagName('img');
	var feng = document.getElementById('div6');
	var Biao = document.getElementById('div7');
	var time = document.getElementById('timeout');
	var progressText = new createjs.Text("", "20px Arial", "#00FF00");
	var array1 =  new Array();
	var array2 =  new Array();
	var array3 = new Array();
	var X;
	var Y;
	var mouseX;
	var mouseY;
	var timer = null;
	var timer1 = null;
	var shu = null;
	var maxtime =null;
	var Manifest = [
	      {id: "myImage1", src:"img/1.jpg"},
	      {id: "myImage2",src:"img/2.jpg"},
	      {id: "myImage3",src:"img/3.jpg"},
	      {id: "myImage4",src:"img/tu.jpg"},
		  {id: "myImage5",src:"img/an.jpg"},
		  {id: "myImage6",src:"img/an2.jpg"},
		  {id: "myImage7",src:"img/bia2.ico"},
		  {id: "sound",src:"img/bg.mp3"},
		  {id: "sound1",src:"img/bg1.wav"},
		  {id: "sound2",src:"img/bg2.wav"}
	];
	var loader = new createjs.LoadQueue();
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("progress",handleProgress);
	loader.addEventListener("fileload",handleFileLoad);
	loader.loadManifest(Manifest);
	loader.setMaxConnections(0.1);
	loader.maintainScriptOrder=true;

	function Int() {
		var	sound = createjs.Sound.createInstance("sound");
		sound.play();
			Img.onclick = function () {
				this.style.display = 'none';
				Div3.style.display = ' block';
				oImg[1].onclick = function () {
					maxtime =30;
					timer1 = setInterval(CountDown, 1000);
					timer = setInterval(gameIn, 2000);
					Div.style.display = 'none';
				}
				oImg[2].onclick = function () {
					maxtime =20;
					timer1 = setInterval(CountDown, 1000);
					timer = setInterval(gameIn, 1000);
					Div.style.display = 'none';

				}
				oImg[3].onclick = function () {
					maxtime =20;
					timer1 = setInterval(CountDown, 1000);
					timer = setInterval(gameIn, 800);
					Div.style.display = 'none';
				}

				oImg[4].onclick = function () {
					window.location.reload();
				}

			}
		function CountDown() {
			if (maxtime >= 0) {
				seconds = Math.floor(maxtime % 60);
				msg = "距离结束还有"  + seconds + "秒";
				time.innerHTML = msg;
				--maxtime;
				if(array3.length!=0){
				shu = array1.length - 1;
				feng.innerHTML = shu;}
				else if(array3.length>1){
					clearInterval(timer);
					clearInterval(timer1);
					shu = array1.length - 2;
					feng.innerHTML = shu;
					var	sound2 = createjs.Sound.createInstance("sound2");
					sound2.play();
					Div.style.display = 'block';
					Div4.style.display = 'block';
					for(var i=1; i<4;i++){
						oImg[i].style.display = 'none'
					}
					alert("您获得的分数是："+shu);

				}
			}
			else {
				clearInterval(timer1);
				alert("时间到，结束!");
				window.location.reload();
			}
		}


	}

	function handleComplete() {
		var line = new createjs.Shape();
		line.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0)");
		line.graphics.moveTo(100, 0);
		line.graphics.lineTo(100, 400);
		line.graphics.moveTo(200, 0);
		line.graphics.lineTo(200, 400);
		line.graphics.moveTo(300, 0);
		line.graphics.lineTo(300, 400);
		line.graphics.moveTo(400, 0);
		line.graphics.lineTo(400, 400);
		line.graphics.moveTo(0, 100);
		line.graphics.lineTo(500, 100);
		line.graphics.moveTo(0, 200);
		line.graphics.lineTo(500, 200);
		line.graphics.moveTo(0, 300);
		line.graphics.lineTo(500, 300);
		line.graphics.endStroke();
		stage.addChild(line);
		stage.update();
		Int();
	}

	function playSound(event) {
		soundInstance = createjs.Sound.play(event.src);
	}


	function handleProgress(e){
		progressText.text = "已加载" + (loader.progress*100) + " %";
		stage.update();
	}


	function handleFileLoad(e){
		console.log("文件类型: " + e.item.type+",ID:" + e.item.id + "已成功加载");

		}

	function clickEvent(event){
		//createjs.Sound.registerSound("img/bg1.wav");
		var	sound1 = createjs.Sound.createInstance("sound1");
		sound1.play();
		for(var i=0; i<array3.length;i++){
			stage.removeChild(array3[i]);
			array3.splice(i,1);
		}

		stage.update();
	}


	function gameIn(ev) {

		bitmap = new createjs.Bitmap(image);
		bitmap.addEventListener("click", clickEvent);
		X = Math.floor(Math.random() * 5) * 100;
		Y = Math.floor(Math.random() * 4) * 100;
		array1.push(X);
		array2 = [Y];
	    array3.push(bitmap);
		bitmap.x = X;
		bitmap.y = Y;
		stage.addChild(bitmap);
		stage.update();
		shu = array1.length - 1;
		    feng.innerHTML = shu;
		if(array3.length>1){
			clearInterval(timer);
			clearInterval(timer1);
			shu = array1.length - 2;
			feng.innerHTML = shu;
			var	sound2 = createjs.Sound.createInstance("sound2");
			sound2.play();
			Div.style.display = 'block';
			Div4.style.display = 'block';
			for(var i=1; i<4;i++){
				oImg[i].style.display = 'none'
			}
			alert("您获得的分数是："+shu);

		}
	}
}