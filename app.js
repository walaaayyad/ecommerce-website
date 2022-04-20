const menuItems = document.querySelector('#menu-items');
const menuIcon = document.querySelector('.menu-icon');

const menuHandler = ()=> {
    console.log('gggggg')
    menuItems.classList.toggle('show');
}
/*---- js for cart menu ----*/
const basket = document.querySelector('#basket')
const cart = document.querySelector('.cart')

basket.addEventListener('click', ()=> {
    cart.classList.toggle('show');
})

/*---- js for product-details ----*/
const productImg = document.querySelector('#product-img');
const smallImg = document.querySelectorAll('.small-img');

smallImg.forEach((e)=> {
    e.addEventListener('click', function() {
        productImg.src = e.src ;
    })
})

/*---- js for account page ----*/
const loginForm = document.getElementById('loginForm');
const regForm = document.getElementById('regForm');
const indicator = document.getElementById('indicator');

const register = ()=> {
    regForm.style.transform = 'translateX(0px)';
    loginForm.style.transform = 'translateX(0px)';
    indicator.style.transform = 'translateX(100px)';
}
const login = ()=> {
    regForm.style.transform = 'translateX(300px)';
    loginForm.style.transform = 'translateX(300px)';
    indicator.style.transform = 'translateX(0px)';
}

