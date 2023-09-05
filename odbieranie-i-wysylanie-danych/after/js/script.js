console.log('Serwisy do testowania API');

// ReqRes - https://reqres.in

let user = {
    "name": "John",
    "job": "programmer"
}

fetch('https://reqres.in/api/users', {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user),
})
.then(response => response.json())
.then(json => console.log(json))
.catch((error) => {
    console.error(error);
})