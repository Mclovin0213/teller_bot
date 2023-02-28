import chineseImg from "../images/categories/chinese.png"
import americanImg from "../images/categories/american.png"
import brazilianImg from "../images/categories/brazilian.jpg"
import coffeeImg from "../images/categories/coffee.png"
import fast_foodImg from "../images/categories/fast_food.png"
import frenchImg from "../images/categories/french.png"
import japaneseImg from "../images/categories/japanese.png"
import mexicanImg from "../images/categories/mexican.jpeg"
import middle_easternImg from "../images/categories/middle_eastern.png"
import seafoodImg from "../images/categories/seafood.png"


export function getCats() {
    return [
        { title: "Chinese", image: chineseImg, isCat: true, id: 1},
        { title: "American", image: americanImg, isCat: true, id: 2},
        { title: "Brazilian", image: brazilianImg, isCat: true, id: 3},
        { title: "Cafe", image: coffeeImg, isCat: true, id: 4},
        { title: "Fast Food", image: fast_foodImg, isCat: true, id: 5},
        { title: "French", image: frenchImg, isCat: true, id: 6},
        { title: "Japanese", image: japaneseImg, isCat: true, id: 7},
        { title: "Mexican", image: mexicanImg, isCat: true, id: 8},
        { title: "Middle Eastern", image: middle_easternImg, isCat: true, id: 9},
        { title: "Seafood", image: seafoodImg, isCat: true, id: 10}
    ]
}