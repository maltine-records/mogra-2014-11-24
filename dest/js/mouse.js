function mouse() {
    //var src = "./img/DUCT.gif";
    var src = "./img/arduino-small.png";
    var createGanmen = function(){
      var ganmen = $("<div class='mouse'><img src='"+src+"' style='width:70px;height:46px;'></div>");
      $(ganmen).css({overflow:'hidden', position:'absolute', top:'0', left:'0'});
      $('body').append(ganmen);
      return ganmen;
    };
    var ganmens = [];
    _(30).times(function(n){
        ganmens.push(createGanmen());
    });

    $('html').mousemove(function(ev){
        var position = [-50, -40, -30, -25, 25, 30, 40, 50];
        _.each(ganmens, function(ganmen){
            var moveGanmen = function() {
                var randPosX = position[Math.floor(Math.random()*position.length)];
                var randPosY = position[Math.floor(Math.random()*position.length)];
                $(ganmen).stop();
                $(ganmen).animate({
                    top:ev.pageY+randPosY,
                    left:ev.pageX+randPosX
                },{
                    duration: 1000,
                    specialEasing:{
                        top:'easeOutCirc',
                        left:'easeOutCirc'
                    }
                });
            };
            setTimeout(moveGanmen, 500);
        });
    });
}
