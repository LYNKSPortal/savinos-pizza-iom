export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price10: number;
  price14: number;
  note?: string;
  singlePrice?: number;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuNote = "Choose from: Regular Tomato Base or Hot & Spicy Base";

export interface Topping {
  id: string;
  name: string;
  price10: number;
  price14: number;
}

export const toppings: Topping[] = [
  { id: "chicken", name: "Chicken", price10: 1.0, price14: 1.5 },
  { id: "ham", name: "Ham", price10: 1.0, price14: 1.5 },
  { id: "pepperoni-topping", name: "Pepperoni", price10: 1.0, price14: 1.5 },
  { id: "salsiccia", name: "Salsiccia", price10: 1.0, price14: 1.5 },
  { id: "salami", name: "Salami", price10: 1.0, price14: 1.5 },
  { id: "tuna", name: "Tuna", price10: 1.0, price14: 1.5 },
  { id: "anchovies", name: "Anchovies", price10: 1.0, price14: 1.5 },
  { id: "pineapple", name: "Pineapple", price10: 1.0, price14: 1.5 },
  { id: "mushrooms", name: "Mushrooms", price10: 1.0, price14: 1.5 },
  { id: "sweetcorn", name: "Sweetcorn", price10: 1.0, price14: 1.5 },
  { id: "onions", name: "Onions", price10: 1.0, price14: 1.5 },
  { id: "peppers", name: "Peppers", price10: 1.0, price14: 1.5 },
  { id: "jalapeno-peppers", name: "Jalapeño Peppers", price10: 1.0, price14: 1.5 },
  { id: "smoked-sausage", name: "Smoked Sausage", price10: 1.0, price14: 1.5 },
  { id: "olives", name: "Olives", price10: 1.0, price14: 1.5 },
  { id: "mozzarella", name: "Mozzarella", price10: 1.0, price14: 1.5 },
  { id: "cheddar", name: "Cheddar", price10: 1.0, price14: 1.5 },
  { id: "goats-cheese", name: "Goat's Cheese", price10: 1.0, price14: 1.5 },
  { id: "blue-cheese", name: "Blue Cheese", price10: 1.0, price14: 1.5 },
];

export const glutenFreeNote = {
  title: "Gluten-Free Bases Available",
  price10: 2.0,
  price14: 3.0,
  disclaimer:
    "Gluten-free bases are made using gluten-free flour. They are prepared in a kitchen and oven where wheat flour is used and may therefore contain traces of gluten.",
  warning: "Not suitable for people with coeliac disease or a severe wheat allergy.",
};

export const menu: MenuCategory[] = [
  {
    id: "sides",
    title: "Sides",
    items: [
      { id: "garlic-bread-tomato", name: "Garlic Bread Tomato", description: "Stone-baked bread with tomato base", price10: 8.0, price14: 11.0, image: "/food/garlic-bread-tomato.jpg" },
      { id: "garlic-bread-cheese", name: "Garlic Bread Cheese", description: "Stone-baked bread topped with cheese", price10: 9.0, price14: 12.4, image: "/food/garlic-bread-cheese.jpg" },
      { id: "garlic-bread-tomato-chilli", name: "Garlic Bread Tomato & Chilli", description: "Stone-baked bread with tomato base and chilli", price10: 9.0, price14: 12.4, image: "/food/garlic-bread-tomato-and-chilli.jpg" },
      { id: "garlic-bread-cheese-mushroom", name: "Garlic Bread Cheese & Mushroom", description: "Stone-baked bread topped with cheese and mushroom", price10: 9.9, price14: 13.9, image: "/food/garlic-bread-cheese-and-mushroom.jpg" },
      { id: "garlic-bread-chilli-cheese", name: "Garlic Bread Chilli & Cheese", description: "Stone-baked bread topped with chilli and cheese", price10: 9.9, price14: 13.9, image: "/food/garlic-bread-chilli-and-cheese.jpg" },
      { id: "curly-fries", name: "Curly Fries", description: "Crispy seasoned curly fries", price10: 4.9, price14: 4.9, singlePrice: 4.9, image: "/food/curly-fries.jpg" },
    ],
  },
  {
    id: "pizza-menu",
    title: "Main Menu",
    items: [
      { id: "margherita", name: "Margherita", description: "Cheese & Tomato", price10: 9.9, price14: 12.4, image: "/food/margherita.jpg" },
      { id: "napoletana", name: "Napoletana", description: "Anchovies", price10: 10.9, price14: 15.4, image: "/food/napoletana.jpg" },
      { id: "prosciutto", name: "Prosciutto", description: "Ham", price10: 10.9, price14: 15.4, image: "/food/prosciutto.jpg" },
      { id: "funghi", name: "Funghi", description: "Mushrooms", price10: 10.9, price14: 15.4, image: "/food/funghi.jpg" },
      { id: "pepperoni", name: "Pepperoni", description: "Pepperoni", price10: 10.9, price14: 15.4, image: "/food/pepperoni.jpg" },
      { id: "prosciutto-funghi", name: "Prosciutto & Funghi", description: "Ham & Mushrooms", price10: 11.9, price14: 16.9, image: "/food/prosciutto-funghi.jpg" },
      { id: "tropicana", name: "Tropicana", description: "Ham & Pineapple", price10: 11.9, price14: 16.9, image: "/food/tropicana.jpg" },
      { id: "don-antonio", name: "Don Antonio", description: "Chicken & Pepperoni", price10: 11.9, price14: 18.4, image: "/food/don-antonio.jpg" },
      { id: "al-tonno", name: "Al Tonno", description: "Tuna, Anchovies & Olives", price10: 12.9, price14: 18.4, image: "/food/al-tonno.jpg" },
      { id: "pollo-e-spinaci", name: "Pollo E Spinaci", description: "Chicken, Spinach, Onions & Goat's Cheese", price10: 13.9, price14: 19.9, image: "/food/pollo-e-spinaci.jpg" },
      { id: "vegetarian", name: "Vegetarian", description: "Mushrooms, Onions, Sweetcorn & Peppers", price10: 13.9, price14: 19.9, image: "/food/vegetarian.jpg" },
      { id: "quattro-stagioni", name: "Quattro Stagioni", description: "Ham, Mushrooms, Onions & Peppers", price10: 13.9, price14: 19.9, image: "/food/quattro-stagioni.jpg" },
      { id: "quattro-formaggi", name: "Quattro Formaggi", description: "Mozzarella, Cheddar, Goat's Cheese & Blue Cheese", price10: 13.9, price14: 19.9 },
      { id: "vesuvio", name: "Vesuvio", description: "Ham, Pepperoni, Salsiccia, Jalapeño Peppers & Hot Sauce", price10: 13.9, price14: 19.9, image: "/food/vesuvio.jpg" },
      { id: "boscaiola", name: "Boscaiola", description: "Ham, Mushrooms, Salsiccia & Salami", price10: 13.9, price14: 19.9, image: "/food/boscaiola.jpg" },
      { id: "ai-frutti-di-mare", name: "Ai Frutti Di Mare", description: "Seafood, Peppers & Onions", price10: 14.9, price14: 21.4, image: "/food/ai-frutti-di-mare.jpg" },
      {
        id: "meaty-one",
        name: "Meaty One",
        description: "Ham, Chicken, Pepperoni, Salsiccia, Salami & Smoked Sausage",
        price10: 14.9,
        price14: 21.4,
        image: "/food/meaty-one.jpg",
      },
      {
        id: "savinos",
        name: "Savino's",
        description: "Mushrooms, Onions, Sweetcorn, Olives, Peppers, Ham, Pepperoni, Salami & Smoked Sausage",
        price10: 14.9,
        price14: 21.4,
        image: "/food/savinos-pizza.jpg",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { id: "pepsi-max", name: "Pepsi Max", description: "330ml can", price10: 2.0, price14: 2.0, singlePrice: 2.0, image: "/drinks/pepsi-max-can.jpg" },
      { id: "san-pellegrino-can", name: "San Pellegrino", description: "Various flavours", price10: 2.5, price14: 2.5, singlePrice: 2.5, image: "/drinks/sanpellegrino-aranciata-can.jpg" },
      { id: "aqua-panna", name: "Aqua Panna", description: "Still mineral water", price10: 2.5, price14: 2.5, singlePrice: 2.5, image: "/drinks/acqua-panna-can.jpg" },
      { id: "san-pellegrino-sparkling", name: "San Pellegrino Sparkling", description: "Sparkling mineral water", price10: 2.5, price14: 2.5, singlePrice: 2.5, image: "/drinks/sanpellegrino-sparkling-can.jpg" },
    ],
  },
];
