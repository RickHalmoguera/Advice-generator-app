# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.png)
![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

-Continued to practice the use of picture to show differents img depending of the width of the browser.
-In this project I learn another method to center elements in a DIV, with postion and translate. 
-Learn to get data from an API with fecth in Javascript. 


```html
<picture>
   <source media="(min-width: 430px)" srcset="./images/pattern-divider-desktop.svg">;
   <img src="./images/pattern-divider-mobile.svg" alt="divider">;
</picture>
```
```css
img{
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
     transform: translate(-50%, -50%);
}
```
```js

const displayAdvice = (advice)=>{
    adviceNumber.innerText = `advice # ${advice.slip.id}`
    adviceText.innerText = advice.slip.advice
}

const getAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(advice => displayAdvice(advice));
}

getAdviceBtn.addEventListener("click",getAdvice )
}
```

- [Drop shadow generator]([https://www.example.com](https://webcode.tools/generators/css/drop-shadow)) - This helped me to make the shadow effect in the button.
- [JavaScript Fetch API]([https://www.example.com](https://www.w3schools.com/jsref/api_fetch.asp)) - This is an amazing article which helped me finally understand the use of fecth.


## Author

- Github - [Ricardo Halmoguera](https://github.com/RickHalmoguera)
- Frontend Mentor - [@RickHalmoguera](https://www.frontendmentor.io/profile/RickHalmoguera)

