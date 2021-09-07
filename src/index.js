const btns = document.querySelectorAll("section.play button");
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", play_btn);
}

let pw = 0;
let cw = 0;
let t = 0;
let r = 1;


function play_btn(event){
    r++;
    document.querySelector("div.left_hand div").classList.toggle("anim");
    document.querySelector("div.right_container").classList.toggle("anim");
    document.querySelector("div.left_hand div").style.backgroundImage = "url(./src/images/left.png)";
    document.querySelector("section.visual div.right_hand div div").style.backgroundImage = "url(./src/images/left.png)";
    setTimeout(() => {
        document.querySelector("div.left_hand div").classList.toggle("anim");
        document.querySelector("div.right_container").classList.toggle("anim");
        document.querySelector("div.left_hand div").style.backgroundImage = "url(./src/images/"+event.target.id+".png)";
        let rn = random(1,3);
        switch(rn){
            case 1:
                document.querySelector("section.visual div.right_hand div div").style.backgroundImage = "url(./src/images/rock.png)";
                break;
            case 2:
                document.querySelector("section.visual div.right_hand div div").style.backgroundImage = "url(./src/images/paper.png)";
                break;
            case 3:
                document.querySelector("section.visual div.right_hand div div").style.backgroundImage = "url(./src/images/scissors.png)";
                break;
            default:
                console.error("Random number generator is defective");
        }

        if(event.target.id == "rock" && rn == 2){
            cw += 1;
        }else if(event.target.id == "rock" && rn == 3){
            pw += 1;
        }else if(event.target.id == "paper" && rn == 1){
            pw += 1;
        }else if(event.target.id == "paper" && rn == 3){
            cw += 1;
        }else if(event.target.id == "scissors" && rn == 1){
            cw += 1;
        }else if(event.target.id == "scissors" && rn == 2){
            pw += 1;
        }else{
            t += 1;
        }

        document.querySelector("header div span").innerText = "ROUND "+r;
        document.querySelector("section.score div.pwin div").innerText = pw;
        document.querySelector("section.score div.ties div").innerText = t;
        document.querySelector("section.score div.cwin div").innerText = cw;
        

    }, 1000);
}

function random(min, max){
    return Math.floor(Math.random()*(max - min)+min);
}