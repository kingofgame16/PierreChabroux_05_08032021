export const AddBasketProduct = () => {
    const addBasketBtnElement = document.querySelector('#btnAddBasket')
    
    addBasketBtnElement.addEventListener('click', () => {
        alert ('Produit bien ajouté au panier')
    })
}