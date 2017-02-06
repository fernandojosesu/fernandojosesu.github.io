/*
 Author: Ukieweb
 Template: ukieCard
 Version: 1.0
 URL: http://themeforest.net/user/UkieWeb
 */


$(document).ready(function(){

    "use strict";

    /*
     ----------------------------------------------------------------------
     Portfolio
     ----------------------------------------------------------------------
     */

    $("#portfolio-grid").mixItUp();

    $("#portfolio-grid .port-item-cont").on("click", function(){
        $("#portfolio-grid .port-item-cont").removeClass("touch");
        $(this).addClass("touch");
    });

    $(".mfp-close").on("click", function(){
        $("#portfolio-grid .port-item-cont").removeClass("touch");
    });

    $(".portfolio li").on("click", function() {
        $(".portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true
    });

}); // End $(document).ready(function(){
