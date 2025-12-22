const menuGrid = document.getElementById("menu-grid");
const allBtn = document.getElementById("all_btn");
const breakfasBtn = document.getElementById("breakfast_btn");
const lunchBtn = document.getElementById("lunch_btn");
const shakesBtn = document.getElementById("shakes_btn");
const dinnerBtn = document.getElementById("dinner_btn");



const menuItems = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: "$15.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    description:
      "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "lunch",
    price: "$13.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "$6.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    description:
      "kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: "$20.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "lunch",
    price: "$22.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "shakes",
    price: "$18.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    description:
      "Portland chicharrones ethical edison bulb palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: "$8.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    description:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge pork belly cloud bread.",
  },
  {
    id: 8,
    title: "American Classic",
    category: "lunch",
    price: "$12.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    description:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut.",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "shakes",
    price: "$16.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    description:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: "$39.99",
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    description:
      "steakboard fam synth authentic semiotics. edison bulb yuccie crucifix microdosing.",
  },
];

const createCard = (item) => {
  return `
    <div class="menu-card" data-category="${item.category}">
      <img src="${item.img}" alt="${item.title}" class="menu-card-image" loading="lazy">
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h3 class="menu-card-title">${item.title}</h3>
          <span class="menu-card-price">${item.price}</span>
        </div>
        <p class="menu-card-description">${item.description}</p>
      </div>
    </div>
  `;
};


const renderMenu = (items) => {
  menuGrid.innerHTML = items.map((item) => createCard(item)).join(""); 
};



renderMenu(menuItems); 
const all=()=>{
    menuGrid.innerHTML = menuItems.map((item) => createCard(item)).join(""); 

}
const breakfast = () => {
    const breakfastFiltered= menuGrid.innerHTML = menuItems.filter((item) =>item.category==="breakfast"); 
     renderMenu(breakfastFiltered)
};
const lunch = () => {
    const lunchFiltered = menuGrid.innerHTML = menuItems.filter((item) => item.category === "lunch");
    renderMenu(lunchFiltered);
};
const shakes = () => {
    const shakesFiltered = menuGrid.innerHTML = menuItems.filter((item) => item.category === "shakes");
    renderMenu(shakesFiltered);
};
const dinner = () => {
    const dinnerFiltered = menuGrid.innerHTML = menuItems.filter((item) => item.category === "dinner");
    renderMenu(dinnerFiltered);
};




allBtn.addEventListener("click", all)
breakfasBtn.addEventListener("click", breakfast)
lunchBtn.addEventListener("click" , lunch)
shakesBtn.addEventListener("click" , shakes)
dinnerBtn.addEventListener("click" , dinner)

