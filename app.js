var cityName = document.querySelector("input");
var Temp = document.querySelector("#temperature");
var weather = document.querySelector("#weather");
var btn = document.querySelector("button");
var serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
var key = "d1e095db37fecb6124dbf5aa10947009";
function UpdateUrl(inputcity)
{
    return serverUrl + "?" + "q=" + inputcity + "&"+"appid="+ key;
}
function ErrorHandler(error){
    alert("error happened")
}
function ClickHandler(){
    var inputcity = cityName.value;
    fetch(UpdateUrl(inputcity))
    .then(Response => Response.json)
    .then(json =>{
        console.log(json)
        Temp.innerHTML = json.main.temp;
        weather.innerHTML = json.weather.description;
    })
    .catch(ErrorHandler)
}


btn.addEventListener("click",ClickHandler);





















