const menuItems = document.querySelector('#menu-items');
const menuIcon = document.querySelector('.menu-icon');

const menuHandler = ()=> {
    console.log('gggggg')
    menuItems.classList.toggle('show');
}

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


$(document).ready(function() {
    navimation({
        parent: $('ul'),
        item: $('li'),
        event: 'mouseenter',
        navimationTag: {
            background: 'unset',
            id: 'navimation',
            height: '6px',
            timeTranslate: '0.5s',
            timeFunctionHide: 'linear',
            css: {
                'background-image': 'linear-gradient(90deg, rgba(36,0,0,0) 0%, rgd(32,199,83) 30%, rgb(32,199,83) 70%, rgba(255,0,0,0) 100%)',
            },
        },
    });
});
