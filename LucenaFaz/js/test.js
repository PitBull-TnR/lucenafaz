$(function() {
    var maiorLinha = 0;
    $(".container .linha").each(function() {
        var larguraLinha = 0;
        $(this).children('tile').each(function() {
            larguraLinha += $(this).width();
            larguraLinha += 2*parseInt($(this).css("margin-right").toString().replace("px", ""));
08      });
        if (larguraLinha > maiorLinha) 
            maiorLinha = larguraLinha + 5;
    });
    $(".container").css("width", maiorLinha.toString() + "px");
})