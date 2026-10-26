
const foodData = [
  {
    id: 1,
    food_name: "Pancakes",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80",
    price: 149
  },
  {
    id: 2,
    food_name: "Masala Dosa",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    price: 120
  },
  {
    id: 3,
    food_name: "Idli Sambar",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    price: 80
  },
  {
    id: 4,
    food_name: "Veg Sandwich",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    price: 99
  },
  {
    id: 5,
    food_name: "Omelette Toast",
    meal_type: "breakfast",
    food_type: "nonveg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    price: 110
  },
  {
    id: 6,
    food_name: "Aloo Paratha",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80",
    price: 90
  },
  {
    id: 7,
    food_name: "Poha",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    price: 60
  },
  {
    id: 8,
    food_name: "French Toast",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80",
    price: 130
  },
  {
    id: 9,
    food_name: "Cornflakes Bowl",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80",
    price: 100
  },
  {
    id: 10,
    food_name: "Upma",
    meal_type: "breakfast",
    food_type: "veg",
    food_category: "Breakfast",
    food_image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    price: 70
  },
  {
    id: 11,
    food_name: "Tomato Soup",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    price: 120
  },
  {
    id: 12,
    food_name: "Sweet Corn Soup",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    price: 130
  },
  {
    id: 13,
    food_name: "Hot and Sour Soup",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    price: 140
  },
  {
    id: 14,
    food_name: "Chicken Soup",
    meal_type: "lunch",
    food_type: "nonveg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    price: 170
  },
  {
    id: 15,
    food_name: "Mushroom Soup",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    price: 150
  },
  {
    id: 16,
    food_name: "Minestrone Soup",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    price: 160
  },
  {
    id: 17,
    food_name: "Cream of Broccoli Soup",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    price: 155
  },
  {
    id: 18,
    food_name: "Manchow Soup",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    price: 135
  },
  {
    id: 19,
    food_name: "Veg Clear Soup",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    price: 100
  },
  {
    id: 20,
    food_name: "Lentil Soup",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Soup",
    food_image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    price: 110
  },
  {
    id: 21,
    food_name: "Alfredo Pasta",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
    price: 240
  },
  {
    id: 22,
    food_name: "Arrabbiata Pasta",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    price: 220
  },
  {
    id: 23,
    food_name: "Pesto Pasta",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
    price: 260
  },
  {
    id: 24,
    food_name: "Mac and Cheese",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=600&q=80",
    price: 230
  },
  {
    id: 25,
    food_name: "Spaghetti Bolognese",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    price: 290
  },
  {
    id: 26,
    food_name: "Penne Pink Sauce",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
    price: 250
  },
  {
    id: 27,
    food_name: "Lasagna",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=600&q=80",
    price: 310
  },
  {
    id: 28,
    food_name: "Fettuccine Mushroom Pasta",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Pasta",
    food_image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80",
    price: 280
  },
  {
    id: 29,
    food_name: "Margherita Pizza",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Pizza",
    food_image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    price: 249
  },
  {
    id: 30,
    food_name: "Farmhouse Pizza",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Pizza",
    food_image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    price: 329
  },
  {
    id: 31,
    food_name: "Pepperoni Pizza",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Pizza",
    food_image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
    price: 399
  },
  {
    id: 32,
    food_name: "BBQ Chicken Pizza",
    meal_type: "lunch",
    food_type: "nonveg",
    food_category: "Pizza",
    food_image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    price: 379
  },
  {
    id: 33,
    food_name: "Four Cheese Pizza",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Pizza",
    food_image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    price: 359
  },
  {
    id: 34,
    food_name: "Veggie Supreme Pizza",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Pizza",
    food_image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80",
    price: 299
  },
  {
    id: 35,
    food_name: "Classic Veg Burger",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Burger",
    food_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    price: 149
  },
  {
    id: 36,
    food_name: "Chicken Burger",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Burger",
    food_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    price: 199
  },
  {
    id: 37,
    food_name: "Cheese Burger",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Burger",
    food_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    price: 179
  },
  {
    id: 38,
    food_name: "Double Patty Burger",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Burger",
    food_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    price: 249
  },
  {
    id: 39,
    food_name: "Paneer Burger",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Burger",
    food_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    price: 169
  },
  {
    id: 40,
    food_name: "Crispy Chicken Burger",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Burger",
    food_image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    price: 219
  },
  {
    id: 41,
    food_name: "Butter Chicken",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    price: 320
  },
  {
    id: 42,
    food_name: "Paneer Butter Masala",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80",
    price: 250
  },
  {
    id: 43,
    food_name: "Chicken Biryani",
    meal_type: "lunch",
    food_type: "nonveg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80",
    price: 280
  },
  {
    id: 44,
    food_name: "Veg Biryani",
    meal_type: "dinner",
    food_type: "veg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    price: 210
  },
  {
    id: 45,
    food_name: "Grilled Chicken",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
    price: 350
  },
  {
    id: 46,
    food_name: "Dal Tadka",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    price: 160
  },
  {
    id: 47,
    food_name: "Chole Bhature",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80",
    price: 140
  },
  {
    id: 48,
    food_name: "Fish Curry",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
    price: 290
  },
  {
    id: 49,
    food_name: "Veg Fried Rice",
    meal_type: "lunch",
    food_type: "veg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    price: 180
  },
  {
    id: 50,
    food_name: "Chicken Noodles",
    meal_type: "dinner",
    food_type: "nonveg",
    food_category: "Main_course",
    food_image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    price: 220
  }
];

export default foodData;
