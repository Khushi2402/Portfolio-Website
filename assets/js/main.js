const firebaseConfig = {
    apiKey: "AIzaSyAKsfz9UN5lT7W4MFUSvSvkCFKVrA5ZetA",
    authDomain: "port-2f283.firebaseapp.com",
    databaseURL: "https://port-2f283-default-rtdb.firebaseio.com",
    projectId: "port-2f283",
    storageBucket: "port-2f283.appspot.com",
    messagingSenderId: "657418947528",
    appId: "1:657418947528:web:972abbd3d17d5cff370efd",
    measurementId: "G-J81B8VWFD7"
  };

firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref("contactForm"); 

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    //get input values

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message");

    saveMessages(name, email, message);

    //enable alert

    document.querySelector('.alert').style.display = "block";

    //remove the alert

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 1000);

    //reset the form

    document.getElementById("contactForm").reset();
}

const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        message: message,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}




/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 




// listen for a submit
