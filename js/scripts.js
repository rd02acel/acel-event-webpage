$(document).ready(function(){
    $('#nav-bar').addClass('disabled');

    $('body, html').mousedown(function(event) {
        event.preventDefault();
    });

    

    var id = null;
    id = setTimeout(() => {
        console.log("stop loading animation if it takes too long");
        $("#loading").addClass('disabled');
    }, 2000);

    window.addEventListener("load", (event) => {
        console.log("page is fully loaded");
        $("#loading").addClass('disabled');
        if(id != null){
            clearTimeout(id);
        }

        // var dl4 = $("#dL4");
        // var l4scroll = $("#scrollContent-L4");
        // console.log("AAA:"+dl4.width());
        // console.log("AAA:"+l4scroll.width());
        // // l4scroll[0].scrollIntoView({ inline: 'center' });
        // l4scroll.animate({scrollLeft:"200%"},1000);

    });

    setTimeout(
        ()=>{
            console.log("BBBB:"+$( window ).height())
            var isFirst = true;
            var l4scroll = $("#scrollContent-L4");
            var dl4 = $("#dL4")
            var offset = $( window ).height() - dl4.height();
            var dl4pos = dl4.offset().top - offset;
            window.addEventListener("scroll",(event) =>{
                // console.log("AAA:"+window.scrollY)
                // console.log("AAAA:"+dl4pos)
                if (window.scrollY >= dl4pos && isFirst) {
                    l4scroll.animate({scrollLeft:""+$( window ).width()/2+"px"},1000);
                    isFirst = false;
                 }
            });
    
            resizeL4();
        },1000
    );

    function resizeL4(){
        console.log("DDDD:"+""+$(".l4-4 > img").height()+"px");
        $("#scrollContent-L4").animate({height:""+$(".l4-4 > img").height()+"px"},10);
    }


    // $( window ).on( "load", function() {
    //     console.log( "window loaded" );
    //     $("#loading").addClass('disabled');
    // });



    var islandscape = true;

    $( window ).on( "resize", function() {
        rotatecheat();
        resizeL4();
      } );
    rotatecheat();


    function rotatecheat(){
        if(window.innerHeight > window.innerWidth){
            //portrait
            $("#d1").addClass('disabled');
            $("#d1-mac").addClass('disabled');
            $("#d2").addClass('disabled');
            $("#d3").addClass('disabled');
            $("#d4").addClass('disabled');
            $("#d5").addClass('disabled');
            $("#d6").addClass('disabled');
            $("#d7").addClass('disabled');
            $("#nav-icon").addClass('disabled');

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


            
            
            var isMac = navigator.platform.toUpperCase().indexOf('MAC')!==-1;
            var isIPHONE = navigator.platform.toUpperCase().indexOf('IPHONE')!==-1;
            console.log("navigator.platform:"+navigator.platform);
            if( isMac||isIPHONE ){
                $('#d1-mac').removeClass('disabled');
            }else{
                $('#d1').removeClass('disabled');
            }
            $('#introVideo').get(0).play();

            $("#d2").removeClass('disabled');
            $("#d3").removeClass('disabled');
            $("#d4").removeClass('disabled');
            $("#d5").removeClass('disabled');
            $("#d6").removeClass('disabled');
            $("#d7").removeClass('disabled');
            $("#nav-icon").removeClass('disabled');

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



    
    $("#orderbtn-4").click(function(event){
        event.preventDefault();
        var email = 'stephen.p@acelpower.com';
        var subject = 'Boat Inquires';
        var emailBody = 'Hi, I am interested in the 50/75HP boat.';
        // window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        window.location = "https://forms.office.com/r/Yu8TmwxnEX";    
    });
    $("#orderbtn-L4").click(function(event){
        event.preventDefault();
        var email = 'stephen.p@acelpower.com';
        var subject = 'Boat Inquires';
        var emailBody = 'Hi, I am interested in the 50/75HP boat.';
        // window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        window.location = "https://forms.office.com/r/Yu8TmwxnEX";    
    });


    $("#btn-5").click(function(event){
        event.preventDefault();
        window.location = "https://www.acelpower.com/products/";    
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
        // window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        window.location = "https://forms.office.com/r/Yu8TmwxnEX";     
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
        // window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        window.location = "https://forms.office.com/r/Yu8TmwxnEX";     
    });






    // $("#d5btnPrev").click(function(){
    //     showPrev();
    // });
    // $("#d5btnNext").click(function(){
    //     showNext();
    // });

    $("#d6btn50").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('acel-dark-green');
        $("#d6specPic").attr('src',"res/6/50hpspecs.png");
        $("#d6enginePic").attr('src',"res/6/50hpv2.png");
    });

    $("#d6btn75").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('acel-dark-green'); 
        $("#d6specPic").attr('src',"res/6/75hpspecs.png");
        $("#d6enginePic").attr('src',"res/6/75hpv2.png");
    });

    $("#d6btn150").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('acel-dark-green');
        $("#d6specPic").attr('src',"res/6/150hpspecs.png");
        $("#d6enginePic").attr('src',"res/6/150hpv2.png");
    });

    $("#d6btn250").click(function(event){
        event.preventDefault();
        resetcolor();
        $(this).removeClass('w3-black');
        $(this).addClass('acel-dark-green'); 
        $("#d6specPic").attr('src',"res/6/250hpspecs.png");
        $("#d6enginePic").attr('src',"res/6/250hpv2.png");
    });


    function resetcolor(){
        $('div[id ^= "d6btn"]').each(function(){
            $(this).removeClass('acel-dark-green');
            $(this).addClass('w3-black');
        });
    }

    // function disableAll(){
    //     $('div[id ^= "d5-"]').each(function(){
    //         $(this).addClass('disabled');
    //     });
    // }
    // function showPrev(){
    //     var divarr = [];
    //     $('div[id ^= "d5-"]').each(function(index,item){
    //         console.log($(this).hasClass('disabled'))
    //         if($(this).hasClass('disabled') == false){
    //             divarr.push($(this).attr("id"));
    //         }
    //     });
    //     var target = "#d5-1"
    //     if(divarr.length==1){
    //         if(divarr[0].includes('1')){ target="#d5-4";}
    //         if(divarr[0].includes('2')){ target="#d5-1";}
    //         if(divarr[0].includes('3')){ target="#d5-2";}
    //         if(divarr[0].includes('4')){ target="#d5-3";}
    //         $(divarr[0]).addClass('disabled');
    //     }
    //     disableAll();
    //     console.log("target:"+target);
    //     $(target).removeClass('disabled');
    //     console.log(divarr);
    // }
    // function showNext(){
    //     var divarr = [];
    //     $('div[id ^= "d5-"]').each(function(index,item){
    //         console.log($(this).hasClass('disabled'))
    //         if($(this).hasClass('disabled') == false){
    //             divarr.push($(this).attr("id"));
    //         }
    //     });
    //     var target = "#d5-1"
    //     if(divarr.length==1){
    //         if(divarr[0].includes('1')){ target="#d5-2";}
    //         if(divarr[0].includes('2')){ target="#d5-3";}
    //         if(divarr[0].includes('3')){ target="#d5-4";}
    //         if(divarr[0].includes('4')){ target="#d5-1";}
    //         $(divarr[0]).addClass('disabled');
    //     }
    //     disableAll();
    //     console.log("target:"+target);
    //     $(target).removeClass('disabled');
    //     console.log(divarr);
    // }

    // $('div[id ^= "d5-"]').each(function(index,item){
    //     console.log($(this).hasClass('disabled'))
    // });



    $(".sliding-link").click(function(e) {
        e.preventDefault();
        var aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
    });
    


});