$(document).ready(function() {
    const width = $(document).width() || $(window).width();

    $('.title-box a').on('click',function(e) {
        e.preventDefault();
        let i = 0;
        let el = this;
        const tab = $(el).parent().nextAll('.items');
        for(i;(el = $(el).prev()).length > 0;i++);
        $('.title-box a').removeClass('active');
        $(this).addClass('active');
        $(tab).removeClass('flex');
        $(tab).addClass('hidden');
        $(tab[i]).removeClass('hidden');
        $(tab[i]).toggleClass('flex')
    });

    if(width < 1024)
    {
        $('#navMb').on('click',() => {
            $('#menu-header').addClass('open');
            $('#overlay').addClass('open');
        });

        $('#search-mobile').on('click',() => {
            $('.search-group').addClass('open');
            $('#overlay').addClass('open');
        });

        $('#overlay').on('click',() => {
            $('#overlay').removeClass('open');
            $('#menu-header').removeClass('open');
            $('.search-group').removeClass('open');
        });

        $('.group-menu').on('click',function() {
            const subMenu = $(this).next('.sub-menu');
            if(subMenu.hasClass('open')) 
                $(subMenu).removeClass('open');
            else 
            {
                $('.sub-menu').removeClass('open');
                $(subMenu).addClass('open');
            }
        });
    }
});