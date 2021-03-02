//State Variable
let weatherData;

// cached element references - selected DOM elements/wrapping in money
const $name = $('#name');
const $temp = $('#temp');
const $feels_like = $('#feels_like');
const $weatherDesc = $("#description");
const $input = $('input[type="text"]');
const API_Key = "709e5f43eb00e516b9d507c9f91ec40a";
const Base_URL = "https://api.openweathermap.org/data/2.5/weather?q=" 

// event listeners/ event handler function
$('form').on("submit", handleSubmit);


// functions 
function handleSubmit(evt) {
    evt.preventDefault();
    const term = $input.val();
    $input.val("");
    $.ajax(Base_URL + term + "&units=imperial" + "&appid=" + API_Key)
    .then(function(data) {
    console.log('Weather Data ', data);
    weatherData = data;
    render();
    }, function(error) {
    console.log('error ', error);
     alert("Sorry we don/'t have that!");
    });
}

function render() {
        $name.text(weatherData.name);
        $temp.text(weatherData.main.temp);
        $feels_like.text(weatherData.main.feels_like);
        $weatherDesc.text(weatherData.weather[0].description);
    }
