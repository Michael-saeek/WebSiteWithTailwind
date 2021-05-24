# Frontend Mentor - Blogr landing page solution
This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot of the Blogr-Landing Page](/public/images/screenshot.png)

### Links

- Live Site URL: [https://blogr-ladingpage.vercel.app/]

## My process

### Built with
- Semantic HTML5 markup
- TailwindCSS / Flexbox
- Javascript


### What I learned
```css
.Somethings {
  background-size: 500px 500px ;  >> Width | Height 
  background-position: 500px 500px ; >> position "x" | position "y"

}
```
```js

  The usage about "toggle" 

  const mnmobile = document.querySelector('#menuMobile')
    const nvmobile = document.querySelector('#navMobile')
    const header = document.querySelector('#header')

    mnmobile.addEventListener('click', () => {
      nvmobile.classList.toggle('hidden')
      header.classList.toggle('overflow-hidden')
    })
```

### Useful resources
- [Tailwindcss](https://tailwindcss.com/) - This helped me with the design Page !

## Author
- Website - [https://beacons.page/Michael_Andrade]
- Frontend Mentor - [https://www.frontendmentor.io/profile/Michael-saeek]
- Twitter - [https://www.twitter.com/@saaeek]

