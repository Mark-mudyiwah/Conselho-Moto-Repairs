import { services } from "./services.js";

const featuredServices = services.filter(service => service.featured)

console.log(featuredServices)

let html = ``
featuredServices.forEach((service)=>{
   html +=`

           <article class="service-card">

            <div class="service-image-container ">
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
                     from  <b>${service.price}</b>
                    </span>

                    <a href="${service.link}" class="service-link">
                        Learn More
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </div>

            </div>

        </article>


`

})

document.querySelector('.js-featured-container').innerHTML = html
