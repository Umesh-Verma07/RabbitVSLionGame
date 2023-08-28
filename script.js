Rabbit = document.getElementById("rabbit");
Lion = document.getElementById("lion");
GameOver = document.getElementById("Gameover");
score = 0;
cross = true;
GO = true;
audio = new Audio("lion.mp3");
audioOver = new Audio("gameover.mp3");
play = true;
count = 0;
document.onkeydown = function(e){
    if(e.keyCode == 38 && play){
        setTimeout(()=> {
            audio.play();
        }, 1000);
        play = false;
    }
    if(e.keyCode == 38){
        Rabbit.classList.add('JumpRabbit');
        setTimeout( () => {
            Rabbit.classList.remove('JumpRabbit')
        }, 700);

    }
    if(e.keyCode == 39 && rx < 1200){
        rx = parseInt(window.getComputedStyle(Rabbit, null).getPropertyValue('left'));
        Rabbit.style.left = rx + 150 + "px";

    }
    if(e.keyCode == 37 && rx > 100){
        rx = parseInt(window.getComputedStyle(Rabbit, null).getPropertyValue('left'));
        Rabbit.style.left = rx - 150 + "px";

    }
}

setInterval(() => {
    rx = parseInt(window.getComputedStyle(Rabbit, null).getPropertyValue('left'));
    ry = parseInt(window.getComputedStyle(Rabbit, null).getPropertyValue('bottom'));
    lx = parseInt(window.getComputedStyle(Lion, null).getPropertyValue('left'));
    ly = parseInt(window.getComputedStyle(Lion, null).getPropertyValue('bottom'));
    X = Math.abs(lx-rx);
    Y = Math.abs(ly-ry);

    if(X < 100 && Y < 70){
        document.getElementById("over").innerText = "Score : " + score;
        GameOver.style.display = "block";
        Lion.classList.remove("lionRun");
        GO = false;
        audio.pause();
        audioOver.play();
        setTimeout(()=>{
            audioOver.pause();
        }, 1000);
    } else if(X < 50 && cross && GO) {
        score += 10;
        count++;
        document.getElementById("rank").innerText = "Your Score : " + score;
        cross = false;
        setTimeout(()=>{
            cross = true;
        }, 1000);
        check = false;
    }
    setTimeout(()=>{
        lx = parseInt(window.getComputedStyle(Lion, null).getPropertyValue('left'));
        if(lx < 10 && count == 5){
            aniDur = parseFloat(window.getComputedStyle(Lion, null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.2;
            if(newDur > 1){
                Lion.style.animationDuration = newDur + "s";
                count = 0;
                console.log(newDur);
            }
        }
    }, 100);
}, 80);
