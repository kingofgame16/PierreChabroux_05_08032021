let basket = JSON.parse(localStorage.getItem('basket'));
let panierPart = document.querySelector('table');

const basketTabElement = document.querySelector('.basket');

//Panier vide
if(basket !== null){
    basketTabElement.classList.replace('invisible','visible')
    document.querySelector('.etatPanier').classList.replace('visible','invisible')
}

//Panier non vide, affichage des produits localstorage
let tableau = document.querySelector("tbody");

    let productIds = [];

    for (let i = 0; i < basket.length; i++) {
        productIds.push(basket[i].id);
    }

    
    for (let i = 0; i < basket.length; i++) {

        let indexLigne = document.createElement('th');
        indexLigne.textContent = i + 1;

        let nameProduct = document.createElement('td');
        nameProduct.textContent = basket[i].name;

        let varnishProduct = document.createElement('td');
        varnishProduct.textContent = basket[i].varnish;

        let priceProduct = document.createElement('td');
        priceProduct.textContent = basket[i].price;

        let suppTab = document.createElement("button");
        suppTab.innerHTML = "Delete";
        suppTab.classList.add("btn", "btn-danger");
        

        let ligneTableau = document.createElement('tr');
        ligneTableau.appendChild(indexLigne);
        ligneTableau.appendChild(nameProduct);
        ligneTableau.appendChild(varnishProduct);
        ligneTableau.appendChild(priceProduct);
        ligneTableau.appendChild(suppTab);

        tableau.appendChild(ligneTableau);
        panierPart.appendChild(tableau);
    }











/* for(k=0; k < data.length; k++){

        structurePanier = structurePanier +`
        <div class="row m-2 pt-3 panierLine">
            <div class="col-md-3 col-lg-2">
                <img alt="${data.name}" class="img-fluid" src="${data.image}">
            </div>
            <div class="col-md-4">
                <a href="produit.html?id=${data._id}"><h2>${data.name}</h2></a>
                <p><strong>Quantité</strong> : ${data.quantite}</p>
                <p><strong>Lentilles</strong> : ${data.varnished}</p>
            </div>
            <div class="col-md-5 col-lg-4"
                <p class="prixProduitPanier"><strong>Prix : <span>${data.totalPrice} €</span></strong></p>   
            </div>
            <div class="col-md-1">
                <button class="btn btn-danger mb-3" onclick="deleteItem('${data._id}')">Supprimer</button>  
            </div>
        </div>
        `;
}
if(k == data.length){

    Element3.innerHTML = structurePanier;
}
} */ 

//const btnCommande = document.getElementById("btnCom");


/* function calculePrice(priceProdUnit) {
    let quantites = document.getElementById('quantiteProduit');
    quantites.addEventListener('change', (event) => {
        const result = document.getElementById('totalPrice');
        result.textContent = `${priceProdUnit}` * `${event.target.value}`;
    })
} */