// ===========================
//  Personal Portfolio Website
// ===========================

const themes = [
  {
    name: "default",
    box1Gradient: "linear-gradient(to bottom, #0d1117 0%, #161b22 100%)",
    iconColor: "#0d1117",
  },
  {
    name: "purple-rose",
    box1Gradient: "linear-gradient(to bottom, #AA759F 0%, #bd88b0 100%)",
    iconColor: "#AA759F",
  },
  {
    name: "brown",
    box1Gradient: "linear-gradient(to bottom, #8F5536 0%, #a66b4a 100%)",
    iconColor: "#8F5536",
  },
  {
    name: "red",
    box1Gradient: "linear-gradient(to bottom, #AC4142 0%, #c55a5a 100%)",
    iconColor: "#AC4142",
  },
  {
    name: "orange",
    box1Gradient: "linear-gradient(to bottom, #D28445 0%, #e99b5b 100%)",
    iconColor: "#D28445",
  },
  {
    name: "green",
    box1Gradient: "linear-gradient(to bottom, #90A959 0%, #a3bb70 100%)",
    iconColor: "#90A959",
  },
  {
    name: "teal",
    box1Gradient: "linear-gradient(to bottom, #75B5AA 0%, #8bc5bc 100%)",
    iconColor: "#75B5AA",
  },
  {
    name: "blue",
    box1Gradient: "linear-gradient(to bottom, #6A9FB5 0%, #82b3c7 100%)",
    iconColor: "#6A9FB5",
  },
];

let currentThemeIndex = 0;

function changeTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  const theme = themes[currentThemeIndex];
  const box1 = document.querySelector(".box1");
  box1.style.background = theme.box1Gradient;
  const icons = document.querySelectorAll(".icon-color");
  icons.forEach((icon) => {
    icon.style.color = theme.iconColor;
  });
}

// accessing the question mark icon and adding click event listener
const questionMarkIcon = document.getElementById("question-mark");
questionMarkIcon.addEventListener("click", changeTheme);
