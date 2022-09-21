let allTotal = 0;

function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let price = parseInt(mainEl.querySelector('.price').innerText.replace('$', ''));
    let name = mainEl.querySelector('h3').innerText;
    let quantity = parseInt(mainEl.querySelector('input').value);
    let total = price * quantity;

    let cartItems = document.querySelector('.cart-items');
    allTotal += total;

    if (quantity > 0) {
        cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                                </div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`;
        element.innerText = 'Added';
        element.setAttribute('disabled', true);
    }
}

function removeFromCart(element) {
    let mainEl = element.parentElement;
    mainEl.remove();
    let price = parseInt(mainEl.querySelector('p span').innerText);
    allTotal -= price;
    document.querySelector('.total').innerText = `Total: $${allTotal}`;

    let name = mainEl.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    vegetables.forEach(veg => {
        if (veg.querySelector('.si-content h3').innerText === name) {
            veg.querySelector('.actions input').value = 0;
            veg.querySelector('.actions button').removeAttribute('disabled');
            veg.querySelector('.actions button').innerText = 'Add';
        }
    });
}