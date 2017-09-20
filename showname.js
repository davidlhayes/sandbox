$("#submit").click(function() {
    console.log("submit");
    $('#first').text($('#fname').val());
    $('#last').text($('#lname').val());

});