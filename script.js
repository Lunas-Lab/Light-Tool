function $(id) {
    return document.getElementById(id);
}

function panelTapped() {
    console.log("Clicked");
    document.getElementById("controls").style.width = '75vw';
}