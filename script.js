let inputSequence = "";
const targetWord = "mellon";
const moriaImage = document.getElementById("moria-image");

document.addEventListener("keydown", function(event) {
  inputSequence += event.key.toLowerCase();
  
  if (inputSequence.includes(targetWord)) {
    
    replaceImageWithVideo();
    
    inputSequence = "";
  }

  if (inputSequence.length > targetWord.length) {
    inputSequence = inputSequence.slice(1);
  }
});

function replaceImageWithVideo() {
 
  moriaImage.style.display = "none";

  
  const video = document.createElement("video");
  video.src = "./vid/moria.mp4"; 
  video.controls = false; 
  video.autoplay = true; 
  video.loop = false;

  
  const moriaDiv = document.querySelector(".moria");
  moriaDiv.appendChild(video);
}
