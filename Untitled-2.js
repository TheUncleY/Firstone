window.onload=function(){
    var stage = new createjs.Stage('c1');
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(60);
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0,0,50);
    circle.x = 0;
    circle.y = 100;
    stage.addChild(circle);
    createjs.Tween.get(circle,{loop:true}).to({x:1000},1000);
    function handleTick(event){
        stage.update();
    }
};
