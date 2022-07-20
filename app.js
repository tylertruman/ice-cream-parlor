const toppings = [{
    name: 'Sprinkles',
    image: 'https://images.unsplash.com/photo-1516746924755-babd21844370?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 2
}, {
    name: 'Chocolate Chips',
    image: 'https://images.unsplash.com/photo-1585502866757-30ae9e509e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2hpcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    price: 3
}, {
    name: 'Gummy Worms',
    image: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VtbXklMjB3b3Jtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    price: 2
}
]

const vessels = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 3
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}, {
    name: 'Dipped Cone',
    image: 'https://images.unsplash.com/photo-1623164939202-083af8931a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNob2NvbGF0ZSUyMGljZWNyZWFtJTIwY29uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    price: 5
}]

const iceCream = [{
    name: 'Vanilla',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFuaWxsYSUyMGljZWNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 3
}, {
    name: 'Chocolate',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwaWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    price: 4
}, {
    name: 'Strawberry',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYXdiZXJyeSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 4
}]

const allItems = [{
    name: 'Vanilla',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFuaWxsYSUyMGljZWNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 3
}, {
    name: 'Chocolate',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwaWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    price: 4
}, {
    name: 'Strawberry',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYXdiZXJyeSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 4
}, {
    name: 'Sprinkles',
    image: 'https://images.unsplash.com/photo-1516746924755-babd21844370?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5rbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    price: 2
}, {
    name: 'Chocolate Chips',
    image: 'https://images.unsplash.com/photo-1585502866757-30ae9e509e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwY2hpcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    price: 3
}, {
    name: 'Gummy Worms',
    image: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VtbXklMjB3b3Jtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    price: 2
}, {
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 3
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}, {
    name: 'Dipped Cone',
    image: 'https://images.unsplash.com/photo-1623164939202-083af8931a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNob2NvbGF0ZSUyMGljZWNyZWFtJTIwY29uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    price: 5
}]


let carts = []

function drawToppingsMenu(){
    let template = ''
    toppings.forEach(item => {
        template += `
        <div class="col-4 col-md-4 pt-3 ">
             <div class="menu-item-bg-color rounded menu-item" onclick="cart('${item.name}')">
            <img class ="img-size img-fluid rounded" src="${item.image}">
            <p class="text-center">${item.name} $${item.price}</p>
            </div>
        </div>`
        
    })
    let toppingsMenuElm = document.getElementById('toppings-items')
    toppingsMenuElm.innerHTML = template
}

drawToppingsMenu()

function drawVesselsMenu(){
    let template = ''
    vessels.forEach(item => {
        template += 
        `<div class="col-4 col-md-4 pt-3 ">
             <div class="menu-item-bg-color rounded menu-item" onclick="cart('${item.name}')">
            <img class ="img-size img-fluid rounded" src="${item.image}">
            <p class="text-center">${item.name} $${item.price}</p>
            </div>
        </div>`
    })
    let vesselsMenuElm = document.getElementById('vessels-items')
    vesselsMenuElm.innerHTML = template
}

drawVesselsMenu()

function drawIceCreamMenu(){
    let template = ''
    iceCream.forEach(item => {
        template +=
        `<div class="col-4 col-md-4 pt-3 ">
        <div class="menu-item-bg-color rounded menu-item" onclick="cart('${item.name}')">
       <img class ="img-size img-fluid rounded" src="${item.image}">
       <p class="text-center">${item.name} $${item.price}</p>
       </div>
   </div>`
    })
    let iceCreamMenuElm = document.getElementById('ice-cream-items')
    iceCreamMenuElm.innerHTML = template
}

drawIceCreamMenu()

function drawCarts(){
    let template = ''
    carts.forEach((cart, i) => template += 
    `<div class="col-12 cart-item text-center" onclick="">
    <p>${cart.name} - $${cart.price}</p>
  </div>`)
  let cartElm = document.getElementById('cart-items')
  cartElm.innerHTML = template
  drawTotal()
}

function drawTotal(){
    let subtotal = 0
    carts.forEach( cart => subtotal += cart.price)
    let totalElm = document.getElementById('total')
    totalElm.innerText = subtotal.toFixed(2) 
}

function cart(selectedName){
    let foundItem = allItems.find(item => item.name == selectedName)
    carts.push(foundItem)
    drawCarts()
}




