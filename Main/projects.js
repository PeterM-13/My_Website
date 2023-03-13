const projects = document.querySelectorAll(".project").length;
let scrollDist;
let scrollMax;
let clickCount = -1;
checkSize();

function checkSize(){
    scrollDist =((window.innerWidth > 1200)? 1000:450);
    scrollMax = projects * scrollDist;
    clickCount ++;
}

document.querySelectorAll(".arrow")[0].addEventListener("click", leftClick);
document.querySelectorAll(".arrow")[1].addEventListener("click", rightClick);

document.querySelector('.projectsContainer').scrollLeft = scrollDist;

function leftClick(){
    checkSize();
    let pos = document.querySelector('.projectsContainer').scrollLeft;
    if(pos-scrollDist > 0){
        document.querySelector('.projectsContainer').style.scrollBehavior = "smooth";
        document.querySelector('.projectsContainer').scrollLeft = pos - scrollDist;
    }else{
        //document.querySelector('.projectsContainer').scrollLeft = scrollMax;
        document.querySelector('.projectsContainer').style.scrollBehavior = "auto";
        document.querySelector('.projectsContainer').scrollTo(scrollMax-scrollDist, 0);
        document.querySelector('.projectsContainer').style.scrollBehavior = "smooth";
        document.querySelector('.projectsContainer').scrollLeft = scrollMax - scrollDist - scrollDist;
    }
}

function rightClick(){
    checkSize();
    let pos = document.querySelector('.projectsContainer').scrollLeft;
    if(pos+scrollDist < scrollMax){
        document.querySelector('.projectsContainer').style.scrollBehavior = "smooth";
        document.querySelector('.projectsContainer').scrollLeft = pos + scrollDist;
    }else{
        //document.querySelector('.projectsContainer').scrollLeft = 0;
        document.querySelector('.projectsContainer').style.scrollBehavior = "auto";
        document.querySelector('.projectsContainer').scrollTo(scrollDist, 0);
        document.querySelector('.projectsContainer').style.scrollBehavior = "smooth";
        pos = document.querySelector('.projectsContainer').scrollLeft;
        document.querySelector('.projectsContainer').scrollLeft = pos + scrollDist;
    }
}

//document.querySelector('.projectsContainer').addEventListener("scroll", function(e){console.log(e.target.scrollLeft)})
let scrollsPassed = 0;
setInterval(()=>{
    console.log(clickCount)
    if(clickCount == 0){
        clickCount -= 1;
        rightClick();
    }else{
        scrollsPassed ++;
        if(scrollsPassed > 4){
            clickCount = 0;
        }
    }
}, 9000)