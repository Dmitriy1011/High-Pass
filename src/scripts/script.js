import * as flsFunctions from "./modules/functions.js";

document.addEventListener("DOMContentLoaded", () => {
  flsFunctions.isWebp()

  const dropMenuClose = document.querySelector(".drop-menu-close");
  const burgerBtn = document.querySelector(".header__burger-btn");
  const dropMenu = document.querySelector(".header__drop-menu");
  const searchButton = document.querySelector(".search-button");
  const searchWindow = document.querySelector(".header__search-window");
  const logo = document.querySelector(".logo");
  const searchWindowClose = document.querySelector(".search-window-close");
  const socialNetsLinks = document.querySelectorAll(".socialnets__link");
  const footersocialNetsLinks = document.querySelectorAll(
    ".footer__socialnets-link"
  );
  const projectsTextLinks = document.querySelectorAll(".projects__text-link");
  const navLinks = document.querySelectorAll(".nav__link");
  const contactsBtn = document.querySelector(".contacts__right-button");
  const aboutSubscriptionBtn = document.querySelector('.about__subscription-btn')
  const headerTop = document.querySelector('.header__top')
  const headerNav = document.querySelector('.nav')
  const closeContactsLeftMenuBtn = document.querySelector('.contacts__left-close-btn');
  const contactsLEftMenu = document.querySelector('.contacts__left')

  burgerBtn.addEventListener("click", () => {
    dropMenu.classList.add("opened");
  });

  dropMenuClose.addEventListener("click", () => {
    dropMenu.classList.remove("opened");
  });

  closeContactsLeftMenuBtn.addEventListener('click', () => {
    contactsLEftMenu.style.display = "none"
  })

  searchButton.addEventListener("click", () => {
    headerNav.classList.add('remove-nav')
    searchButton.classList.remove('show-search-btn');
    searchButton.classList.add('hide-search-btn');
    searchWindow.classList.add("show");
    searchWindow.classList.add("change-search-window-z-index")
    headerTop.classList.add("change-header-top-z-index")
  });

  searchWindowClose.addEventListener("click", () => {
    headerNav.classList.remove('remove-nav')
    headerTop.classList.remove('header-top-change-style')
    searchButton.classList.remove('hide-search-btn');
    searchWindow.classList.remove("show");
  });

  socialNetsLinks.forEach((el) => {
    el.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  footersocialNetsLinks.forEach((el) => {
    el.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  projectsTextLinks.forEach((el) => {
    el.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  navLinks.forEach((el) => {
    el.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
  });

  contactsBtn.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  aboutSubscriptionBtn.addEventListener("submit", event => {
    event.preventDefault()
    console.log('World')
  })

  ymaps.ready(init);

  function init() {
    const mapElem = document.querySelector("#map");
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.766801, 37.628744],
        zoom: 14,
        controls: [],
      },
      {
        suppressMapOpenBlock: true,
      }
    );

    var myPlacemark = new ymaps.Placemark(
      [55.770801, 37.635754],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../images/map-mark.svg",
        iconImageSize: [12, 12],
        iconImageOffset: [-10, -20],
      }
    );

    myMap.geoObjects.add(myPlacemark);

    setTimeout(() => {
      myMap.container.fitToViewport();
    }, 5000);
  }

  new JustValidate('.contacts__right-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      mail: {
        required: true,
        email: true
      },
    },
    messages: {
      name: {
        required: 'Недопустимый формат'
      },
      mail: {
        required: 'Недопустимый формат'
      }
    },
    colorWrong: '#FF5C00'
  });



  new JustValidate('.about__subscription-form', {
    rules: {
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      email: {
        required: 'Недопустимый формат'
      }
    },
    colorWrong: '#FF5C00'
  });
});
