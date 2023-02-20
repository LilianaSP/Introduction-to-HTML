function changeColor(newColor){
    var elem = document.getElementById('The-title');
    elem.style.color = newColor;
}
/*
Create an onClick function to add an image to the web page
*/
function addImage(){
    var img = document.createElement("img");
    img.src = "Images/gift_gatito.gif";
    document.body.appendChild(img);

    /*We add a sound by clicking on the button*/
    var audio = new Audio('Images/X2Download.app - GATO TOCANDO EL PIANO (128 kbps).mp3');
    audio.play();

}

/*
We create another function to modify the style of the button by OnClick
*/
function changeStyle(){
    var elem = document.getElementById('button2');
    elem.style.borderRadius = "100px";
    elem.style.backgroundColor = "red";
    elem.style.color = "white";
    elem.style.fontSize = "20px";
}
