var cityName = document.querySelector("input");
var Temp = document.querySelector("#temperature");
var weather = document.querySelector("#weather");
var btn = document.querySelector("button");
var Name = document.querySelector("#name");
var serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
var key = 'd1e095db37fecb6124dbf5aa10947009';
var icon = document.querySelector('img');
function UpdateUrl(inputcity)
{
    return serverUrl + "?" + "q=" + inputcity + "&"+"appid="+ key;
}
function ErrorHandler(error){
    alert("couldn't get details. Check for spelling error.")
}
function ClickHandler(){
    var inputcity = cityName.value;
    fetch(UpdateUrl(inputcity))
    .then(Response => Response.json())
    .then(json =>{
        console.log(json)
        Name.innerHTML = "AREA : "+ json['name'];
        Temp.innerHTML = "TEMP : " + (parseInt(json['main']['temp']) - 273) + "°C";
        weather.innerHTML = "WEATHER : "+json['weather'][0]['description'];
        var iconUrl = "http://openweathermap.org/img/wn/"+ json['weather'][0]['icon']+"@2x.png "
        icon.src = iconUrl;
    })
    .catch(ErrorHandler)
}


btn.addEventListener("click",ClickHandler);





















