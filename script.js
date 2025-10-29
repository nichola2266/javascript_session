//we want to wait for the page to load before executing the script
document.addEventListener("DOMContentLoaded",function(){

    //code we want to run when the html is loaded 
    const buttonColor= document.getElementById ("button-color");

    //listen to click to trigger the color button
    buttonColor.addEventListener("click",function(){
        //get a hook on the input color
        const inputColor = document.getElementById("color-input");
        console.log(inputColor.value);
        

    });

    // button to set a updated temeprature 
    const buttonTemperature = document.getElementById("button-temperature");

    // we listen to the click to trigger the temperature button
    buttonTemperature.addEventListener("click",function(){
        let currentTemperature = Math.random() * 20;

        console.log(currentTemperature);

    //create link to the span
        const temperatureDisplay = document.getElementById("temperature-display");
        temperatureDisplay.innerHTML = currentTemperature;

    });

})