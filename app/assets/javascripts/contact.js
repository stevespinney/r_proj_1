// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

function Submit() {
    var hasErrors = false;
    if (document.conForm.fname.value == "") {
            $('#fname').parent().parent().addClass('error');
            hasErrors = true;
    }
    if (document.conForm.lname.value == "") {
            $('#lname').parent().parent().addClass('error');
            hasErrors = true;
    }
    if (document.conForm.email.value == "") {
            $('#email').parent().parent().addClass('error');
            hasErrors = true;
    }
    if (document.conForm.msg.value == "") {
            $('#msg').parent().parent().addClass('error');
            hasErrors = true;
    }
    
    if (hasErrors)
        return false;
    else
        return true;    
        
}
$(document).ready( function() {

});
