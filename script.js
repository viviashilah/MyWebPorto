// ============================
// MOBILE MENU
// ============================

const menuBtn =
document.querySelector(".menu-btn");

const navbar =
document.querySelector(".navbar");

menuBtn.addEventListener(
    "click",
    () => {

    navbar.classList.toggle("active");

});

document
.querySelectorAll(".navbar a")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

        navbar.classList.remove(
            "active"
        );
    });

});


// ============================
// TYPING EFFECT
// ============================

const roles = [
    "UI UX DESIGNER",
    "DATA ANALYST",
    "TECH WRITER",
    "IT GRADUATE"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText =
document.querySelector(
    ".typing-text"
);

function typeEffect(){

    const currentRole =
    roles[roleIndex];

    if(!deleting){

        typingText.textContent =
        currentRole.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(
            charIndex ===
            currentRole.length
        ){

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
        currentRole.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(
                roleIndex >=
                roles.length
            ){
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// ============================
// PORTFOLIO FILTER
// ============================

const filterButtons =
document.querySelectorAll(
    ".filter-btn"
);

const projectCards =
document.querySelectorAll(
    ".project-card"
);

filterButtons.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

        document
        .querySelector(
            ".filter-btn.active"
        )
        .classList
        .remove("active");

        btn.classList.add(
            "active"
        );

        const filter =
        btn.dataset.filter;

        projectCards.forEach(
            card => {

            if(
                filter === "all" ||
                card.classList.contains(
                    filter
                )
            ){

                card.style.display =
                "block";

                setTimeout(() => {

                    card.style.opacity =
                    "1";

                    card.style.transform =
                    "translateY(0)";

                },100);

            } else {

                card.style.opacity =
                "0";

                card.style.transform =
                "translateY(20px)";

                setTimeout(() => {

                    card.style.display =
                    "none";

                },250);
            }
        });
    });

});


// ============================
// SCROLL ANIMATION
// ============================

const observer =
new IntersectionObserver(
(entries) => {

    entries.forEach(
        entry => {

        if(entry.isIntersecting){

            entry.target
            .classList
            .add("show");
        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(
    ".section, .hero"
)
.forEach(section => {

    section.classList.add(
        "hidden"
    );

    observer.observe(
        section
    );

});


// ============================
// ACTIVE NAVBAR
// ============================

const sections =
document.querySelectorAll(
    "section"
);

const navLinks =
document.querySelectorAll(
    ".navbar a"
);

window.addEventListener(
    "scroll",
    () => {

    let current = "";

    sections.forEach(
        section => {

        const top =
        section.offsetTop;

        const height =
        section.clientHeight;

        if(
            pageYOffset >=
            top - 250
        ){
            current =
            section.getAttribute(
                "id"
            );
        }

    });

    navLinks.forEach(
        link => {

        link.classList.remove(
            "active"
        );

        if(
            link.getAttribute(
                "href"
            ) === `#${current}`
        ){
            link.classList.add(
                "active"
            );
        }

    });

});


// ============================
// HEADER SCROLL EFFECT
// ============================

const header =
document.querySelector(
    ".header"
);

window.addEventListener(
    "scroll",
    () => {

    if(window.scrollY > 50){

        header.style.background =
        "rgba(5,11,18,.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.2)";

    } else {

        header.style.background =
        "rgba(5,11,18,.7)";

        header.style.boxShadow =
        "none";
    }

});


// ============================
// SMOOTH PAGE LOAD
// ============================

window.addEventListener(
    "load",
    () => {

    document.body.style.opacity =
    "1";

});


// ============================
// PARALLAX EFFECT HERO IMAGE
// ============================

const heroCard =
document.querySelector(
    ".hero-card"
);

window.addEventListener(
    "mousemove",
    (e) => {

    const x =
    (window.innerWidth / 2 -
    e.pageX) / 40;

    const y =
    (window.innerHeight / 2 -
    e.pageY) / 40;

    heroCard.style.transform =
    `translate(${x}px, ${y}px)`;
});


// ============================
// BUTTON RIPPLE EFFECT
// ============================

document
.querySelectorAll(
    "button, .primary-btn"
)
.forEach(btn => {

    btn.addEventListener(
        "mouseenter",
        () => {

        btn.style.transform =
        "scale(1.03)";
    });

    btn.addEventListener(
        "mouseleave",
        () => {

        btn.style.transform =
        "scale(1)";
    });

});