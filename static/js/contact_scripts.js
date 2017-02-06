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
     Forms
     ----------------------------------------------------------------------
     */

    /* Email validation */
    function valid_email_address(email) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(email);
    }

    /*
     ----------------------------------------------------------------------
     Contact form validation
     ----------------------------------------------------------------------
     */

    $("#submit-btn").on("click", function(){
        $("#user-status").val("yes");
    });

    $("#contact-form").submit( function() {


        if ( !valid_email_address( $("#user-email").val() ) || $("#user-name").val().length <= 2  )  {

            if ( !valid_email_address( $("#user-email").val() ) ) {
                $("#user-email").addClass("error");
            }
            if ( $("#user-name").val().length <= 2 ){
                $("#user-name").addClass("error");
            }

        } else {
            $("#contact-form").submit();
        }

        return false;
    });

    $(".close-msg").on("click", function() {
        $(this).parent().removeClass("error");
    });

    $("#user-name, #user-email").on("click", function() {

        $(this).removeClass("error");

    });


}); // End $(document).ready(function(){
