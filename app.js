// When you click in the body...

$('body').on('click', function () {
    console.log("app.js");
    // Display a sum of random values from random.js
    var startValue = 0;
    var newValue = startValue + 30 * sumRandoms(10);
    $('#time').text(moment().format("MM/DD/YY @ HH:mm"));
    $('#answer').text(newValue);
});