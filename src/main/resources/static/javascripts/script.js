$(document).ready(function () {
    function tartclock() {
        var time = new Data();
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
        var clockString = hour + ":" + minute + ":" + second + ":";

        $("#clock").text(clockString);
    }
    setInterval(tartclock(),1000);

    $("#change_colour").on("click",function(){
        var col = $(".img").css("background-color");
        $(".withColour").css('background', col);

        var result = col.split(',');
        var r=result[0].split(')')[1];
        var g=result[1].split(',')[0];
        var b=result[1].split(',')[1];

        r = parseInt(r) + 50;g = parseInt(g) + 20;b = parseInt(b) + 84;

        function rgb(r,g,b){
            return "rgb(" + r+","+g+","+b+")";
        }
        var color = rgb(r,g,b);
        $(".img").css('background', color);

    });
});