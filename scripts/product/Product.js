export const productHTML = (product) =>{
    return `
 <div class="product">
     <p>${product.id}. ${product.name}</p>
    <ul>
     <li>Bean Type: ${product.beanType}</li>
     <li>Roast Type: ${product.roastType}</li>
     <li>Price: ${product.price}</li>
    </ul>
</div>
    `
}