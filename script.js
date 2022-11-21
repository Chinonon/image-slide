(function () {
  const pictures = ["ba2","ba3","ba4","ba7","ba8","ba9"];

 const buttons = document.querySelectorAll(".btn");
 const imgDiv = document.querySelector(".image-container");

 let counter = 0
 
 buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if (button.classList.contains("btn-left")){
            counter--
        if (counter < 0){
            counter = pictures.length - 1
        }
            imgDiv.style.background =`url(${pictures[counter]}.webp)`
            imgDiv.style.backgroundRepeat = "no-repeat"
            imgDiv.style.backgroundSize = "cover"
        }

        if (button.classList.contains("btn-right")){
            counter++
        if (counter > pictures.length - 1){
            counter = 0
        }
            imgDiv.style.background =`url(${pictures[counter]}.webp)`
            imgDiv.style.backgroundRepeat = "no-repeat";
            imgDiv.style.backgroundSize = "cover"
        }
    })
 })

})();
