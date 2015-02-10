$ ->
    
    # slide price
    $("#slider-range").slider(
        range: true,
        min: 18000,
        max: 50000,
        values: [ 22650, 31643 ],
        slide: (event, ui)->
           $("#amount").val(ui.values[ 0 ] + "р. - " + ui.values[1] +  "р.") 
    )
    
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + "р. - " + $( "#slider-range" ).slider( "values", 1 ) +  "р." );
    
    # center pages-list nav
    $("#pages .content").css(width: $("#pages .content ul").outerWidth())
    
    # make menus drop automatically
    width_title_dropdown_menu = $('ul.nav li.dropdown').hover(-> 
      $('.dropdown-menu', this).fadeIn()
    ->
      $('.dropdown-menu', this).fadeOut('fast')
    ).outerWidth()
    
    # center the drop-down menu
    #$('.dropdown-menu').css(left: $('.dropdown-menu').outerWidth() / - 2 + width_title_dropdown_menu / 2)
    
    # hide filters automatically when the screen resolution < 1199
    $(window).resize(->
        if $('body').outerWidth() < 1199
            $('.sidebar .filter .collapse').collapse('hide')
        else
            $('.sidebar .filter .collapse').collapse('show')
    )
    if $('body').outerWidth() < 1199
        $('.sidebar .filter .collapse').removeClass('in')
    else
        $('.sidebar .filter .collapse').addClass('in')
    
    # show an even number of items at a screen resolution of < 998
    #items = $(".showroom .thumbnail")
    #
    #if items.length % 2 != 0 && $('body').outerWidth() < 970
    #    items.eq(items.length - 1).css(display: "none")
    #
    #if items.length % 2 != 0
    #    $(window).resize(->
    #        if $('body').outerWidth() < 970
    #            items.eq(items.length - 1).css(display: "none")
    #        else
    #           items.eq(items.length - 1).css(display: "block")
    #    )