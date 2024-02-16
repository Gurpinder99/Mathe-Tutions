

let  loader = document.getElementById("loder");

window.addEventListener("load", function(){
   loader.style.display = "none";})


var swiper = new Swiper(".mySwiper", {
   autoplay: { delay:4000},

    pagination: {
      el: ".swiper-pagination",
    },
  });




const toggelbtn = document.querySelector('#toggel')
const toggelbtnicon = document.querySelector('#toggel i')
const dropdown = document.querySelector('.drop-down')

toggelbtn.onclick = function () {
    dropdown.classList.toggle('add')

const ifopen = dropdown.classList.contains('add')

toggelbtnicon.classList = ifopen
? 'fa-solid fa-xmark'
:'fa-solid fa-bars'

}


function myFunction(widthSize) {
  if (widthSize.matches) {
   
      const swiper = new Swiper(".mySwiper2", {
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },

          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  } else {
      const swiper = new Swiper(".mySwiper2", {
          slidesPerView: 3,
          spaceBetween: -40,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
              
          },
       
      });
  }
}

const widthSize = window.matchMedia("(max-width: 1000px)");

myFunction(widthSize);

widthSize.addListener(myFunction);

AOS.init({
offset:250,
duration:1000,


});

