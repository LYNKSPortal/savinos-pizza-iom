export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price10: number;
  price14: number;
  note?: string;
  singlePrice?: number;
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
  { id: "blue-cheese", name: "Blue Cheese", price10: 1.0, price14: 1.5 },
];

export const menu: MenuCategory[] = [
  {
    id: "sides",
    title: "Sides",
    items: [
      { id: "garlic-bread-tomato", name: "Garlic Bread (Tomato)", description: "Stone-baked bread with tomato base", price10: 8.0, price14: 11.0 },
      { id: "garlic-bread-cheese", name: "Garlic Bread (Cheese)", description: "Stone-baked bread topped with cheese", price10: 9.0, price14: 12.4 },
      { id: "curly-fries", name: "Curly Fries", description: "Crispy seasoned curly fries", price10: 4.9, price14: 4.9, singlePrice: 4.9 },
    ],
  },
  {
    id: "pizza-menu",
    title: "Main Menu",
    items: [
      { id: "margherita", name: "Margherita", description: "Cheese & Tomato", price10: 9.9, price14: 12.4 },
      { id: "napoletana", name: "Napoletana", description: "Anchovies", price10: 10.9, price14: 15.4 },
      { id: "prosciutto", name: "Prosciutto", description: "Ham", price10: 10.9, price14: 15.4 },
      { id: "funghi", name: "Funghi", description: "Mushrooms", price10: 10.9, price14: 15.4 },
      { id: "pepperoni", name: "Pepperoni", description: "Pepperoni", price10: 10.9, price14: 15.4 },
      { id: "prosciutto-funghi", name: "Prosciutto & Funghi", description: "Ham & Mushrooms", price10: 11.9, price14: 16.9 },
      { id: "tropicana", name: "Tropicana", description: "Ham & Pineapple", price10: 11.9, price14: 16.9 },
      { id: "don-antonio", name: "Don Antonio", description: "Chicken & Pepperoni", price10: 11.9, price14: 18.4 },
      { id: "al-tonno", name: "Al Tonno", description: "Tuna, Anchovies & Olives", price10: 12.9, price14: 18.4 },
      { id: "gioconda", name: "Gioconda", description: "Sweetcorn, Salami & Chicken", price10: 12.9, price14: 18.4 },
      { id: "pollo-e-spinaci", name: "Pollo E Spinaci", description: "Chicken, Spinach, Onions & Goats Cheese", price10: 13.9, price14: 19.9 },
      { id: "vegetarian", name: "Vegetarian", description: "Mushrooms, Onions, Sweetcorn & Peppers", price10: 13.9, price14: 19.9 },
      { id: "capricciosa", name: "Capricciosa", description: "Mushrooms, Artichokes, Salsiccia, Salami & Garlic", price10: 13.9, price14: 19.9 },
      { id: "quattro-stagioni", name: "Quattro Stagioni", description: "Ham, Mushrooms, Onions & Peppers", price10: 13.9, price14: 19.9 },
      { id: "vesuvio", name: "Vesuvio", description: "Ham, Pepperoni, Salsiccia, Jalapeño Peppers & Hot Sauce", price10: 13.9, price14: 19.9 },
      { id: "boscaiola", name: "Boscaiola", description: "Ham, Mushrooms, Salsiccia & Salami", price10: 13.9, price14: 19.9 },
      { id: "ai-frutti-di-mare", name: "Ai Frutti Di Mare", description: "Seafood, Peppers & Onions", price10: 14.9, price14: 21.4 },
      {
        id: "savinos",
        name: "Savino's",
        description: "Mushrooms, Onions, Sweetcorn, Olives, Peppers, Ham, Pepperoni, Salami & Smoked Sausage",
        price10: 14.9,
        price14: 21.4,
        note: "Blue Cheese optional",
      },
      {
        id: "meaty-one",
        name: "Meaty One",
        description: "Ham, Chicken, Pepperoni, Salsiccia, Salami & Smoked Sausage",
        price10: 14.9,
        price14: 21.4,
        note: "Blue Cheese optional",
      },
    ],
  },
];
