import menuItemImg1 from '@/assets/test/menu-item/1.png'
import menuItemImg2 from '@/assets/test/menu-item/2.png'
import menuItemImg3 from '@/assets/test/menu-item/3.png'
import menuItemImg4 from '@/assets/test/menu-item/4.png'
import menuItemImg5 from '@/assets/test/menu-item/5.png'
import menuItemImg6 from '@/assets/test/menu-item/6.png'
import menuItemImg7 from '@/assets/test/menu-item/7.png'

const mainItems = [
  {
      "title": "S1 Tori Gyoza Starter",
      "description": "Pan-fried chicken dumplings.",
      "tags": ["vegetarian", "hot", "organic"],
      "price": 4.30,
      "optionGroups": [
          {
            title: 'Choose a size',
            required: true,
            options: [
              { title: 'Small', price: 0 },
              { title: 'Medium', price: 3.0 },
              { title: 'Large', price: 4.50 }
            ]
          }
      ]
  },
  {
      "title": "S2 Tori Gyoza Starter",
      "description": "Must have Japanese dumplings. Steamed & pan-fried to perfection, served with tangy shoyu soy.",
      "img": menuItemImg2,
      "special": true,
      "tags": ["vegetarian", "organic"],
      "price": 4.30,
      "optionGroups": [
        {
          title: 'Choose a size',
          required: 2,
          options: [
            { title: 'Option 1', price: 0 },
            { title: 'Option 2', price: 3.0 },
            { title: 'Option 3', price: 4.50 }
          ]
        }
      ]
  },
  {
      "title": "S3 Tori Gyoza Starter",
      "description": "Pan-fried chicken dumplings.",
      "img": menuItemImg3,
      "special": true,
      "tags": ["hot", "vegetarian", "organic"],
      "price": 4.30,
      "optionGroups": [
        {
          title: 'Choose a size',
          required: false,
          freeSelect: true,
          label: 'Extra',
          options: [
            { title: 'Option 1', price: 0 },
            { title: 'Option 2', price: 3.0 },
            { title: 'Option 3', price: 4.50 },
            { title: 'Option 4', price: 4.50 },
            { title: 'Option 5', price: 4.50 },
            { title: 'Option 6', price: 4.50 },
          ]
        }
      ]
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
  }
]

const dessertItems = [
  {
    "title": "Whipped Cream",
    "description": "Lorem ipsum dolor sit amet.",
    "img": menuItemImg5,
    "tags": ["vegetarian", "organic"],
    "price": 4.30,
    "optionGroups": [
      {
        title: 'Choose a size',
        required: true,
        options: [
          { title: 'Small', price: 0 },
          { title: 'Medium', price: 3.0 },
          { title: 'Large', price: 4.50 }
        ]
      },
      {
        title: 'Choose a size',
        required: true,
        options: [
          { title: 'Small', price: 0 },
          { title: 'Medium', price: 3.0 },
          { title: 'Large', price: 4.50 }
        ]
      },
      {
        title: 'Choose a size',
        required: true,
        options: [
          { title: 'Small', price: 0 },
          { title: 'Medium', price: 3.0 },
          { title: 'Large', price: 4.50 }
        ]
      },
      {
        title: 'Choose a size',
        required: true,
        options: [
          { title: 'Small', price: 0 },
          { title: 'Medium', price: 3.0 },
          { title: 'Large', price: 4.50 }
        ]
      }
    ]
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
    "calories": "402kcal",
    "img": menuItemImg7,
    "tags": ["vegetarian", "organic"],
    "price": 4.30
  }
]

const MainMenu_items = [
  {
    title: "Mains",
    items: mainItems
  },
  {
    title: "Desserts",
    items: dessertItems
  },
  {
    title: "Sushi Set Meals",
    items: mainItems.map((i, index) => ({...i, title: i.title + " " + ((1 + index) * 2 )}))
  }
]
const ChildrensMenu_items = [
  {
    title: "Children's mains",
    items: mainItems.map((i, index) => ({...i, title: i.title + " " + index}))
  },
  {
    title: "Children's desserts",
    items: dessertItems.map((i, index) => ({...i, title: i.title + " " + ((1 + index) * 3)}))
  },
  {
    title: "Children's sushi",
    items: mainItems.map((i, index) => ({...i, title: i.title + " " + ((1 + index) * 6)}))
  }
]
const ExtraMenu_items = [
  {
    title: "Extra mains",
    items: mainItems.map((i, index) => ({...i, title: i.title + " " + ((1 + index) * 9)}))
  },
  {
    title: "Extra desserts",
    items: dessertItems.map((i, index) => ({...i, title: i.title + " " + ((1 + index) * 12)}))
  },
  {
    title: "Extra sushi",
    items: mainItems.map((i, index) => ({...i, title: i.title + " " + ((1 + index) * 36)}))
  }
]



const menus = {
  'Main': MainMenu_items,
  'Children\'s': ChildrensMenu_items,
  'Third extra': ExtraMenu_items
}

export default menus