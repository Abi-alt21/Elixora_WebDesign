let cart = [];

document.querySelectorAll('.shop-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah aksi default

        // Ambil detail produk
        const productName = this.getAttribute('data-product');
        const productPrice = parseFloat(this.getAttribute('data-price'));

        // Ambil ID input jumlah
        const quantityInputId = this.getAttribute('data-quantity');
        const quantity = parseInt(document.getElementById(quantityInputId).value);

        // Hitung total harga untuk item ini
        const totalPrice = productPrice * quantity;

        // Tambahkan item ke keranjang belanja
        cart.push({ name: productName, price: productPrice, quantity: quantity, total: totalPrice });

        // Tampilkan pop-up keranjang belanja
        updateCart();
        showCart();
    });
});

function showCart() {
    // Tampilkan modal keranjang belanja
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCart() {
    // Sembunyikan modal keranjang belanja
    document.getElementById('cartModal').style.display = 'none';
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');

    // Kosongkan keranjang terlebih dahulu
    cartItemsContainer.innerHTML = '';

    // Tambahkan setiap item dari cart ke dalam HTML
    let totalCartAmount = 0;
    cart.forEach((item) => {
        totalCartAmount += item.total;

        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${item.total.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
    });

    // Perbarui total keseluruhan di keranjang
    totalAmount.textContent = `Total: $${totalCartAmount.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    // Tampilkan alert atau logika lain untuk proses checkout
    alert('Proceeding to checkout...');

    // Kosongkan keranjang belanja
    cart = [];  // Reset cart to empty

    // Perbarui tampilan keranjang belanja
    updateCart();

    // Tutup modal keranjang belanja setelah checkout
    closeCart();
}
document.querySelectorAll('.shop-button').forEach(button => {
  button.addEventListener('click', function(event) {
      // Jika ini mencegah default, tautan tidak akan berfungsi
      // event.preventDefault(); 
      window.location.href = this.getAttribute('href'); // Navigasi ke href
  });
});
