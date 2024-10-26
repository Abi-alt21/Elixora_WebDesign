    let cart = [];

    document.querySelectorAll('.shop-button').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // Detail produk
            const productName = this.getAttribute('data-product');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            // Input jumlah
            const quantityInputId = this.getAttribute('data-quantity');
            const quantity = parseInt(document.getElementById(quantityInputId).value);

            // Total harga
            const totalPrice = productPrice * quantity;

            // Tambahkan Item ke keranjang belanja
            cart.push({ name: productName, price: productPrice, quantity: quantity, total: totalPrice });

            // Tampilkan pop-up keranjang belanja
            updateCart();
            showCart();
        });
    });

    function showCart() {
        document.getElementById('cartModal').style.display = 'flex';
    }

    function closeCart() {
        document.getElementById('cartModal').style.display = 'none';
    }

    function updateCart() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalAmount = document.getElementById('totalAmount');

        cartItemsContainer.innerHTML = '';

        let totalCartAmount = 0;
        cart.forEach((item) => {
            totalCartAmount += item.total;

            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${item.total.toFixed(2)}`;
            cartItemsContainer.appendChild(listItem);
        });
        totalAmount.textContent = `Total: $${totalCartAmount.toFixed(2)}`;
    }

    function checkout() {
        if (cart.length === 0) {
            alert('Your cart is empty.');
            return;
        }
        alert('Proceeding to checkout...');
        cart = [];
        updateCart();
        closeCart();
    }
    document.querySelectorAll('.shop-button').forEach(button => {
    button.addEventListener('click', function(event) {
        window.location.href = this.getAttribute('href');
    });
    });
