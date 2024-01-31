const temperatureFeild = document.querySelector(".weather1");
const cityFeild = document.querySelector(".weather2 p");
const dateFeild = document.querySelector(".weather2 span");
const emojiFeild = document.querySelector(".weather3 img");
const weatherFeild = document.querySelector(".weather3 span");
const searchField = document.querySelector("#search");
const form = document.querySelector("form");

// Adding event listener to the form

form.addEventListener("submit", search);

//Default Location
let target = "Bhubaneswar";

const fetchData = async (target) => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=20d2d1ef84fd480598b193357243001&q=${target}`;
    const responsee = await fetch(url);
    const data = await responsee.json();
    console.log(data);

    // Destructuring
    const {
      current: {
        temp_c,
        condition: { text, icon },
      },
      location: { name, localtime },
    } = data;

    updateDOM(temp_c, name, localtime, icon, text);
    //updateDOM(data.current.temp_c, data.location.name);
  } catch (error) {
    alert("Location Not Found!");
  }
};

function updateDOM(temperature, city, time, emoji, text) {
  const exactTime = time.split(" ")[1];
  const exactDate = time.split(" ")[0];
  const exactDay = getDayFullName(new Date(exactDate).getDay());

  temperatureFeild.innerText = temperature;
  cityFeild.innerText = city;
  emojiFeild.src = emoji;
  weatherFeild.innerText = text;
  dateFeild.innerText = `${exactTime} - ${exactDay}   ${exactDate}`;
}

fetchData(target);

// Function to get Day
function getDayFullName(num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Don't Know";
  }
}

function search(e) {
  e.preventDefault();
  target = searchField.value;
  fetchData(target);
}
