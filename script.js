const Title = document.getElementById("Title");
const Home = document.getElementById("button1");
const Dashboard = document.getElementById("button2");
const Settings = document.getElementById("button3");
const frame = document.getElementById("frame");
function bro() {
 frame.style.left = -352 + "px";
 frame.style.bottom = -20 + "px";
}
bro();

Home.addEventListener("click", () => {
    frame.style.left = -352 + "px";
    frame.style.bottom = -20 + "px";
});
Settings.addEventListener("click", () => {
    frame.style.left = -104 + "px";
    frame.style.bottom = -20 + "px";
});
Dashboard.addEventListener("click", () => {
    frame.style.left = -228 + "px";
    frame.style.bottom = -20 + "px";
});
