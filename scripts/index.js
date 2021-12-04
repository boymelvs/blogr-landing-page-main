"use strict";

/* time for removing/adding classes */
const delay = (value) => {
   if (value.classList.contains("active")) {
      value.classList.remove("active");

      /* delay on removing show classes */
      setTimeout(() => {
         value.classList.remove("show");
      }, 300);

      /* adding active classes to display  */
   } else {
      value.classList.add("active");
   }
};

/* provide add & remove clasess */
const addRemoveClasses = (value) => {
   if (value.classList.contains("show")) {
      delay(value);

      /* adding show classes to change display from none to flex */
   } else {
      value.classList.add("show");
      setTimeout(() => {
         delay(value);
      }, 0.1);
   }
};

/* provide looping to select individual element */
const selectEachElem = (selects, key) => {
   let isClose = true;
   selects.forEach((select, select_key) => {
      /* for burger */
      if (select.classList.contains("burger_line")) {
         delay(select);
         isClose = false;
      }

      if (select_key === key) {
         addRemoveClasses(select);

         //
      } else if (isClose) {
         delay(select);
         select.classList.remove("active");
      }
   });
};

/* provide listening for individual element */
const isActive = (elements, value, lines) => {
   /* 
    listening for multiple element */
   if (elements.length > 1) {
      elements.forEach((element, elem_key) => {
         element.addEventListener("click", () => {
            if (element.classList.contains("menu_title")) {
               selectEachElem(elements, elem_key);
               selectEachElem(value, elem_key);
               selectEachElem(lines, elem_key);
            }
         });
      });

      /* listening for single element */
   } else {
      elements.addEventListener("click", () => {
         selectEachElem(lines);
         addRemoveClasses(value);
      });
   }
};

/* burger & menu container */
const burger = document.querySelector(".burger_container");
const burgerLines = document.querySelectorAll(".burger_line");
const menu = document.querySelector(".menus_login_signup_container");

isActive(burger, menu, burgerLines);

/* inside menu container */
const menuTitles = document.querySelectorAll(".menu_title");
const arrows = document.querySelectorAll(".arrows");
const parents = document.querySelectorAll(".parent");

isActive(menuTitles, parents, arrows);

/* listening when to show up_arrow */
const arrowUP = document.querySelector(".scroll_up"); /* get up_arrow */

window.addEventListener("scroll", () => {
   window.pageYOffset > 750 ? arrowUP.classList.add("active") : arrowUP.classList.remove("active");
});
