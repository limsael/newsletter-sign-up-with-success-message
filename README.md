# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)



### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/solutions/newsletter-sign-up-with-success-message-html-sass-js-qLk-am-M5i)
- Live Site URL: [Live site URL here](https://limsael.github.io/newsletter-sign-up-with-success-message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript 


### What I learned


```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value === "") {
    formMessage.textContent = "Please enter your email address.";
  } else if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    formMessage.textContent = "Valid email required";
  } else {
    body.classList.add("success");

    dismissBtn.addEventListener("click", () => {
      body.classList.remove("success");
    });

    formMessage.textContent = "";
    userEmail.textContent = emailInput.value;
    emailInput.value = "";
  }
});
```



### Continued development

- The javascript

### Useful resources

- [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me understand client side  form validation


- [How to Build and Validate Beautiful Forms with Vanilla HTML, CSS, & JS](https://www.freecodecamp.org/news/build-and-validate-beautiful-forms-with-vanilla-html-css-js/) - This is an amazing tutorial that helped me understand form validation.


## Author

- Frontend Mentor - [@limsael](https://www.frontendmentor.io/profile/limsael)
- Twitter - [@limsael525](https://www.twitter.com/limsael525)

