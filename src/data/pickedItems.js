import menuItemImg1 from '@/assets/test/menu-item/1.png'
import menuItemImg2 from '@/assets/test/menu-item/2.png'
import menuItemImg3 from '@/assets/test/menu-item/3.png'
import menuItemImg4 from '@/assets/test/menu-item/4.png'
import menuItemImg5 from '@/assets/test/menu-item/5.png'
import menuItemImg6 from '@/assets/test/menu-item/6.png'
import menuItemImg7 from '@/assets/test/menu-item/7.png'

const items = [
{
    "title": "S2 Tori Gyoza Starter",
    "description": "Pan-fried chicken dumplings.",
    "img": menuItemImg2,
    "special": true,
    "tags": ["vegetarian", "organic"],
    "price": 4.30
},
{
    "title": "S3 Tori Gyoza Starter",
    "description": "Pan-fried chicken dumplings.",
    "img": menuItemImg3,
    "special": true,
    "tags": ["hot", "vegetarian", "organic"],
    "price": 4.30
},
{
    "title": "S4 Tori Gyoza Starter",
    "description": "Pan-fried chicken dumplings.",
    "img": menuItemImg4,
    "special": true,
    "tags": ["vegetarian", "organic", "glutenFree"],
    "price": 4.30,
    "optionGroups": [
        {
          title: 'Choose an option',
          required: false,
          options: [
            { "title": "Pita Bread", "price": 4.30 },
            { "title": "Naan Bread", "price": 4.30 },
            { "title": "Rice", "price": 4.30 }
          ]
        }
    ]
},{
  "title": "Whipped Cream",
  "description": "Lorem ipsum dolor sit amet.",
  "img": menuItemImg5,
  "tags": ["vegetarian", "organic"],
  "price": 4.30
},
{
  "title": "Donut",
  "description": "Lorem ipsum dolor sit amet.",
  "img": menuItemImg6,
  "tags": ["vegetarian", "organic"],
  "price": 4.30
},
{
  "title": "Cookie",
  "description": "Lorem ipsum dolor sit amet.",
  "img": menuItemImg7,
  "tags": ["vegetarian", "organic"],
  "price": 4.30
}
]

export default items

// [
//     [
//         {
//             "title": "Mezze",
//             "description": "Mezze translates to ‘a pleasant taste’ and the dishes are designed to stimulate the appetite.",
//             "img": 0,
//             "items": [
//                 {
//                     "title": "Batata Harra",
//                     "description": "potato cubes cooked with garlic & levantine chilli, topped with coriander",
//                     "img": 0,
//                     "tags": ["vegetarian", "hot", "organic"],
//                     "price": 7.00,
//                     "sizes": [
//                         {
//                             "size": "small",
//                             "price": 3.00
//                         },
//                         {
//                             "size": "large",
//                             "price": 4.50
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Khiyar Bil Laban",
//                     "description": "garlic mint yoghurt with diced cucumber",
//                     "img": 1,
//                     "special": true,
//                     "tags": ["vegetarian", "organic"],
//                     "price": 3.50
//                 },
//                 {
//                     "title": "Muhammara",
//                     "description": "Smoked red pepper paste & mixed nuts dip",
//                     "img": 2,
//                     "special": true,
//                     "tags": ["hot", "vegetarian", "organic"],
//                     "price": 5.50
//                 },
//                 {
//                     "title": "Mawsimieh Salad",
//                     "description": "onion, spinach, avocado, mushroom, sunflower & pumpkin seeds with garlic-infused vinaigrette",
//                     "img": 3,
//                     "special": true,
//                     "tags": ["vegetarian", "organic", "glutenFree"],
//                     "price": 5.50,
//                     "options": [
//                         {
//                             "title": "Pita Bread",
//                             "price": 1.00
//                         },
//                         {
//                             "title": "Naan Bread",
//                             "price": 2.00
//                         },
//                         {
//                             "title": "Rice",
//                             "price": 3.00
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Humous",
//                     "description": "homemade humous, levantine pickled cucumber, parsleyis is an item on your menu. Give your item a brief description                ",
//                     "special": true,
//                     "tags": ["vegan"],
//                     "price": 5.50,
//                     "img": 4
//                 },
//                 {
//                     "title": "Labneh",
//                     "description": "middle eastern strained yoghurt dip with zaatar & olives",
//                     "img": 5,
//                     "tags": ["vegan", "organic"],
//                     "price": 4.50,
//                     "options": [
//                         {
//                             "title": "Pita Bread",
//                             "price": 1.00
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Aubergine Rolls",
//                     "description": "grilled aubergine rolls stuffed with spinach & baladi cheese in lemon garlic sauce",
//                     "img": 6,
//                     "tags": ["vegetarian", "vegan", "organic", "glutenFree"],
//                     "price": 4.50,
//                     "options": [
//                         {
//                             "title": "Selection 1",
//                             "price": 4.00
//                         },
//                         {
//                             "title": "Selection 2",
//                             "price": 3.00
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "title": "Mains",
//             "description": "This is a section of your menu. Give your section a brief description",
//             "img": 1,
//             "items": [
//                 {
//                     "title": "Kofta bi thinieh",
//                     "description": "kofta meat baked with diced tomato, potato rounds in tahini sauce, served with rice & side salad",
//                     "img": 7,
//                     "special": true,
//                     "price": 10.50,
//                     "options": [
//                         {
//                             "title": "Rice",
//                             "price": 1.00
//                         },
//                         {
//                             "title": "Khobez Bread",
//                             "price": 1.00
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Kousa Mahshi",
//                     "description": "courgette & aubergine stuffed with minced meat & cracked wheat, simmered in a vegetable stew",
//                     "img": 8,
//                     "price": 10.50
//                 },
//                 {
//                     "title": "Mujaddara",
//                     "description": "seasoned brown lentils & bulgur topped with parsley, caramelised onions served with khyar bi laban & side salad",
//                     "img": 9,
//                     "tags": ["vegetarian", "vegan"],
//                     "price": 9.00,
//                     "options": [
//                         {
//                             "title": "Khiyar Bi Laban",
//                             "price": 0.00
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Kabseh",
//                     "description": "kabseh rice topped with grilled cauliflower, coriander, raisins & nuts, served with tomato-green chilli puree",
//                     "img": 10,
//                     "price": 8.00,
//                     "sizes": [
//                         {
//                             "size": "Vegetarian Kabseh",
//                             "price": 0.00
//                         },
//                         {
//                             "size": "Vegetarian Kabseh",
//                             "price": 2.00
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Msakahn",
//                     "description": "Simmered chicken breast sautéed in onions, sumaq & olive oil over khobez topped with mixed nuts, parsley & mint",
//                     "img": 11,
//                     "price": 9.00
//                 },
//                 {
//                     "title": "Freekeh",
//                     "description": "chicken on a bed of smoked green wheat topped with parsley & nuts, served with garlic-mint yoghurt & arabic salad",
//                     "img": 12,
//                     "price": 9.00,
//                     "sizes": [
//                         {
//                             "size": "Jai (Chicken)",
//                             "price": 0.00
//                         },
//                         {
//                             "size": "Lehmeh (Mince Meat)",
//                             "price": 1.50
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Maqlubeh",
//                     "description": "layered onion, tomato, potato, cauliflower, aubergine, rice seasoned with maqlubeh spices & garnished with parsley & cashew, served with mint yoghurt",
//                     "img": 13,
//                     "price": 10.00,
//                     "sizes": [
//                         {
//                             "size": "Lamb Mince",
//                             "price": 2.00
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "title": "Salads",
//             "description": "This is a section of your menu. Give your section a brief description",
//             "img": 2,
//             "items": [
//                 {
//                     "title": "Mawsimieh Salad",
//                     "description": "onion, spinach, avocado, mushroom, sunflower & pumpkin seeds with garlic-infused vinaigrette",
//                     "img": 3,
//                     "special": true,
//                     "tags": ["vegetarian", "organic", "glutenFree"],
//                     "price": 5.50,
//                     "options": [
//                         {
//                             "title": "Pita Bread",
//                             "price": 1.00
//                         },
//                         {
//                             "title": "Naan Bread",
//                             "price": 2.00
//                         },
//                         {
//                             "title": "Rice",
//                             "price": 3.00
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Fattoush",
//                     "description": "tomato, cucumber, lettuce, radish, green pepper, garlic, flatbread chips with middle eastern dressing",
//                     "img": 14,
//                     "tags": ["vegetarian", "organic"],
//                     "price": 5.50
//                 },
//                 {
//                     "title": "Malfoufeh",
//                     "description": "red cabbage, cucumber, tomato, haloumi cheese, olives with middle eastern dressing & mixed seeds",
//                     "img": 15,
//                     "tags": ["vegetarian", "glutenFree"],
//                     "price": 5.50
//                 }
//             ]
//         },
//         {
//             "title": "Dessert",
//             "description": "This is a section of your menu. Give your section a brief description",
//             "img": 3,
//             "items": [
//                 {
//                     "title": "Basboosa",
//                     "description": "also known as hareesa or namourah moist almond cake",
//                     "img": 16,
//                     "price": 22.20,
//                     "sizes": [
//                         {
//                             "size": "Whole Tray (takeaway)",
//                             "price": 0.00
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Butterscotch Drizzle Date Cake",
//                     "description": "Arabic English fusion dish. Chef's take on sticky toffee pudding & arabic date cake",
//                     "img": 17,
//                     "price": 38.00,
//                     "sizes": [
//                         {
//                             "size": "Whole Tray (takeaway)",
//                             "price": 0.00
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "title": "Drinks",
//             "description": "This is a section of your menu. Give your section a brief description",
//             "img": 4,
//             "items": [
//                 {
//                     "title": "Levantine Lemonade",
//                     "description": "arabic fresh lemon & mint drink,",
//                     "img": 18,
//                     "price": 3.50
//                 },
//                 {
//                     "title": "Diet Coke",
//                     "description": "less calory than regular coke",
//                     "img": 19,
//                     "price": 1.50
//                 }
//             ]
//         }
//     ]
// ]