// get the inital dark mode state
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark");

function formatAMPM(date) {
  // get time in 12hr format
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
function stringTime() {
  // returns a greeting based on the time ex: 12 > good afternoon
  var myDate = new Date();
  var hrs = myDate.getHours();
  greet = "";
  if (hrs < 12) greet = "morning";
  else if (hrs >= 12 && hrs <= 17) greet = "afternoon";
  else if (hrs >= 18 && hrs <= 24) greet = "evening";
  return greet;
}
const enableDarkMode = () => {
  document.body.style.backgroundColor = "#141516";
  document.getElementById("dark").innerHTML = "light";
  document.body.style.color = "#FFFFFF";
  document.getElementsByTagName("NAV")[0].style.color = "#FFFFFF";
  document.getElementById("dark").style.color = "#FFFFFF";
  document.getElementById("time").style.color = "#FFFFFF";
  document.getElementById("greeting").style.color = "#FFFFFF";
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  document.body.style.backgroundColor = "#FFFFFF";
  document.body.style.color = "#000000";
  document.getElementById("dark").innerHTML = "dark";
  document.body.style.color = "#FFFFFF";
  document.getElementsByTagName("NAV")[0].style.color = "#000000";
  document.getElementById("dark").style.color = "#000000";
  document.getElementById("time").style.color = "#000000";
  document.getElementById("greeting").style.color = "#000000";
  localStorage.setItem("darkMode", null);
};
if (darkMode == "enabled") {
  // checks the local storage
  enableDarkMode();
}
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});
function main() {
  // adds the data to the text
  document.getElementById("time").innerHTML = formatAMPM(new Date());
  document.getElementById("greeting").innerHTML = "good " + stringTime();
}
setInterval(function () {
  // update the time
  main();
}, 1000);
main();
