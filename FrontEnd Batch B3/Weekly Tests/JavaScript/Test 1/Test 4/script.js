async function f1() {
    const url = 'https://dummyjson.com/products';
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '<p>Display the products here....</p>';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const products = data.products;

        productsContainer.innerHTML = '';

        products.forEach(product => {
            const productsDiv = document.createElement('div');
            productsDiv.className = 'product';
            productsDiv.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> $${product.price}</p>
            `;
            productsContainer.appendChild(productsDiv);
        });
    } catch (error) {
        productsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}