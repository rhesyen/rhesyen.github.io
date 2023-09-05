console.log('Pobieranie danych');

let btnGetUser = document.getElementById('get-user');
let divUsersData = document.getElementById('dane-programisty');

// Receive JSON data => GET User

const getUser = () => {
    fetch(`https://akademia108.pl/api/ajax/get-random-user.php`, {
    
        mode: 'cors',
        method: 'GET',

    })
    .then(res => res.json())
    .then(resJSON => {
        // console.log(resJSON);
        // I am extracting specific data from the JSON object
        // {"imie":"Piotr","nazwisko":"Szapiel","zawod":"Programista","firma":"Akademia 108"}
        const userData = 
        `{"imie":${resJSON.firstName},"nazwisko":${resJSON.lastName},"zawod":${resJSON.occupation},"firma":${resJSON.company}}`;
        divUsersData.innerText = userData;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

btnGetUser.addEventListener('click', getUser);

