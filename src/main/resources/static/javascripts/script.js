$(document).ready(function () {
    function tartclock() {
        var time = new Date();
        var hour =time.getHours().toString();
        var minute = time.getMinutes().toString();
        var second = time.getSeconds().toString();

        if(hour.length<2){
            hour += '0';
        }
        if(minute.length<2){
            minute += '0';
        }
        if(second.length<2){
            second += '0';
        }
        var clockString = hour + ":" + minute + ":" + second;

        $("#clock").text(clockString);
    }

    var pull = function () {
        requestAnimationFrame(pull);
        tartclock();
    }

    pull();

    $("#change_colour").on("click",function(){
        var col = $(".img").css("background-color");
        $(".withColour").css('background', col);

        var result = col.split(',');
        var r=result[0].split('(')[1];
        var g=result[1];
        var b=result[2].split(")");

        r = parseInt(r) + 50;g = parseInt(g) + 20;b = parseInt(b) + 84;
        if(r>200) r-=150;
        if(g>220) g-=150;
        if(b>=255) b=-200;
        function rgb(r,g,b){
            return "rgb(" + r+","+g+","+b+")";
        }
        var color = rgb(r,g,b);
        $(".img").css('background', color);

    });
});