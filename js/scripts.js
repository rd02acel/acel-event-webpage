$(document).ready(function(){
    $('#nav-bar').addClass('disabled');
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();

        if (scroll >=20) {
            $('#nav-bar').removeClass('disabled');

        }
        else {
            $('#nav-bar').addClass('disabled');
        }
    });

    $('body, html').mousedown(function(event) {
        event.preventDefault();
    });
    
    $("#orderbtn").click(function(event){
        event.preventDefault();
        window.location = "https://www.acelpower.com/products/";    
    });

    $("#d5btnPrev").click(function(){
        showPrev();
    });
    $("#d5btnNext").click(function(){
        showNext();
    });

    $("#d6btn50").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('w3-teal');
        $("#d6specPic").attr('src',"res/6/Group 543.png");
        $("#d6enginePic").attr('src',"res/6/Group 547.png");
    });

    $("#d6btn75").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('w3-teal'); 
        $("#d6specPic").attr('src',"res/6/Group 544.png");
        $("#d6enginePic").attr('src',"res/6/Group 547.png");
    });

    $("#d6btn150").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('w3-teal');
        $("#d6specPic").attr('src',"res/6/Group 549.png");
        $("#d6enginePic").attr('src',"res/6/Group 548.png");
    });

    $("#d6btn250").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('w3-teal'); 
        $("#d6specPic").attr('src',"res/6/Group 549.png");
        $("#d6enginePic").attr('src',"res/6/Group 548.png");
    });


    function resetcolor(){
        $('div[id ^= "d6btn"]').each(function(){
            $(this).removeClass('w3-teal');
            $(this).addClass('w3-black');
        });
    }

    function disableAll(){
        $('div[id ^= "d5-"]').each(function(){
            $(this).addClass('disabled');
        });
    }
    function showPrev(){
        var divarr = [];
        $('div[id ^= "d5-"]').each(function(index,item){
            console.log($(this).hasClass('disabled'))
            if($(this).hasClass('disabled') == false){
                divarr.push($(this).attr("id"));
            }
        });
        var target = "#d5-1"
        if(divarr.length==1){
            if(divarr[0].includes('1')){ target="#d5-4";}
            if(divarr[0].includes('2')){ target="#d5-1";}
            if(divarr[0].includes('3')){ target="#d5-2";}
            if(divarr[0].includes('4')){ target="#d5-3";}
            $(divarr[0]).addClass('disabled');
        }
        disableAll();
        console.log("target:"+target);
        $(target).removeClass('disabled');
        console.log(divarr);
    }
    function showNext(){
        var divarr = [];
        $('div[id ^= "d5-"]').each(function(index,item){
            console.log($(this).hasClass('disabled'))
            if($(this).hasClass('disabled') == false){
                divarr.push($(this).attr("id"));
            }
        });
        var target = "#d5-1"
        if(divarr.length==1){
            if(divarr[0].includes('1')){ target="#d5-2";}
            if(divarr[0].includes('2')){ target="#d5-3";}
            if(divarr[0].includes('3')){ target="#d5-4";}
            if(divarr[0].includes('4')){ target="#d5-1";}
            $(divarr[0]).addClass('disabled');
        }
        disableAll();
        console.log("target:"+target);
        $(target).removeClass('disabled');
        console.log(divarr);
    }

    $('div[id ^= "d5-"]').each(function(index,item){
        console.log($(this).hasClass('disabled'))
    });

    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });
    


});