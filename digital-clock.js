const h2 = document.querySelector("h2");
let spans = document.querySelectorAll("span");
const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const body = document.getElementById("fBody");
const button = document.getElementById("sceneryBtn");

let imageCounter = parseInt(localStorage.getItem('imageCounter')) || 0;


const image = [
{
  name: "images/NS1.png",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS2.webp",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS3.png",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS4.webp",
  h2TextColor: "rgb(197, 188, 188)",
  h2TextShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  opacity: .7,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS5.png",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS6.webp",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS7.webp",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS8.webp",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS9.webp",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS10.webp",
  h2TextColor: "white",
  h2TextShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  opacity: .7,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS11.webp",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
},
{
  name: "images/NS12.webp",
  h2TextColor: "black",
  h2TextShadow: "none",
  opacity: .4,
  clockSpanColor: "aquamarine",
  clockTextColor: "rgb(98, 198, 165)",
  clockAmPmColor: "rgba(4, 4, 166, 0.665)",
  buttonColor: "rgb(98, 198, 165)"
}];

updateClock();
renderPage();

function renderPage() {
  if (imageCounter > image.length - 1) {
    imageCounter = 0;    
  } 
  
  body.style.backgroundImage = `url(${image[imageCounter].name})`;
  button.innerText = `SCENERY ${imageCounter + 1}`;
  h2.style.color = image[imageCounter].h2TextColor;

  spans.forEach(span => {
    span.style.opacity = image[imageCounter].opacity;   
  })

  button.style.opacity = image[imageCounter].opacity;
  ampm.style.opacity = image[imageCounter].opacity;
  h2.style.textShadow = image[imageCounter].h2TextShadow;

  localStorage.setItem('imageCounter', imageCounter);
}


function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = "AM";

  if (h > 12) {
    h = h - 12;
    ap = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = ap;

  setTimeout(() => {
    updateClock();
  }, 1000)

}

button.addEventListener("click", () => {
  imageCounter++;
  renderPage();
})

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    imageCounter++;
    renderPage();
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    imageCounter--;
    renderPage();
  }
})

