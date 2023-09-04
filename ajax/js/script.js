$(document).ready(function() {
    // dwie metody uzycia funkcji 'get' w jQuery
    //zrodlo, funkcja; przy metodzie get zamiana stringa na obiekt JavaScript
    $.get('https://jsonplaceholder.typicode.com/users/1', function(data) {
        console.log(data);
        console.log(data.name);
        console.log(data.email);
    });

    $.get('https://jsonplaceholder.typicode.com/users/1')
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