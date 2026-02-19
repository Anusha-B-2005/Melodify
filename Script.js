let currentAudio = null; 
let currentButton = null; 

function playPauseSong(button, songPath) {
    if (currentAudio && currentAudio.src.includes(songPath)) {
        if (currentAudio.paused) {
            currentAudio.play();
            button.src = "Images/Pause.svg"; 
        } else {
            currentAudio.pause();
            button.src = "Images/Play.svg"; 
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0; 
            if (currentButton) {
                currentButton.src = "Images/Play.svg"; 
            }
        }

        currentAudio = new Audio(songPath);
        currentButton = button;
        currentAudio.play()
            .then(() => {
                button.src = "Images/Pause.svg"; 
            })
            .catch((error) => {
                console.error("Error playing audio:", error);
            });

        currentAudio.addEventListener('ended', () => {
            button.src = "Images/Play.svg";
        });
    }
}


