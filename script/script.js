let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  document.getElementById("cart-count").innerText = cart.length;
  renderCartItems();
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de finalizar a compra dos seguintes itens:\n\n";
  let total = 0;

  cart.forEach(item => {
    mensagem += `- ${item.name}: R$ ${item.price.toFixed(2)}\n`;
    total += item.price;
  });

  mensagem += `\nTotal: R$ ${total.toFixed(2)}\nComo posso pagar?`;

  let telefone = "5575992696445";
  let url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
}

function renderCartItems() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // Limpa a lista antes de renderizar
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)} `;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.style.marginLeft = "10px";


    removeBtn.onclick = function () {
      cart.splice(index, 1);
      document.getElementById("cart-count").innerText = cart.length;
      renderCartItems();
    };

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").innerText = `R$ ${total.toFixed(2)}`;
}