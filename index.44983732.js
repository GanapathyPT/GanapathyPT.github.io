// don't use #f00 use full color code (to add opacity)
const PRIMARY_COLOR = "#ff0000"; // red
// setting css variables to use it as primary color
document.documentElement.style.setProperty("--bg-primary", PRIMARY_COLOR);
const MAX_PARTICLE_SIZE = 5;
const PARTICLE_SIZE_REDUCE_RATE = 0.005;
const MAX_PARTICLE_WEIGHT = 1.5;
const PARTICLE_COLOR = PRIMARY_COLOR;
const MIN_DISTANCE_LINE = 10000;
const CURSOR_CIRCLE_SIZE = 10;
const CURSOR_CIRCLE_COLOR = "#ffffff"; // white
const PARTICLES_TOTAL_LIMIT = 250;
const isDesktop = window.innerWidth > 1000;
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let particles = [];
const mouse = {
    moving: false,
    x: null,
    y: null
};
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("mousemove", (event)=>{
    mouse.moving = true;
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});
window.addEventListener("mouseout", ()=>{
    mouse.x = null;
    mouse.y = null;
    mouse.moving = false;
});
class Particle {
    constructor(x, y, size, weight, color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.weight = weight;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        this.y += this.weight;
        this.size = Math.max(this.size - PARTICLE_SIZE_REDUCE_RATE, 0);
    }
}
function drawLines() {
    particles.forEach((particle1, index)=>{
        particles.slice(index, particles.length).forEach((particle2)=>{
            // calc distance with pythagorus theorem
            const distance = (particle1.x - particle2.x) ** 2 + (particle1.y - particle2.y) ** 2;
            if (distance < MIN_DISTANCE_LINE) {
                ctx.strokeStyle = particle1.color;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle1.x, particle1.y);
                ctx.lineTo(particle2.x, particle2.y);
                ctx.stroke();
            }
        });
    });
}
function addParticle(random = false) {
    const x = Math.random() * canvas.width + (isDesktop ? canvas.width / 3 : 0);
    const y = Math.random() * canvas.height;
    const size = Math.floor(Math.random() * MAX_PARTICLE_SIZE) + 1;
    // color with random opacity
    const weight = Math.random() * MAX_PARTICLE_WEIGHT;
    const color = PARTICLE_COLOR + (Math.floor(Math.random() * 255) + 1).toString(16);
    particles.push(new Particle(random ? x : mouse.x, random ? y : mouse.y, size, weight, color));
}
function animate() {
    // clear the whole canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // some particles will be faded away if size is zero or lesser
    particles = particles.filter((particle)=>particle.size > 0);
    //   drawing the particles
    particles.forEach((particle)=>{
        particle.update();
        particle.draw();
    });
    //   drawing the lines
    drawLines();
    //   if mouse is there in canvas draw a white circle as cursor
    if (mouse.x !== null && mouse.y !== null) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, CURSOR_CIRCLE_SIZE, 0, Math.PI * 2);
        ctx.fillStyle = CURSOR_CIRCLE_COLOR;
        ctx.fill();
    }
    //   if mouse is moving and particles are lesser than PARTICLES_TOTAL_LIMIT in the canvas add more particles
    //   PARTICLES_TOTAL_LIMIT is taken so that there will be no lag (as there won't be more than 200 particles at a time)
    if (mouse.moving && particles.length < PARTICLES_TOTAL_LIMIT) addParticle();
    else if (particles.length < PARTICLES_TOTAL_LIMIT - 50) addParticle(true);
    //   consider the moving as false as we added a particle
    mouse.moving = false;
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
// FORM SENDING
const form = document.querySelector("form");
const alertBox = document.querySelector("form div .alert");
const formSubmitBtn = document.getElementById("formSubmitBtn");
form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    formSubmitBtn.disabled = true;
    const data = new FormData(form);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(Object.fromEntries(data))
    };
    try {
        await fetch("https://formsubmit.co/ajax/18ganapathy04@gmail.com", options);
        alertBox.classList.add("visible");
        setTimeout(()=>{
            alertBox.classList.remove("visible");
        }, 5000);
    } catch (err) {
        console.error(err);
    } finally{
        form.reset();
        formSubmitBtn.disabled = false;
    }
});

//# sourceMappingURL=index.44983732.js.map
