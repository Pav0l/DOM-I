const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const queSel = selector => document.querySelector(selector);
const queSelAll = selector => document.querySelectorAll(selector);

// Populate navbar anchor tags
let navFull = queSel('nav');
const navArr = Array.from(navFull.children);  //create an array from HTML Collection
for (let i = 0; i < navArr.length; i++) {  // assign text content in each anchor tag from JSON
  navArr[i].textContent = siteContent.nav[`nav-item-${i+1}`];
  navArr[i].style = 'color: green';
}

// Steps of creating new element and shoving it into the DOM
const newAnchor = document.createElement('a');
newAnchor.innerText = 'DOM Mania';
newAnchor.href = '#';
newAnchor.style = 'color: indigo';
navFull.prepend(newAnchor);

const lastAnchor = document.createElement('a');
lastAnchor.innerText = 'Last DOM';
lastAnchor.href = '#';
lastAnchor.style = 'color: crimson';
navFull.appendChild(lastAnchor);

// Popupate cta section
let ctaH1 = queSel('h1');
// how do you add <br> inside h1?
ctaH1.textContent = siteContent.cta.h1;

let ctaImg = queSel('#cta-img');
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

let ctaBtn = queSel('button');
ctaBtn.textContent = siteContent.cta.button;

// Popupate main content
// top-content
let topDiv = queSel('.main-content .top-content');
let firstElKids = topDiv.firstElementChild.children;
let lastElKids = topDiv.lastElementChild.children;
const siteContentMain = siteContent["main-content"];

let topFirstDivHeading = firstElKids[0];
topFirstDivHeading.textContent = siteContentMain["features-h4"];

let topFirstDivPara = firstElKids[1];
topFirstDivPara.textContent = siteContentMain["features-content"];

let topLastDivHeading = lastElKids[0];
topLastDivHeading.textContent = siteContentMain["about-h4"];

let topLastDivPara = lastElKids[1];
topLastDivPara.textContent = siteContentMain["about-content"];

// main-img
let mainImg = queSel('#middle-img');
mainImg.setAttribute('src', siteContentMain["middle-img-src"]);

// bot-content
let botDiv = queSel('.main-content .bottom-content');
let frstElKids = botDiv.firstElementChild.children;
let midElKids = botDiv.children[1].children;
let lstElKids = botDiv.lastElementChild.children;

let botFirstDivHeading = frstElKids[0];
botFirstDivHeading.textContent = siteContentMain["services-h4"];

let botFirstDivPara = frstElKids[1];
botFirstDivPara.textContent = siteContentMain["services-content"];

let botMidDivHeading = midElKids[0];
botMidDivHeading.textContent = siteContentMain["product-h4"];

let botMidDivPara = midElKids[1];
botMidDivPara.textContent = siteContentMain["product-content"];

let botLastDivHeading = lstElKids[0];
botLastDivHeading.textContent = siteContentMain["vision-h4"];

let botLastDivPara = lstElKids[1];
botLastDivPara.textContent = siteContentMain["vision-content"];

// contact section
let contactSec = queSel('.contact');
const siteContentContact = siteContent.contact;
let contactH4 = contactSec.firstElementChild;
let contactParaOne = contactSec.children[1];
let contactParaTwo = contactSec.children[2];
let contactParaThree = contactSec.children[3];

contactH4.textContent = siteContentContact["contact-h4"];
contactParaOne.textContent = siteContentContact.address;  // how to add <br> ?
contactParaTwo.textContent = siteContentContact.phone;
contactParaThree.textContent = siteContentContact.email;

// footer section
let footerSec = queSel('footer p');
footerSec.textContent = siteContent.footer.copyright;

