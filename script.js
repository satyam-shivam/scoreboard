let homeScoreElement  = document.getElementById("home-score");
let guestScoreElement = document.getElementById("guest-score");


function addScore(elementId){

  if (elementId.classList[1] == "home"){
    let initialScore = parseInt(homeScoreElement.textContent);
    homeScoreElement.textContent = initialScore + parseInt(elementId.getAttribute("data-button-value"));
  }

  else{
    let initialScore = parseInt(guestScoreElement.textContent);
    guestScoreElement.textContent = initialScore + parseInt(elementId.getAttribute("data-button-value"));
  }

    if (parseInt(homeScoreElement.textContent) > 
        parseInt(guestScoreElement.textContent)){
            document.getElementById("guest-score-container").classList.remove("leader");
            document.getElementById("home-score-container").classList.add("leader");
    }

    else if (parseInt(homeScoreElement.textContent) < 
    parseInt(guestScoreElement.textContent)){
        document.getElementById("home-score-container").classList.remove("leader");
        document.getElementById("guest-score-container").classList.add("leader");
    }

    else{
        document.getElementById("guest-score-container").classList.remove("leader");
        document.getElementById("home-score-container").classList.remove("leader");
    }

}

function resetScore(){
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
    document.getElementById("guest-score-container").classList.remove("leader");
    document.getElementById("home-score-container").classList.remove("leader");
}


