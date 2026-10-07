import { services } from "./services.js";

const featuredServices = services.filter(service => service.featured)


const track = document.querySelector(".hero-image-track");
const dots = document.querySelectorAll(".hero-dots .dot");

let currentIndex = 0;

function changeHeroImage() {

    currentIndex++;

    if (currentIndex >= 3) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * 33.333}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

setInterval(changeHeroImage, 5000);




console.log(featuredServices)
let html = ``;

featuredServices.forEach((service) => {
    html += `
        <article class="service-card reveal">

            <div class="service-image-container">
                <img
                    src="${service.image}"
                    alt="${service.name}"
                    class="service-image"
                >
            </div>

            <div class="service-content">
                <h3>${service.name}</h3>

                <p class="service-description">
                    ${service.featuredDescription}
                </p>

                <div class="service-bottom">

                    <span class="service-price">
                        from <b>${service.price}</b>
                    </span>

                    <a href="${service.link}" class="service-link">
                        Learn More
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>
            </div>

        </article>
    `;
});

// INSERT THE CARDS FIRST
document.querySelector(".services-grid").innerHTML = html;


// THEN find the reveal elements
const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);


// THEN observe them
const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});