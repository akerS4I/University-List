console.log("app.js connected");

const container = document.getElementById("container");

fetch("../data/tashkent_universities.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Access the data
    fillList(data);
  })
  .catch((error) => console.error("Error loading JSON:", error));

function fillList(list) {
  let html = [];
  list.forEach((element) => {
    html.push(`<div class="card">
<div class="desc">
  <p>${element.name}</p>
  <br />
  City: ${element.city}
  <br />
  Type: ${element.type}
  <br />
  <br />
  
  <div class="bold">Number: <span>${element.phone}</span></div>
  Address: ${element.address}
</div>
<div class="socials">
  <a href="${element.socials.facebook}"
    ><button><i class="fa-brands fa-facebook"></i></button
  ></a>
  <a href="${element.socials.twitter}"
    ><button><i class="fa-brands fa-twitter"></i></button
  ></a>
  <a
    href="${element.socials.linkedin}"
    ><button><i class="fa-brands fa-linkedin"></i></button
  ></a>
</div>
</div>
<br/>`);
  });
  let htmlString = html.join("");
  htmlString = htmlString.replace(/,/g, "");

  container.innerHTML = htmlString;
}

{
  /* <div class="card">
<div class="desc">
  <p>Tashkent State University of Economics</p>
  <br />
  City: Tashkent
  <br />
  Type: Public
  <br />
  <br />
  
  <div class="bold">Number: <span>+998 71 233 10 70</span></div>
  Address: 78 University Street, Tashkent, Uzbekistan
</div>
<div class="socials">
  <a href="https://www.facebook.com/economics.uz"
    ><button><i class="fa-brands fa-facebook"></i></button
  ></a>
  <a href="https://twitter.com/economics_uz"
    ><button><i class="fa-brands fa-twitter"></i></button
  ></a>
  <a
    href="https://www.linkedin.com/school/tashkent-state-university-of-economics/"
    ><button><i class="fa-brands fa-linkedin"></i></button
  ></a>
</div>
</div> */
}
