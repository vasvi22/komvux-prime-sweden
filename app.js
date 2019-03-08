const products = [
    { name: 'Iphone X', price: 4500, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/1.jpg', category: 'Elektronik' },
    { name: 'Samsung s10', price: 4000, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/2.jpg', category: 'Elektronik' },
    { name: 'Tröja Basic', price: 50, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/3.jpg', category: 'Kläder' },
    { name: 'Overwatch Lego', price: 350, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/4.jpg', category: 'Leksaker' },
    { name: 'Nike tröja', price: 600, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/5.jpg', category: 'Kläder' },
    { name: 'Gaming stol', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/6.jpg', category: 'Elektronik' }
    ,{ name: 'Ritbok', price: 150, id: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/7.jpg', category: 'Böcker' }
   ,{ name: 'Svart byxa', price: 50, id: 8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/8.jpg', category: 'Kläder' }
    ,{ name: 'Kirby64', price: 400, id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/9.jpg', category: 'Elektronik' }  
    ,{ name: 'Främlingen', price: 150, id: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: './img/10.png', category: 'Böcker' }
];

let cart = [];
const log = (arg) =>  console.log(arg)

const appendList = (array, location) => {
    const template = array.map((item, id) => {
        return `<li class="product col-3">
            <img src="${item.picture}" alt="${item.description}" />
            <div class="product-content">
                <h3>${item.name}  <span class="category">${item.category}</span><small>${item.price}kr</small></h3>
                <p>${item.description}</p>
            </div>
            <button type="button" id="${item.id}">Köp</button>
        </li>`;

    });
    $(location).html(template);
}

const addToCart = (array, id, location) => {

    let a = array.find(i => i.id === id);

    cart.push(a);

    const item = `<li class="item# id=${a.id}">
        <h3>${a.name}</h3>
        <button type="buttno">Ångra</button>
    </li>`;

    $('span.amount').text(cart.length);
    $(location).append(item);
}

const removeFromCart = (array, removedItem) => {
    array.splice(removedItem, 1);
}

const populateCart = (array, location) => {
    let item = `<li class="item" id="${array.id}">
        <h4>${array.name}</h4>
        <button type="button">X</button>
    </li>`;

    $('span.amount').text(array.length);
}

appendList(products, $('.product-list'));

$('.product').on('click', 'button', (e) => {
    let id = e.currentTarget.id;
    addToCart(products, +id, $('.cart-list'));
});

$('.cart-list').on('click', 'button', (e) => {
    let item = $(e.currentTarget).closest('li').remove();
    removeFromCart(cart, item);
    populateCart(cart, $('.cart-list'));

});




