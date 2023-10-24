console.log("Youhoooo!");



// // Methode Axios
// let datasAxios = await axiosTest2();
// console.log("Datas via Axios : ", datasAxios.results);
// async function axiosTest2() {
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292");
//     return response.data;
// }

// // Methode AJAX
// const resultAjax = await ajaxTest2('https://pokeapi.co/api/v2/pokemon?limit=1292');
// console.log("Résultat via Ajax - nécessite une promesse explicite : ", resultAjax.results);
// function ajaxTest2(url) {
//     return new Promise((resolve) => {
//         const xhr = new XMLHttpRequest();
//         if (!xhr) {
//             alert('Abandon : (Impossible de créer une instance de XMLHTTP');
//             return false
//         }
//         xhr.open('GET', url);
//         xhr.onreadystatechange = function () {
//             if (this.readyState == 4) {
//                 if (this.status == 200) {
//                     return resolve(JSON.parse(this.response));
//                 }
//             }
//         };
//         xhr.send();
//     });
// }

// Methode fetch
let datasFetch;
const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=10"
await getDataFetch();
async function getDataFetch() {
    const res = await fetch(urlApi);
    datasFetch = await res.json();
} 
console.log("Voici les données récupérées via Fetch : ", datasFetch.results);

let main = document.createElement("main");
document.body.appendChild(main);

let titre = document.createElement("h1");
titre.innerText = "Tableau Pokemon API";
main.appendChild(titre);

let monTableau = document.createElement("table")
main.appendChild(monTableau);
for (let i = 0; i < datasFetch.results.length; i++) {
    let Ligne = document.createElement("tr")
    Ligne.innerText = datasFetch.results[i].name
    monTableau.appendChild(Ligne)
    
}
