$(document).ready(function(){
    $('#nav-bar').addClass('disabled');

    $('body, html').mousedown(function(event) {
        event.preventDefault();
    });

    $( window ).on( "load", function() {
        console.log( "window loaded" );
        $("#loading").addClass('disabled');
    });



    var islandscape = true;

    $( window ).on( "resize", function() {
        rotatecheat();
      } );
    rotatecheat();


    function rotatecheat(){
        if(window.innerHeight > window.innerWidth){
            //portrait
            $("#d1").addClass('disabled');
            $("#d2").addClass('disabled');
            $("#d3").addClass('disabled');
            $("#d4").addClass('disabled');
            $("#d5").addClass('disabled');
            $("#d6").addClass('disabled');
            $("#d7").addClass('disabled');
            $("#nav-bar").addClass('disabled');

            $('#dL1').removeClass('disabled');
            $("#dL2").removeClass('disabled');
            $("#dL3").removeClass('disabled');
            $("#dL4").removeClass('disabled');
            $("#dL5").removeClass('disabled');
            $("#dL6").removeClass('disabled');
            $("#dL7").removeClass('disabled');
            islandscape=false;
        }
        if(window.innerWidth > window.innerHeight){
            //landscape
            $("#dL1").addClass('disabled');
            $("#dL2").addClass('disabled');
            $("#dL3").addClass('disabled');
            $("#dL4").addClass('disabled');
            $("#dL5").addClass('disabled');
            $("#dL6").addClass('disabled');
            $("#dL7").addClass('disabled');

            $("#d1").removeClass('disabled');
            $("#d2").removeClass('disabled');
            $("#d3").removeClass('disabled');
            $("#d4").removeClass('disabled');
            $("#d5").removeClass('disabled');
            $("#d6").removeClass('disabled');
            $("#d7").removeClass('disabled');
            

            var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
            var isIPHONE = navigator.platform.toUpperCase().indexOf('IPHONE')!==-1;
            console.log("navigator.platform:"+navigator.platform);
            if( isMac||isIPHONE ){
                $('#d1-mac').removeClass('disabled');
            }else{
                $('#d1').removeClass('disabled');
            }
            $('#introVideo').get(0).play()

            islandscape=true;
        }
    }

    



    // $(window).scroll(function (){
    //     var scroll = $(window).scrollTop();

    //     if (scroll >=20 && islandscape) {
    //         $('#nav-bar').removeClass('disabled');

    //     }
    //     else {
    //         $('#nav-bar').addClass('disabled');
    //     }
    // });



    
    $("#orderbtn").click(function(event){
        event.preventDefault();
        var email = 'stephen.p@acelpower.com';
        var subject = 'Boat Inquires';
        var emailBody = 'Hi, I am interested in the 50/75HP boat.';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        // window.location = "https://www.acelpower.com/products/";    
    });
    $("#orderbtn-L4").click(function(event){
        event.preventDefault();
        var email = 'stephen.p@acelpower.com';
        var subject = 'Boat Inquires';
        var emailBody = 'Hi, I am interested in the 50/75HP boat.';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        // window.location = "https://www.acelpower.com/products/";    
    });

    $("#btn-L5").click(function(event){
        event.preventDefault();
        window.location = "https://www.acelpower.com/products/";    
    });



    $("#cta-7-1").click(function(event){
        event.preventDefault();
        window.location = "https://www.acelpower.com/products/";    
    });
    $("#cta-7-2").click(function(event){
        event.preventDefault();
        var email = 'john@acelpower.com';
        var subject = 'Investment Inquires';
        var emailBody = 'Hi, I am interested in investing ACEL Power Inc.';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        // window.location = "https://www.acelpower.com/products/";    
    });

    $("#cta-L7-1").click(function(event){
        event.preventDefault();
        window.location = "https://www.acelpower.com/products/";    
    });
    $("#cta-L7-2").click(function(event){
        event.preventDefault();
        var email = 'john@acelpower.com';
        var subject = 'Investment Inquires';
        var emailBody = 'Hi, I am interested in investing ACEL Power Inc.';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        // window.location = "https://www.acelpower.com/products/";    
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