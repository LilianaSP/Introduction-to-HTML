/*
We create a function to load another HTML file by clicking on a button in the index.html page */
function loadHTML(){
    document.getElementById("demo").addEventListener("click", function() {
        window.location = "Error404.html";
    });
}
    
function loadVideo(){
    document.getElementById("demo2").addEventListener("click", function() {
        window.location = "video.html";
    });
}

function loadImg(){
    const xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
        document.getElementById("mod").innerHTML =
        this.responseText;
      }
      
      /* We open an image onclick
       */
      xhttp.open("GET", "img.html")
      xhttp.send();
  
  }

