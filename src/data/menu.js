import MainsCoverImg from '@/assets/test/menu-cover-mains.jpg'
import DessertsCoverImg from '@/assets/test/menu-cover-desserts.png'
import SushisCoverImg from '@/assets/test/menu-cover-sushis.jpg'

import ChildrensMainsCoverImg from '@/assets/test/menu-cover-childrens-mains.jpg'
import ChildrensDessertsCoverImg from '@/assets/test/menu-cover-childrens-desserts.png'
import ChildrensSushisCoverImg from '@/assets/test/menu-cover-childrens-sushis.jpg'


const mainMenu = [
    {
        title: "Mains",
        img: MainsCoverImg
    },
    {
        title: "Desserts",
        img: DessertsCoverImg
    },
    {
        title: "Sushi Set Meals",
        img: SushisCoverImg
    }
]

const childrensMenu = [
    {
        title: "Children's mains",
        img: ChildrensMainsCoverImg
    },
    {
        title: "Children's desserts",
        img: ChildrensDessertsCoverImg
    },
    {
        title: "Children's sushi",
        img: ChildrensSushisCoverImg
    }
]

const thirdExtraMenu = [
    {
        title: "Extra mains",
        img: MainsCoverImg
    },
    {
        title: "Extra desserts",
        img: DessertsCoverImg
    },
    {
        title: "Extra sushi",
        img: SushisCoverImg
    }
]

const menus = {
    'Main menu': mainMenu,
    'Children\'s menu': childrensMenu,
    'Third-extra menu': thirdExtraMenu
}

export default menus