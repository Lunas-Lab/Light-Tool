function $(id) {
    return document.getElementById(id);
}


function panelTapped() {
    $("controlPanel").style.width = '75vw';
}

function sliderMove() {
    $('redLabel').innerText = "Red: " + $('redSlider').value;
    $('greenLabel').innerText = "Green: " + $('greenSlider').value;
    $('blueLabel').innerText = "Blue: " + $('blueSlider').value;
    $('panel').style.backgroundColor = "rgb(" + $('redSlider').value + ", " + $('greenSlider').value + ", " + $('blueSlider').value + ")";
}

function closeControls() {
    $("controlPanel").style.width = 0;
}