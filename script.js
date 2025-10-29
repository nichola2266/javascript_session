//we want to wait for the page to load before executing the script
document.addEventListener("DOMContentLoaded",function(){

    //create out own AdafruitIO object
    const IO = new AdafruitIO("Username","apikey");

    //code we want to run when the html is loaded 
    const buttonColor = document.getElementById ("button-color");

    //listen to click to trigger the color button
    buttonColor.addEventListener("click",function(){
        //get a hook on the input color
        const inputColor = document.getElementById("color-input");
        console.log(inputColor.value);

        // change body backgroudn color with input value
        document.body.style.backgroundColor = inputColor.value;


        IO.postData("color", inputColor.value);
        
    });

    // button to set a updated temeprature 
    const buttonTemperature = document.getElementById("button-temperature");

    // we listen to the click to trigger the temperature button
    buttonTemperature.addEventListener("click",function(){

        let currentTemperature = Math.floor ( Math.random() * 20);

        console.log(currentTemperature);

        //get data from feed and do stuff with data you get
        IO.getData("temperature", function(data) {
            console.log(data.feed, data.json[0].value);

        //create link to the span
        const temperatureDisplay = document.getElementById("temperature-display");
        temperatureDisplay.innerHTML = data.json[0].value;
    });
    
});

    //script for the shopping list
    const buttonShoppingList = document.getElementById("button-list");

    buttonShoppingList.addEventListener("click",function(){
        const newListItem = document.getElementById("input-list");
        console.log(newListItem.value);
        const containerList = document.getElementById("container-list");
        containerList.innerHTML += `<li>${newListItem.value}</li>`;
    });


});