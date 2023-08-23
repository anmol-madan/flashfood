const menuBtn = document.querySelector('.menu-icon');
const services = document.querySelector('.services');


menuBtn.addEventListener('click', function () {
    services.classList.toggle('nav-open');
});

//About Section

const about = document.querySelector('#about');
const aboutMore = document.querySelector('.about-more');

about.addEventListener('click', function () {
    aboutMore.classList.toggle('section-open');
});



//Language Selector
const langEn = document.querySelector('.language-en');
const langFr = document.querySelector('.language-fr');

langEn.addEventListener('click', function () {
    langFr.classList.toggle('section-open');
});


//See More Button

const seeMore = document.querySelector('.see-more');
const companyListContainer = document.querySelector('.company-list');

seeMore.addEventListener('click', function () {
    companyListContainer.classList.toggle('more-companies');
    if (seeMore.textContent == 'See More') {
        seeMore.textContent = 'See Less';
    }
    else {
        seeMore.textContent = 'See More';
    }
}); 