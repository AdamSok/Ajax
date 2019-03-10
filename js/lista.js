const getData = () => {
    fetch( 'https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach((element, index) => {
            let parName = document.createElement('p');
            let parID = document.createElement('p');
            let parURL = document.createElement('p');
            let divider = document.createElement('p');
            

            parName.innerText = `NAME: ${element.name}`;
            parID.innerText = `ID: ${element.id}`;
            parURL.innerText = `URL: ${element.website}`;
            divider.innerText = index + '-------------------------'

            document.body.appendChild(parName);
            document.body.appendChild(parID);
            document.body.appendChild(parURL);
        });
    })
    .catch(error => console.log(error))
}

let counter = false;

window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= (document.body.offsetHeight)) {
        if(!counter) {
    getData();
    counter = true;
    } else {
    counter = false;
    return;
    }
}
}


// let tablica = document.getElementsByTagName('li')



