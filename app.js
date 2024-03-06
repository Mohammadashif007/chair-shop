const chairs = [
    {
        id: 1,
        chairName: "Ergonomic Office Chair",
        description:
            "Provides superior comfort and back support for long work hours. Breathable mesh back and adjustable features.",
        image: "./images/1.jpg",
        price: 299.99,
    },
    {
        id: 2,
        chairName: "Modern Accent Chair",
        description:
            "Sleek and stylish design perfect for living rooms or bedrooms. Plush velvet upholstery and gold-tone legs.",
        image: "./images/2.jpg",
        price: 179.99,
    },
    {
        id: 3,
        chairName: "Gaming Chair",
        description:
            "Designed for ultimate comfort during extended gaming sessions. Adjustable backrest, armrests, and headrest.",
        image: "./images/3.jpg",
        price: 349.99,
    },
    {
        id: 4,
        chairName: "Director's Chair",
        description:
            "Classic and sophisticated design for offices or home studies. High-back with tufted leather and swivel base.",
        image: "./images/4.jpg",
        price: 499.99,
    },
];

const shop = document.getElementById("shop");

const basket = [];

const generatedShop = () => {
    return (shop.innerHTML = chairs
        .map((x) => {
            const { chairName, image, price, description, id } = x;
            return `
        <div id="product-id-${id}" class="item">
        <img width="200px" height="250px" src=${image} alt="" />
        <div class="details">
            <h3>${chairName}</h3>
            <p>
                ${description}
            </p>
            <div class="price">
                <h2>$${price}</h2>
                <div class="button">
                    <i onclick="decrement(${id})" class="fa-solid fa-minus counter-icon"></i>
                    <div id=${id}>0</div>
                    <i onclick="increment(${id})" class="fa-solid fa-plus counter-icon"></i>
                </div>
            </div>
        </div>
    </div>
        `;
        })
        .join(""));
};

generatedShop();

const increment = (id) => {
    const search = basket.find(x => x.id === id);
    if(search === undefined){
        basket.push({ id: id, item: 1 });
    }
    else {
        search.item += 1; 
    }

    update(id)

};
const decrement = (id) => {
    const search = basket.find(x => x.id === id);
    if(search.item === 0) return;
    else {
        search.item -= 1; 
    }
    update(id)
};

const update = (id) => {
    const search = basket.find(x => x.id === id)
    document.getElementById(id).innerText = search.item;
};
