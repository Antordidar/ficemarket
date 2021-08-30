(function ($) {
    "use strict";
    
    $(".scroller").niceScroll({cursorborder:"",cursorcolor:"#1D1C33",boxzoom:true}); // First scrollable DIV

    $(document).ready(function ($) {

    // Header Icon Click 
    $('.table-header-sort .col, .table-header-sort .single-sort-button').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.table-header-sort .col.active, .table-header-sort .single-sort-button').on('click', function() {
        $(this).addClass('active2').siblings().removeClass('active');
    });
   
    $('.single-top-button').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // blur-switch-button
    $('.blur-switch-button').on('click', function () {
        $('.exchange-body-widget-body, .exchange-body-item.history-filter-area, .exchange-body-item.order-book-filter-area').addClass('blur-filter');
    });
    $('.exchange-body-widget-body.blur-filter, .exchange-body-item.history-filter-area.blur-filter, .exchange-body-item.order-book-filter-area.blur-filter').on('click', function () {
        $('.exchange-body-widget-body, .exchange-body-item.history-filter-area, .exchange-body-item.order-book-filter-area').removeClass('blur-filter');
    });

    // Order Book Button 
    $('.single-button.button-middle').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active')
        $('.right-side-content-box').removeClass('selected-up').removeClass('selected-down');
    });
    $('.single-button.button-down').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active')
        $('.right-side-content-box').addClass('selected-up').removeClass('selected-down');
    });
    $('.single-button.button-up').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active')
        $('.right-side-content-box').addClass('selected-down').removeClass('selected-up');
    });

    // Favorite icon Color Change Jquery
    $('.favorite .favorite-icon').click(function() {
        $(this).css('color','yellow').siblings().css('color','yellow');
    });

    $('.table-cover .main-tr.header').click(function(){
        $(this).toggleClass("active", "").nextUntil('tr.header').css('display', function(i,v){
            return this.style.display === 'table-row' ? 'none' : 'table-row';
        });
    });

    

});
})(jQuery);

