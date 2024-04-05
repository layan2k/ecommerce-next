import Sunglasses from "../../assets/sunglasses.jpg"
import firstWatch from "../../assets/watch1.jpg"
import secondWatch from "../../assets/watch2.jpg"
import summerSale from "../../assets/summersale.jpg"
import womensSale from "../../assets/womensfashion.jpg"
import jacket from "../../assets/jacket.jpg"
import skirt from "../../assets/skirt.jpg"
import shirt from "../../assets/shirt.jpg"
import sport from "../../assets/sports.jpg"
import party from "../../assets/party.jpg"


interface heroDataInt {
    id: number,
    img: any,
    title: string,
    mainTitle: string,
    price: string
}
export const heroData: heroDataInt[] = [{
    id: 0,
    img: womensSale,
    title: "Trending Item",
    mainTitle: "WOMEN'S LATEST FASHION SALE",
    price: "$20",
},
{
    id: 1,
    img: Sunglasses,
    title: "Trending Accessories",
    mainTitle: "MODERN SUNGLASSES",
    price: "$15",
},
{
    id: 2,
    img: summerSale,
    title: "Sale Offer",
    mainTitle: "NEW FASHION SUMMER SALE",
    price: "$30",
},
]

export const productsData = [
    {
        img: jacket,
        title: "Jacket",
        desc: "MEN Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "45.00",
    },
    {
        img: skirt,
        title: "Skirt",
        desc: "BLack Floral Wrap Midi Skirt",
        rating: 5,
        price: "55.00",
    },
    {
        img: party,
        title: "Party Wear",
        desc: "Women's Party Wear Shoes",
        rating: 3,
        price: "25.00",
    },
    {
        img: shirt,
        title: "Shirt",
        desc: "Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "45.00",
    },
    {
        img: sport,
        title: "Sports",
        desc: "Trekking & Running Shoes - Black",
        rating: 3,
        price: "58.00",
    },
    {
        img: firstWatch,
        title: "Watches",
        desc: "Smart Watches Vital Plus",
        rating: 4,
        price: "100.00",
    },
    {
        img: secondWatch,
        title: "Watches",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "120.00",
    },
];
