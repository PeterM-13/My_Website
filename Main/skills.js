const skillInfo = {
    Python: " > A high-level, general-purpose programming language.",
    Godot: " > A cross-platform, free and open-source game engine",
    C: " > A general-purpose computer programming language",
    Github: " > An Internet hosting service for software development and version control using Git",
    Xcode: " > App used to develop apps for the Apple AppStore",
    "Azure Devops": " > A Microsoft product that provides many levels project management",
    "Microsoft Office": " > Word, Excel, PowerPoint, Outlook, OneNote",
    "Raspberry Pi": " > Small single-board, programmable computer",
    Figma: " > A collaborative web application for interface design",
    NodeJS: " > A cross-platform open-source back-end JavaScript runtime environment",
    React: " > An open-source front-end JavaScript library for building user interfaces based on components",
    Postman: " > An API Platform for developers to design, build, test and iterate their APIs",
    "Postgress SQL": " > A Free and open-source relational database management system and SQL compliance",
    "RESTful API": " > An interface that computers use to exchange information securely over the internet",
    Blender: " > A free and open-source 3D computer graphics software tool set",
    "Fusion 360": " > A commercial computer-aided design software application"
}

function changeContent(id){
 
    document.querySelector(`#skillsInfo`).innerHTML = `<strong>${id}</strong>`+ ((skillInfo[id])?skillInfo[id]:"")
}

function show(){
    let p =  document.querySelector("#skillsInfo");
    p.classList.add("skillsInfoV");
    p.classList.remove("skillsInfoH");
}

function hide(){
    let p =  document.querySelector("#skillsInfo");
    p.classList.add("skillsInfoH");
    p.classList.remove("skillsInfoV");
}

for(icon of document.querySelectorAll(".skillIcon")){
    const id = icon.alt;
    icon.addEventListener("mouseover", ()=>{changeContent(id);show()})
    icon.addEventListener("mouseleave", ()=>{hide()})
}








const interestsInfo = {
    "3D Printing": " > I am lucky enough to own a 3D printer, so have used it to create many projects",
    "Laser Cutting": " > I am lucky enough to own a laser cutter, so have used it to create many projects",
    "Electronics": " > Electronics often play a significant role in the projects I make",
    "Mechanical Work": " > I have access to a workshop of tools which I have learnt to use",
    "Programming": " > My work and my hobby. From apps to games to websites, enjoy it all",
    "Badminton": " > Keen badminton player, I play once a week at my local club",
    "Cycling": " > Enjoy biking of-road with friends, when the weather is good",
}

function changeContentI(id){
    document.querySelector(`#interestsInfo`).innerHTML = `<strong>${id}</strong>`+ ((interestsInfo[id])?interestsInfo[id]:"")
}

function showI(){
    let p =  document.querySelector("#interestsInfo");
    p.classList.add("interestsInfoV");
    p.classList.remove("interestsInfoH");
}

function hideI(){
    let p =  document.querySelector("#interestsInfo");
    p.classList.add("interestsInfoH");
    p.classList.remove("interestsInfoV");
}

for(icon of document.querySelectorAll(".interestIcon")){
    const id = icon.alt;
    icon.addEventListener("mouseover", ()=>{changeContentI(id);showI()})
    icon.addEventListener("mouseleave", ()=>{hideI()})
}



//window.addEventListener('resize', ()=>{
if(window.innerWidth < 1200){
    for(icon of document.querySelectorAll(".iconLink")){
            icon.style.display = "none"
    }
}else{
    for(icon of document.querySelectorAll(".icon")){
        icon.style.display = "none"
    }
}