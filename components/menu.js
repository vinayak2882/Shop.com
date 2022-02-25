   $('#btn').click(function(){
           $(this).toggleClass("click");
           $('.sidebar').toggleClass("show");
         });
           $('.feat-btn').click(function(){
             $('nav ul .feat-show').toggleClass("show");
             $('nav ul .first').toggleClass("rotate");
           });
           $('.serv-btn').click(function(){
             $('nav ul .serv-show').toggleClass("show1");
             $('nav ul .second').toggleClass("rotate");
           });
           $('.three-btn').click(function(){
             $('nav ul .three-show').toggleClass("show2");
             $('nav ul .three').toggleClass("rotate");
           });
            $('.four-btn').click(function(){
             $('nav ul .four-show').toggleClass("show3");
             $('nav ul .four').toggleClass("rotate");
           });
            $('.five-btn').click(function(){
             $('nav ul .five-show').toggleClass("show4");
             $('nav ul .five').toggleClass("rotate");
           });
            $('.six-btn').click(function(){
             $('nav ul .six-show').toggleClass("show5");
             $('nav ul .six').toggleClass("rotate");
           });
            $('.seven-btn').click(function(){
             $('nav ul .seven-show').toggleClass("show6");
             $('nav ul .seven').toggleClass("rotate");
           });
            $('.eight-btn').click(function(){
             $('nav ul .eight-show').toggleClass("show7");
             $('nav ul .eight').toggleClass("rotate");
           });
            $('.nine-btn').click(function(){
             $('nav ul .nine-show').toggleClass("show8");
             $('nav ul .nine').toggleClass("rotate");
           });
            $('.ten-btn').click(function(){
             $('nav ul .ten-show').toggleClass("show9");
             $('nav ul .ten').toggleClass("rotate");
           });
            $('.eleven-btn').click(function(){
             $('nav ul .eleven-show').toggleClass("show10");
             $('nav ul .eleven').toggleClass("rotate");
           });
            $('.twelve-btn').click(function(){
             $('nav ul .twelve-show').toggleClass("show11");
             $('nav ul .twelve').toggleClass("rotate");
           });

           $('.thirteen-btn').click(function(){
             $('nav ul .thirteen-show').toggleClass("show12");
             $('nav ul .thirteen').toggleClass("rotate");
           });
           $('nav ul li').click(function(){
             $(this).addClass("active").siblings().removeClass("active");
           });
      
