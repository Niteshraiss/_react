import { useState } from "react"
import Productitem from "../components/Productitem"
export default function Product() {
    let [products, setProducts] = useState([
        {
            name: "Apple iPhone 14",
            price: 79900,
            imageUrl: "https://tse2.mm.bing.net/th?id=OIP.wKEvIhL5zIE1b5W4kf3PNgHaHa&pid=Api"
        },
        {
            name: "Sony PlayStation 5",
            price: 49990,
            imageUrl: "https://tse1.mm.bing.net/th?id=OIP.j4ERMh1eSC2HyAF_ySOH7AHaHa&pid=Api"
        },
        {
            name: "Nike Air Jordan 1",
            price: 15000,
            imageUrl: "https://tse1.mm.bing.net/th?id=OIP.rg3jj-AOPenukfG6CV2JwAHaHa&pid=Api"
        },
        {
            name: "GoPro Hero 9",
            price: 34500,
            imageUrl: "https://tse2.mm.bing.net/th?id=OIP.ZtBOX5V4uD_OBQxpmkAVtwHaFj&pid=Api"
        },
        {
            name: "Amazon Echo Dot",
            price: 4499,
            imageUrl: "https://tse3.mm.bing.net/th?id=OIP.10o5tDK2e8k62Gv6UsyijQHaEl&pid=Api"
        }
    ]);
    return (
        <>
            <div className="product">
                {products.map((product) => {
                    return (
                        <Productitem name={product.name} price={product.price} imageUrl={product.imageUrl} />
                    )
                })}

            </div>
        </>
    )
}