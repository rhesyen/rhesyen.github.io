$(document).ready(function() {
    // dwie metody uzycia funkcji 'getJSON' w jQuery
    //pobieranie jedynie obiektów typu JSON
    $.getJSON('https://jsonplaceholder.typicode.com/users/1', function(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });

    $.getJSON('https://jsonplaceholder.typicode.com/users/1')
        .done(function(data) {
            console.log(data);
            console.log(data.name);
            console.log(data.email);
        })
        //obsluga bledow
        .fail(function(error) {
            console.log(error);
        })
});