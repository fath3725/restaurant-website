
       $(document).ready(function() {
        $('mycarousel').carousel({ setInterval: 50});
        $('#carouselButton').click(function() {
            if ($('#carouselButton').children('span').hasClass('fa-pause')){
                $('#mycarousel').carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
            }
            else {
                $('#mycarousel').carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
            }
           
        });

        $('#reserveTable').click(function(){
                $("#reserveModal").modal('show')
        });

        $('#loginbtn').click(function(){
                $("#loginModal").modal('show')
        });

       });