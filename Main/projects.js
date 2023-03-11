let projects = document.querySelectorAll(".project").length;
let scrollDist = 1030;
let scrollMax = projects * scrollDist;


document.querySelector("#leftArrow").addEventListener("click", leftClick);
document.querySelector("#rightArrow").addEventListener("click", rightClick);

function leftClick(){
    let pos = document.querySelector('.projectsContainer').scrollLeft;
    if(pos-scrollDist > 0){
        document.querySelector('.projectsContainer').scrollLeft = pos - scrollDist;
    }else{
        document.querySelector('.projectsContainer').scrollLeft = scrollMax;
    }
}

function rightClick(){
    let pos = document.querySelector('.projectsContainer').scrollLeft;
    if(pos+scrollDist < scrollMax){
        document.querySelector('.projectsContainer').scrollLeft = pos + scrollDist;
    }else{
        document.querySelector('.projectsContainer').scrollLeft = 0;
    }
}

//document.querySelector('.projectsContainer').addEventListener("scroll", function(e){console.log(e.target.scrollLeft)})