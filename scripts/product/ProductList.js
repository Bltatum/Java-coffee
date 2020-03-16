import { productHTML } from "./Product.js";
import { useProducts } from "./productDataProvider.js";


const contentElement = document.querySelector(".product__container")

export const productList = () =>{
 const productObjectArray = useProducts()

 for (const productObject of productObjectArray) {
     const productHTMLrep = productHTML(productObject)
     contentElement.innerHTML += productHTMLrep
     
 }
}