import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";






const categories=[

    {
        id:1,
        name:'All',
        image:<TiThSmallOutline size={30}/>
    },
    {
        id:2,
        name:'Breakfast',
        image:<MdOutlineFreeBreakfast size={30}/>
    },
    {
        id:3,
        name:'Soup',
        image:<LuSoup size={30}/>

    },
    {
        id:4,
        name:'Pasta',
        image:<GiNoodles size={30}/>
    },
    {
        id:5,
        name:'Main_course',
        image:<MdOutlineFoodBank size={30}/>
    },
    {
        id:6,
        name:'Pizza',
        image:<GiFullPizza size={30}/>

    },
    {
        id:7,
        name:'Burger',
        image:<GiHamburger size={30}/>

    },
]

export default categories