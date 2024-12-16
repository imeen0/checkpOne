class product{
    constructor(id,name,price){
        this.id=id
        this.name=name 
        this.price=price
    }
}
class shoppingCartItem{
    constructor(product,quantity){
        this.product=product
        this.quantity=quantity
    }

    getTotalPrice(){
        return this.product.price * this.quantity
    }
}
class shoppingCart{ 
    constructor(){
        this.items=[]
    }
    addItem(product,quantity){
        const existingItem=this.items.find(items=>items.product.id == product.id)
        if(existingItem){
            existingItem.quantity+=quantity
        }
        else{
            this.items.push(new shoppingCartItem(product,quantity))
        }
    }
    removeItem(productId){
        this.items.filter(item=> item.product.id !== productId)
    }
    getTotalItems(){
        return this.items.reduce((total,item)=> total+item.getTotalPrice(),0)
    }
    getTotalItems(){
        return this.items.reduce((total,item)=> total+item.getTotalPrice(),0)
    }
    displayCart(){
        if(this.items.length==0){
            console.log("le panier est vide")
        }
        else{
            this.items.forEach(item=>{
                    console.log(`${item.product.name} -${item.quantity} * ${item.product.price}€=${item.getTotalPrice()}€`)
            })
            console.log(`total: ${this.getTotalPrice()}€`)
        }
    }
     
}
//crée de produits
const orange=new product(1,"orange",1.5)
const banana=new product(2,"banana",1)
const apple=new product(3,"apple",2)
//crée panier
const cart=new shoppingCart()
//ajouter des ele au panier
cart.addItem(apple,3)
cart.addItem(banana,5)
cart.addItem(orange,2)
//afficher
cart.displayCart()
//suuprrimer 
cart.removeItem(2)
//affiche la mise ajour
cart.displayCart()