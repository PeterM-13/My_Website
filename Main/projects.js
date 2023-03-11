const projects = document.querySelectorAll(".project").length;
let scrollDist;
let scrollMax;

let arrowFlag = true;
checkSize();
arrowFlag = false;

function checkSize(){
    scrollDist =((window.innerWidth > 1200)? 1000:500);
    scrollMax = projects * scrollDist;

    if (!arrowFlag){
        clearInterval(interval);
        arrowFlag = true;
    }
}

document.querySelectorAll(".arrow")[0].addEventListener("click", leftClick);
document.querySelectorAll(".arrow")[1].addEventListener("click", rightClick);

function leftClick(){
    checkSize();
    let pos = document.querySelector('.projectsContainer').scrollLeft;
    if(pos-scrollDist > 0){
        document.querySelector('.projectsContainer').scrollLeft = pos - scrollDist;
    }else{
        document.querySelector('.projectsContainer').scrollLeft = scrollMax;
    }
}

function rightClick(){
    checkSize();
    let pos = document.querySelector('.projectsContainer').scrollLeft;
    if(pos+scrollDist < scrollMax){
        document.querySelector('.projectsContainer').scrollLeft = pos + scrollDist;
    }else{
        document.querySelector('.projectsContainer').scrollLeft = 0;
    }
}

//document.querySelector('.projectsContainer').addEventListener("scroll", function(e){console.log(e.target.scrollLeft)})


let interval = setInterval(async()=>{
    document.querySelector("#rightArrow").style.scale = "1.15";
    await new Promise(r => setTimeout(r, 300));
    document.querySelector("#rightArrow").style.scale = "1";
}, 5000)