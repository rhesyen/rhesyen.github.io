$(document).ready(function() {
    //jQuery - $ajax() => https://api.jquery.com/jquery.ajax/
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        statusCode: {
            200: function() {
                console.log('OK-dziala');
            }
        },
        success: function(data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        },
        error: function(error) {
            console.error(error);
        }
    });
});