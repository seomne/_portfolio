$(function(){
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 500){
			$(".header_project .header_wrap .menu_btn").css('display', 'block');
            $(".header_project .header_wrap .menu_btn").css('opacity', '1');
            $(".header_project .header_wrap .menu_btn span").css('background', '#000');
            $(".header_project .header_wrap ul").css('display', 'none');            
            $(".header_project .header_wrap .logo").css('visibility', 'hidden');            
        }else{
			$(".header_project .header_wrap .menu_btn").css('display', 'none');
            $(".header_project .header_wrap ul").css('display', 'flex');
			$(".header_project .header_wrap .logo").css('visibility', 'visible');
        }
    })

});