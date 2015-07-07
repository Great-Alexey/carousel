

var f = $('.Conteiner');

$('#left').click(function(){
    elWidth = $('.Conteiner').width();
    margin = 0;
        margin = margin - 100;
       
        if(margin > -elWidth){
            f.css({'margin-left': margin});
        }
//        else if(margin === -300){
//            f.css({'margin-left': margin});
//        }
});
$('#right').click(function(){
    if(margin < 0){
        margin = margin + 100;
            f.css({'margin-left': margin});
        } 
});


    
    
    
    



//    var width = $('.images li').width();
//    var step = 3;
//    var carousel = $('.carousel');
//    var container = $('.images');
//    var Elem = $('.images li');
//    var margin = 0;
//
//    $('#left').click(function(){
//      margin = Math.min(margin + width * step, 0);
//      container.css({'margin-left': margin}) ;
//    });
//    $('#right').click(function(){
//      margin = Math.max(margin - width * step, -width * (Elem.length - step));
//      container.css({'margin-left': margin}) ;
//    });

