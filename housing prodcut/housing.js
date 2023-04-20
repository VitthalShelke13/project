let productDom= document.querySelector('.product-center');
const cartcontinet = document.querySelector(".cart-content");


class Products {
    async fetchProducts(){
        try{
            const res = await fetch('./jsondata/housingdata.json');
            let data = await res.json();
            let productData= data.items.map((me)=>{
                const{title,type,rating,price}= me.field;
                const imageurl = me.field.image.url;
                const id = me.id
                return{id,title,type,rating,price,imageurl}
            })
            return productData;

        }catch(e){
            console.log(e)
            console.log('error')
        }
 
    }
}


class UserInterface {
    insurtproductInDom(productArray){
    let producthtml=""
    productArray.forEach((element) => {
        producthtml =producthtml+ `
        <section>
        <div class='image-container'>
        <img src='${element.imageurl}' class="product-img"/>
        <button class='bag-btn'>Add to Cart</button>
        <p>${element.title}</p>
        <div>
        </div>
       <h4>${element.type}</h4>
      <h4>${element.price}</h4>
        </div>
        </section>
        `
        
    });
    productDom.innerHTML=producthtml
}
}

let product =new Products();
let ui = new UserInterface()
product.fetchProducts()
.then((data)=>{
    console.log(data)
    ui.insurtproductInDom(data)
})



