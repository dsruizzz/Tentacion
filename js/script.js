
document.addEventListener("DOMContentLoaded", function() {
    let sec1 = document.querySelector("#sec1");

    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            console.log(entry); 
            if (entry.isIntersecting) {
                console.log("Sec1 está visible");
                sec1.classList.add("visible");
            } else {
                sec1.classList.remove("visible");  
            }
        });
    }, { threshold: 0.2 });  

    observer.observe(sec1);
});

document.addEventListener("DOMContentLoaded", function() {
    let derMain = document.querySelector("#dermain");
    let audio = document.getElementById("saveme");

    derMain.addEventListener("mouseover", function() {
        audio.play();
    });

    derMain.addEventListener("mouseout", function() {
        audio.pause();
        audio.currentTime = 0;
    });
});
document.addEventListener("DOMContentLoaded", function() {
 
    let fallingDown = document.getElementById("fallingdown");
    let oneMinute = document.getElementById("oneminute");
    let love = document.getElementById("love");

   
    let song1 = document.getElementById("song1");
    let song2 = document.getElementById("song2");
    let song3 = document.getElementById("song3");

   
    function addHoverEffect(songElement, audioElement) {
        songElement.addEventListener("mouseover", function() {
            audioElement.play();
        });

        songElement.addEventListener("mouseout", function() {
            audioElement.pause();
            audioElement.currentTime = 0; 
        });
    }

    
    addHoverEffect(song1, fallingDown);
    addHoverEffect(song2, oneMinute);
    addHoverEffect(song3, love);
});
