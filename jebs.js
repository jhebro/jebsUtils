/////////////////////////// 
//////////////////////////
// Timeline slider ////by jeb/////////
///////////////////////////
///////////////////////////
var updateInterval;
var sliderIDs
var twnID
var defaultBol = false;
var defaultContainer;
var imageElement = [];
var imageElementValue = [];
let bodyElements = document.querySelectorAll('body *');
var getWH = creativeSize.split("x");
var elementValue = [];
var finalValue = "var imageElementSizes  = {"




function animationSlider(twn) {
    twnID = twn;
    var animDura = twn.duration();
    var w = document.querySelector("#mainContent").offsetWidth;
    var h = document.querySelector('#mainContent').offsetHeight;
    var _defaultValues = defaultValues;
    var textElement = [];
    var textElementValue = [];



    //// 

    let bodyElements = document.querySelectorAll('body *');

    for (var i = 0; i < bodyElements.length; i++) {
        if (bodyElements[i].getAttribute('adlib-text') != null) {

            textElement.push(bodyElements[i].getAttribute('adlib-text'));
            textElementValue.push(defaultValues[bodyElements[i].getAttribute('adlib-text')]);

        }


    }




    // default values container

    var defaultContainer = document.createElement("div");
    defaultContainer.setAttribute("id", "defaultContainer");
    document.body.appendChild(defaultContainer);
    let defaultContainerID = document.querySelector("#defaultContainer");
    defaultContainer.style.width = w + "px";
    defaultContainer.style.height = (h + 500) + "px";
    defaultContainer.style.position = "absolute";
    defaultContainer.style.top = (h + 50) + "px";
    defaultContainer.style.backgroundColor = "lightgray";
    defaultContainer.style.display = "none";


    // create text area for defaults

    for (var x = 0; x < textElement.length; x++) {

        var label = document.createElement("label");
        label.textContent = textElement[x];
        defaultContainerID.appendChild(label);

        var defaults = document.createElement("textarea");
        defaults.setAttribute("type", "text");
        defaults.setAttribute("id", textElement[x] + "_");
        defaults.setAttribute("name", textElement[x]);
        defaults.setAttribute("onChange", "defaultChange()");
        defaultContainerID.appendChild(defaults);
        defaults.value = textElementValue[x];
        // defaults.onChange = defaultChange();

        document.getElementById(textElement[x] + "_").style.resize = "vertical";
        document.getElementById(textElement[x] + "_").style.width = w + "px";
        document.getElementById(textElement[x] + "_").style.height = "30px";
        document.getElementById(textElement[x] + "_").style.fontSize = "14px";
        document.getElementById(textElement[x] + "_").style.fontFamily = "Arial";
        document.getElementById(textElement[x] + "_").style.fontWeight = "Bold";

        document.getElementById(textElement[x] + "_").style.backgroundColor = "white";
        document.getElementById(textElement[x] + "_").style.color = "green";


        // defaultsID.style.width="500px;"

    }







    var container = document.createElement("div")
    container.setAttribute("id", "container");

    document.body.appendChild(container);
    let containerDiv = document.querySelector("#container");
    containerDiv.style.width = w + "px";
    containerDiv.style.height = "50px";
    containerDiv.style.overflow = "hidden";
    containerDiv.style.position = "relative";
    containerDiv.style.top = (h + 1) + "px";
    containerDiv.style.backgroundColor = "darkgray"

    var slider = document.createElement("INPUT");
    slider.setAttribute("type", "range");
    slider.setAttribute("max", animDura);
    slider.setAttribute("min", 0);
    slider.setAttribute("value", 0);
    slider.setAttribute("id", "slider");
    slider.setAttribute("step", 0.01);
    slider.setAttribute("onChange", "updatePause()")
    containerDiv.appendChild(slider);
    sliderID = document.querySelector("#slider");
    sliderID.style.width = (w - (w * 0.3)) + "px"
    sliderID.style.position = "absolute";
    sliderID.style.top = "0px";
    sliderID.style.right = "0px";
    // slicerID.style.color="black"


    sliderID.addEventListener("click", function() {
        pauseContainer.style.display = "none";
        playContainer.style.display = "block";
        twn.pause(sliderID.value);


    });

    //// show hide Buttom

    var _button = document.createElement("button");
    _button.id = "buttonID"
    _button.data = "hi";
    _button.innerHTML = 'Show Default';
    _button.onclick = function() {
        onClickUpdate(defaultContainerID);



    };
    containerDiv.appendChild(_button);
    var _button_ = document.querySelector('#buttonID');
    buttonID.style.left = "70px";
    buttonID.style.backgroundColor = "blue";
    buttonID.style.cursor = "pointer";
    buttonID.style.color = "white";
    buttonID.style.width = "57px";
    buttonID.style.fontSize = "10px";
    buttonID.style.position = "absolute";
    buttonID.style.top = "19px";
    buttonID.style.left = "9px";




    sliderID.addEventListener("mousemove", function() {
        twn.pause(sliderID.value);
        pauseContainer.style.display = "none";
        playContainer.style.display = "block";
        var timelineContainer = document.querySelector("#timelineCounter");
        var tweenTime = twn.time();
        var twoDecimal = tweenTime.toFixed(2);
        timelineContainer.innerHTML = twoDecimal;
        clearInterval(updateInterval);


    })

    /// playbutton

    var playDiv = document.createElement("div");
    playDiv.setAttribute("id", "playContainer");
    containerDiv.appendChild(playDiv);

    var playContainer = document.querySelector('#playContainer');
    playContainer.style.width = "23px";
    playContainer.style.top = "0px";
    playContainer.style.left = "10px";
    playContainer.style.position = "absolute";
    playContainer.style.display = "none";
    playContainer.style.cursor = "pointer";
    playContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16.912" viewBox="0 0 10 16.912"><path id="Path_1" data-name="Path 1" d="M463.078,326.535l10,8.456-10,8.456Z" transform="translate(-463.078 -326.535)"/></svg>'

    /// pause buttom
    var pauseDiv = document.createElement("div");
    pauseDiv.setAttribute("id", "pauseContainer");
    containerDiv.appendChild(pauseDiv);

    var pauseContainer = document.querySelector('#pauseContainer');
    pauseContainer.style.width = "23px";
    pauseContainer.style.top = "0px";
    pauseContainer.style.left = "10px";
    pauseContainer.style.position = "absolute";
    pauseContainer.style.cursor = "pointer";
    pauseContainer.innerHTML = '<svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13"><rect id="Rectangle_1" data-name="Rectangle 1" width="4" height="13"/><rect id="Rectangle_2" data-name="Rectangle 2" width="4" height="13" transform="translate(6)"/></svg>'

    // timer 
    var timelineCOunt = document.createElement("div");
    timelineCOunt.setAttribute("id", "timelineCounter");
    containerDiv.appendChild(timelineCOunt);

    var timelineContainer = document.querySelector("#timelineCounter");
    timelineContainer.style.width = (w * 0.05) + "px";
    timelineContainer.style.top = "0px";
    timelineContainer.style.left = "30px";
    timelineContainer.style.position = "absolute"
    timelineContainer.style.fontSize = "14px"

    timelineContainer.innerHTML = twn.time()



    pauseContainer.addEventListener("click", function() {
        twn.pause(sliderID.value);
        pauseContainer.style.display = "none";
        playContainer.style.display = "block"


    });




    playContainer.addEventListener("click", function() {
        twn.play();
        pauseContainer.style.display = "block";
        playContainer.style.display = "none";
        callConst(slider, twn);


    });


    var myTimeout = setTimeout(callConst(slider, twn), 5);

}

function callConst(v, twB) {
    updateInterval = setInterval(function() {
        v.value = twB.time();
        var timelineContainer = document.querySelector("#timelineCounter");
        var tweenTime = twB.time();
        var twoDecimal = tweenTime.toFixed(2);
        timelineContainer.innerHTML = twoDecimal;
    }, 10);
}

function updateSlider(t) {

    sliderID.setAttribute("value", t.time());

}

function defaultChange() {

    console.log("onChange");


    let bodyElements = document.querySelectorAll('body *');

    for (var i = 0; i < bodyElements.length; i++) {
        if (bodyElements[i].getAttribute('adlib-text') != null) {

            // textElement.push(bodyElements[i].getAttribute('adlib-text'));
            // textElementValue.push(defaultValues[bodyElements[i].getAttribute('adlib-text')]);

            bodyElements[i].innerHTML = document.getElementById(bodyElements[i].getAttribute('adlib-text') + "_").value;
        }


    }


}



function updatePause() {
    twnID.pause(sliderID.value);
}

function onClickUpdate(d) {

    if (defaultBol) {
        d.style.display = "none";
        defaultBol = false;

        console.log(defaultBol)
    } else {
        d.style.display = "block"
        defaultBol = true;
        console.log(defaultBol)
    }

}




function getImageSize() {
    for (var i = 0; i < bodyElements.length; i++) {
        if (bodyElements[i].getAttribute('adlib-image') != null) {

            imageElement.push(bodyElements[i].getAttribute('adlib-image'));
            imageElementValue.push(defaultValues[bodyElements[i].getAttribute('adlib-image')]);
        }
    }
    for (var i = 0; i < imageElementValue.length; i++) {

        var tempImage = document.createElement("img");
        tempImage.setAttribute("id", imageElement[i]);
        document.body.appendChild(tempImage);
        var tempVar = "image" + i
        let defaultContainerID = document.querySelector("#" + tempVar);
        tempImage.src = imageElementValue[i];
        tempImage.style.opacity = 0;
        tempImage.onload = function() {
            if (this.width == getWH[0] & this.height == getWH[1]) {} else {
                finalValue = finalValue + " " + this.id + ":[" + this.width + "," + this.height + "],";
            }

        };
        document.body.removeChild(tempImage);
    }

    var myTimeout = setTimeout(callFinal, 100);
}

function callFinal() {
    finalValue = finalValue + "}"
    console.log(finalValue);
}