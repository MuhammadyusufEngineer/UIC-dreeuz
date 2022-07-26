let select = document.querySelectorAll('.select')
let selectedTitle = document.querySelector('.select-title')
let selectMenu = document.querySelectorAll('.select-menu')
let selectMenuItems = document.querySelectorAll('.select-items')
let chevron = document.querySelectorAll('.selectChevron')

select.forEach(item => {
    item.onclick = () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        }else {
            item.classList.add('active')
        }
    }
})

selectMenuItems.forEach( item => { item 
    item.onclick = (e) => {
        let list = e.target
        list.parentElement.parentElement.querySelector('p').innerText = item.innerText
    }
})



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

const root = document.getElementById('sliders')

for (let i = 0; i < 3; i++) {
    const carusel = document.createElement('div')
    carusel.classList.add('carusel')
    root.append(carusel)

    const track = document.createElement('div')
    track.classList.add('slide-track')
    track.classList.add('relative')
    track.style.display = 'flex'
    carusel.append(track)

    for (let j = 1; j <= 15; j++) {

        const slide = document.createElement('div')
        slide.classList.add('slide')
        track.append(slide)

        const image = document.createElement("img");
        image.setAttribute("src", "images/" + j + ".jpg");
        image.src="./assets/images/slider/sliderperson.png"
        slide.append(image)
    }

}


