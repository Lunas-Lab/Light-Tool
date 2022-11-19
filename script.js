function $(id) {
    return document.getElementById(id);
}


function panelTapped() {
    var panel = $("controlPanel");
    if (panel.style.width == '0px') {
        panel.style.width = '75vw';
    }
    else {
        panel.style.width = 0;
    }
}

function sliderMove() {
    $('redLabel').innerText = "Red: " + $('redSlider').value;
    $('greenLabel').innerText = "Green: " + $('greenSlider').value;
    $('blueLabel').innerText = "Blue: " + $('blueSlider').value;
    $('panel').style.backgroundColor = "rgb(" + $('redSlider').value + ", " + $('greenSlider').value + ", " + $('blueSlider').value + ")";
}