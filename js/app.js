console.log("app.js connected");

const container = document.getElementById("container");

fetch("../data/tashkent_universities.json")
 .then((response) => response.json())
 .then((data) => {
  console.log(data);
  // Access the data
 })
 .catch((error) => console.error("Error loading JSON:", error));

fillList();

function fillList(code) {
 container.innerHtml = code;
}
