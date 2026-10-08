export const services = [

    {
        id: "engine-servicing",
        name: "Engine Servicing",
        image: "images/services/engen-service.png",
        description: "Keep your engine running smoothly with routine inspections, oil changes and essential maintenance.",
        featuredDescription: "Keep your bike running like new with professional engine servicing designed to catch problems before they become costly repairs.",
        price: " R900",
        icon: "fa-solid fa-gears",
        link: "services/engen-service.html",
        featured: true
    },

    {
        id: "oil-filter-change",
        name: "Oil & Filter Change",
        image: "images/services/oil.jpg",
        description: "Fresh engine oil and a new filter help protect your engine and maintain smooth performance.",
        price: " 100",
        icon: "fa-solid fa-oil-can",
        link: "services/oil-change.html",
        featured: false
    },

    {
        id: "brake-repairs",
        name: "Brake Repairs",
        image: "images/services/brake-hub-2.jpg",
        description: "Brake inspections, pad replacements and repairs to keep your motorcycle stopping safely.",
        featuredDescription: "Don’t take chances with your brakes. Get reliable stopping power and ride with confidence.",
        price: " R250",
        icon: "fa-solid fa-circle-stop",
        link: "services/brake-repairs.html",
        featured: true
    },

    {
        id: "tyre-services",
        name: "Tyre & Puncture Repairs",
        image: "images/services/flat-tyre.jpg",
        description: "Puncture repairs, tyre inspections and replacements to get you safely back on the road.",
        price: " R100",
        icon: "fa-solid fa-motorcycle",
        link: "services/tyre&puncture-repairs.html",
        featured: false
    },

    {
        id: "battery-services",
        name: "Battery Services",
        image: "images/services/battery.jpg",
        description: "Battery testing, charging and replacement for motorcycles experiencing starting or power problems.",
        price: " R150",
        icon: "fa-solid fa-car-battery",
        link: "services/battery-services.html",
        featured: false
    },

    {
        id: "electrical-ignition",
        name: "Electrical & Ignition",
        image: "images/services/electricals.webp",
        description: "Diagnosis and repair of electrical problems including lights, wiring, switches and charging systems.",
        price: " R250",
        icon: "fa-solid fa-bolt",
        link: "services/electricals&Ignition.html",
        featured: false
    },

    {
        id: "chain-sprocket",
        name: "Chain & Sprocket",
        image: "images/services/chain-sprocket.jpg",
        description: "Chain adjustment, cleaning and replacement of worn chains and sprockets for smooth power delivery.",
        price: " R200",
        icon: "fa-solid fa-link",
        link: "services/chain&sprocket.html",
        featured: false
    },

    {
        id: "clutch-repairs",
        name: "Clutch Repairs",
        image: "images/services/clutch.webp",
        description: "Clutch inspection, adjustment and replacement to improve gear changes and riding performance.",
        price: " R300",
        icon: "fa-solid fa-sliders",
        link: "services/clutch-repairs.html",
        featured: false
    },

    {
        id: "delivery-carrier",
        name: "Delivery Box Carrier Installation",
        image: "images/services/carrier.webp",
        description: "Installation of sturdy rear carriers for motorcycles without one, making them ready for delivery boxes and everyday delivery work.",
        featuredDescription: "Turn your motorcycle into a delivery-ready machine with a strong, properly fitted carrier built for everyday work.",
        price: " R350",
        icon: "fa-solid fa-box",
        link: "services/carrier-installation.html",
        featured: true
    },

    {
        id: "fuel-system",
        name: "Fuel System Service",
        image: "images/services/carburetor.webp",
        description: "Inspection and cleaning of fuel-system components to help restore reliable engine performance.",
        featuredDescription: "Running rough, using too much fuel, or struggling to start? We’ll get your fuel system working properly again.",
        price: " R300",
        icon: "fa-solid fa-gas-pump",
        link: "services/fuel-system.html",
        featured: true
    },

    {
        id: "suspension",
        name: "Suspension Repairs",
        image: "images/services/shocks.webp",
        description: "Inspection and repair of suspension components to improve handling, comfort and road stability.",
        price: " R350",
        icon: "fa-solid fa-arrows-up-down",
        link: "services/suspension-service.html",
        featured: false
    },

    {
        id: "general-repairs",
        name: "General Repairs",
        image: "images/services/general.jfif",
        description: "General motorcycle repairs for mechanical problems, worn components and everyday riding issues.",
        price: " R200",
        icon: "fa-solid fa-wrench",
        link: "services/general-repairs.html",
        featured: false
    },

    {
        id: "roadside-assistance",
        name: "Roadside Assistance",
        image: "images/services/roadside.jpg",
        description: "Need help where you are? Get roadside assistance when your motorcycle breaks down or won't start.",
        price: " R300",
        icon: "fa-solid fa-truck-pickup",
        link: "services/roadside-assistance-service.html",
        featured: false
    }

];

const servicesGrid = document.getElementById("servicesGrid");
servicesGrid ?
services.forEach(service => {

    servicesGrid.innerHTML += `
        <article class="service-card  included-card reveal">

            <div class="service-image-container reveal">
                <img
                    src="${service.image}"
                    alt="${service.name}"
                    class="service-image"
                >
            </div>

            <div class="service-content  reveal">

                <h3>${service.name}</h3>

                <p class="service-description">
                    ${service.description}
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
    `;
}) : ``;