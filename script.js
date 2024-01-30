const temperatureFeild = document.querySelector(".weather1");
const cityFeild = document.querySelector(".weather2 p");
const dateFeild = document.querySelector(".weather1 span");
const emojiFeild = document.querySelector(".weather3 img");
const weatherFeild = document.querySelector(".weather3 span");
const searchField = document.querySelector("#search");
const form = document.querySelector("form");

let target = "Bhubaneswar";
const fetchData = async () => {
  const url = `https://api.weatherapi.com/v1/current.json?key=20d2d1ef84fd480598b193357243001&q=${target}`;
  const responsee = await fetch(url);
  const data = await responsee.json();
  console.log(data);

  // Destructuring
  const {
    current: { temp_c },
    location: { name },
  } = data;

  updateDOM(temp_c, name);
  //updateDOM(data.current.temp_c, data.location.name);
};

function updateDOM(temperature, city) {
  temperatureFeild.innerText = temperature;
  cityFeild.innerText = city;
  emojiFeild.src = emoji;
  weatherFeild.innerText = text;
}
fetchData();
