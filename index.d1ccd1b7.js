// don't use #f00 use full color code (to add opacity)
const t="#ff0000";// red
// setting css variables to use it as primary color
document.documentElement.style.setProperty("--bg-primary",t);const e=window.innerWidth>1e3,i=document.querySelector("canvas"),n=i.getContext("2d");let o=[];const a={moving:!1,x:null,y:null};i.width=window.innerWidth,i.height=window.innerHeight,window.addEventListener("mousemove",t=>{a.moving=!0,a.x=t.pageX,a.y=t.pageY}),window.addEventListener("mouseout",()=>{a.x=null,a.y=null,a.moving=!1});class l{constructor(t,e,i,n,o){this.x=t,this.y=e,this.size=i,this.weight=n,this.color=o}draw(){n.beginPath(),n.arc(this.x,this.y,this.size,0,2*Math.PI),n.fillStyle=this.color,n.fill()}update(){this.y+=this.weight,this.size=Math.max(this.size-.005,0)}}function r(n=!1){let r=Math.random()*i.width+(e?i.width/3:0),s=Math.random()*i.height,h=t+(Math.floor(255*Math.random())+1).toString(16);o.push(new l(n?r:a.x,n?s:a.y,Math.floor(5*Math.random())+1,1.5*Math.random(),h))}requestAnimationFrame(function t(){// clear the whole canvas first
n.clearRect(0,0,i.width,i.height),//   drawing the particles
// some particles will be faded away if size is zero or lesser
(o=o.filter(t=>t.size>0)).forEach(t=>{t.update(),t.draw()}),o.forEach((t,e)=>{o.slice(e,o.length).forEach(e=>{// calc distance with pythagorus theorem
let i=(t.x-e.x)**2+(t.y-e.y)**2;i<1e4&&(n.strokeStyle=t.color,n.lineWidth=1,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke())})}),null!==a.x&&null!==a.y&&(n.beginPath(),n.arc(a.x,a.y,10,0,2*Math.PI),n.fillStyle="#ffffff",n.fill()),a.moving&&o.length<250?r():o.length<200&&r(!0),//   consider the moving as false as we added a particle
a.moving=!1,requestAnimationFrame(t)});// FORM SENDING
const s=document.querySelector("form"),h=document.querySelector("form div .alert"),d=document.getElementById("formSubmitBtn");s.addEventListener("submit",async t=>{t.preventDefault(),d.disabled=!0;let e=new FormData(s),i={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(Object.fromEntries(e))};try{await fetch("https://formsubmit.co/ajax/18ganapathy04@gmail.com",i),h.classList.add("visible"),setTimeout(()=>{h.classList.remove("visible")},5e3)}catch(t){console.error(t)}finally{s.reset(),d.disabled=!1}});//# sourceMappingURL=index.d1ccd1b7.js.map

//# sourceMappingURL=index.d1ccd1b7.js.map
