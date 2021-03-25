export const AddBasketProduct = () => {
    const addBasketBtnElement = document.querySelector('#btnAddBasket')
    
    addBasketBtnElement.addEventListener('click', () => {
        alert ('Produit bien ajouté au panier')
        ajoutLocalStor()
    });
}
function ajoutLocalStor() {


    let varnishElm = document.getElementById('inlineFormCustomSelect');
    let quantityElm = document.getElementById('quantiteProduit');

    let objetTabb = {
        _id: data._id,
        image: data.imageUrl,
        name: data.name,
        varnish: varnishElm.value,
        quantite: quantityElm.value,
        totalPrice: ((data.price * parseInt(quantityElm.value)) / 100),
        price: data.price / 100
    };


    let basketFull = JSON.parse(localStorage.getItem("basket"));

    if (!basketFull) {
        let basketFull = [];
        basketFull.push(objetTabb);
        localStorage.setItem("basket", JSON.stringify(basketFull));
        window.location.href = 'panier.html';

    } else if (!basketFull.some(p => p._id === objetTabb._id)) {

        basketFull.push(objetTabb);
        localStorage.setItem("basket", JSON.stringify(basketFull));

    } else {
        const newBasket = basketFull.filter(p => p._id !== objetTabb._id)
        newBasket.push(objetTabb);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    };

    window.location.href = 'panier.html';

};

