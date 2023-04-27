//import PROJECTS from './Projects.json';
const PROJECTS = { 
    2023: [
        {name:"Movie Website", date:"14/02/23", images:["Movie Website 1.jpeg","Movie Website 2.jpeg","Movie Website 3.png"], info:"Named 'Movieter', I made a site to browse and watch movies using a free API"},
        {name:"This Website", date:"8/03/22", images:["My Website 1.jpeg","My Website 2.jpeg","My Website 3.jpeg"], info:"I designed and built this website as a portfolio"},
        //{name:"Smart Walking Stick", date:"28/03/22", images:["Walking Stick.png"], info:""},
        {name:"Leonardo Balsa 'Glider'", date:"14/04/22", images:["Leonardo Frizbee 1.jpeg","Leonardo Frizbee 2.jpeg","Leonardo Frizbee 3.jpeg"], info:"I won a glider competition, working at Leonardo, by making a 'glider' with more of a frizbee design 😄"},
    ],
    2022: [
        {name:"Rain Simulator", date:"09/01/22", images:["Rain Sim 1.jpg","Rain Sim 2.jpeg","Rain Sim 3.jpeg","Rain Sim 4.jpeg"], info:"Allows you to experiment with different velocities and angles to find out if you stay dryer by running or walking in the rain"},
        {name:"Squid Game", date:"17/01/22", images:["Squid Game 1.jpeg","Squid Game 2.jpeg","Squid Game 3.jpeg","Squid Game 4.jpeg","Squid Game 5.jpeg"], info:"6 player game that will randomly shock a player each round, eliminating them..."},
        {name:"3D Fractal Generator", date:"26/01/22", images:["3D Fractal Generation 1.jpeg", "3D Fractal Generation 2.jpeg","3D Fractal Generation 3.jpeg"], info:"Made to explore 3D graphics and experiment with plotting different values on the Z-axis of the Mandelbrot set"},
        {name:"Parking Website", date:"10/02/22", images:["Parking Website 1.png","Parking Website 2.png"], info:"My first public website. Made while at sixth form to rate everyone's parking"},
        {name:"'Alien Crush' 2D Game", date:"16/03/22", images:["Alien Crush 2D 1.jpeg","Alien Crush 2D 2.jpeg","Alien Crush 2D 3.jpeg"], info:"My first mobile game, live on the AppStore. Fly through space & try to survive without getting crushed!"},
        {name:"Fractal Generator V1", date:"31/03/22", images:["Fractal Generator V1 1.jpeg","Fractal Generator V1 2.jpeg","Fractal Generator V1 3.jpeg"], info:"App that generates the Mandelbrot set next to corresponding Julia set position, allowing you to make cool fractals"},
        {name:"Fractal Generator V2", date:"11/04/22", images:["Fractal Generation V2 1.png", "Fractal Generation V2 2.png","Fractal Generation V2 3.PNG","Fractal Generation V2 4.jpeg","Fractal Generation V2 5.jpeg","Fractal Generation V2 6.jpeg"], info:"I used shaders to run the maths on the GPU in this version, made the app fast and detailed"},
        {name:"Wimshurst Machine", date:"26/06/22", images:["Wimshurst Machine 1.jpeg","Wimshurst Machine 2.jpeg","Wimshurst Machine 3.jpeg","Wimshurst Machine 4.jpeg"], info:"This is an old invention that generates high voltages using static charge built up by spinning the wheels"},
        {name:"'Alien Crush 3D' Game", date:"01/08/22", images:["Alien Crush 3D 1.jpeg","Alien Crush 3D 2.jpeg","Alien Crush 3D 3.jpeg","Alien Crush 3D 4.jpeg"], info:"This was my first 3D game, live on the AppStore. Fly through space & try to survive until the end!"},
        {name:"Pea Gun", date:"31/08/22", images:["Pea Gun 1.jpeg","Pea Gun 2.jpeg","Pea Gun 3.jpeg","Pea Gun 4.jpeg"], info:"Built this gun to shoot peas using compressed air"},
        {name:"Tetris", date:"19/09/22", images:["Tetris 1.jpeg","Tetris 2.jpeg","Tetris 3.jpeg"], info:"I recreated Tetris using the 'Godot' game engine"},
    ],
    2021: [
        {name:"Mouse Trap Car", date:"03/02/21", images:["Mouse Trap Car 1.jpeg","Mouse Trap Car 2.jpeg","Mouse Trap Car 3.jpeg"], info:"Light-weight car powered by only a mouse trap, challenge to find the greatest distance it could go"},
        {name:"Mandelbrot Set", date:"22/03/21", images:["Mandelbrot Set 1.jpeg","Mandelbrot Set 2.jpeg"], info:"Using Python to generate the Mandelbrot set, it was fun optimising the code to make it run faster"},
        {name:"Graphical Calculator", date:"08/04/21", images:["Graphs.png"], info:"My A-level project; plots & solves any function, cartesian and complex plane, stats calc, formula sheets & much more.."},
        {name:"Marble Machine", date:"06/04/21", images:["Marble Machine 1.jpeg","Marble Machine 2.jpeg"], info:"Motorised laser cut marble run"},
        {name:"'Hot' Potato", date:"24/05/21", images:["Hot Potato 1.jpeg","Hot Potato 2.jpeg"], info:"3D printed potato used to play the game, with shocking consequences..."},
        {name:"'Devil's Dungeon' Game", date:"31/05/21", images:["Devils Dungeon 1.jpeg","Devils Dungeon 2.png","Devils Dungeon 3.jpeg","Devils Dungeon 4.jpeg","Devils Dungeon 5.jpeg"], info:"Game Dev competition with McAfee; open world, puzzle solving game, fight enemies and avoid obstacles"},
        {name:"'Chicken Run' Game", date:"07/09/21", images:["Chicken Run 1.jpeg","Chicken Run 2.png","Chicken Run 3.jpeg","Chicken Run 4.jpeg"], info:"Fun 2 player desktop game where you each control a chicken, it's a race to the finish line"},
        {name:"Snake Game", date:"12/12/21", images:["Snake Game 1.jpeg","Snake Game 2.jpeg","Snake Game 3.jpeg"], info:"Basic snake game on the Raspberry Pi, using the accelerometer and tilting as controls"},
        {name:"Face Tracking Game", date:"16/12/21", images:["Face Tracking Game 1.jpeg","Face Tracking Game 2.jpeg","Face Tracking Game 3.jpeg"], info:"Uses the webcam to see you face and moves player on screen relative to your head's position"},
    ],
    2020: [
        {name:"Laser Cut Jigsaw", date:"03/01/20", images:["Jigsaw 1.jpeg","Jigsaw 2.jpeg","Jigsaw 3.jpeg","Jigsaw 4.jpeg"], info:"Laser cut a jigsaw design and vacuum formed a box for it"},
        {name:"Rubens' Tube", date:"18/01/20", images:["Rubens Tube 1.jpeg","Rubens Tube 2.jpeg","Rubens Tube 3.jpeg"], info:"Visualising sound waves at different frequencies with fire! Used pennies to hold flame & stop plastic melting"},
        {name:"Tank", date:"27/01/20", images:["Tank 1.jpeg","Tank 2.jpeg","Tank 3.jpeg","Tank 4.jpeg","Tank 5.jpeg"], info:"Laser cut this tank with treads and spinning turret & a flying propeller as a weapon!?"},
        {name:"Nerf Gun", date:"14/03/20", images:["Nerf Gun 1.jpeg","Nerf Gun 2.jpeg","Nerf Gun 3.jpeg"], info:"Built this spring powered Nerf gun to explore different trigger designs"},
        {name:"Clock", date:"16/06/20", images:["Clock 1.jpeg"], info:"Laser cut a new clock for my room"},
        {name:"Ozone Generator", date:"10/07/20", images:["Ozone Generator 1.jpeg","Ozone Generator 2.png","Ozone Generator 3.png"], info:"Generates ozone using pure oxygen and high voltage. It breaks the O2 down into O3, shown on ozone meter"},
        {name:"Crossbow", date:"16/07/20", images:["Crossbow 1.jpeg", "Crossbow 2.jpeg"], info:"3D printed crossbow, shoots projectiles with elastic band"},
        {name:"RC Car", date:"26/07/20", images:["RC Car 1.jpeg","RC Car 2.jpeg","RC Car 3.jpeg","RC Car 4.jpeg"], info:"Completely custom RC car, controller and all, with 3D printed shell"},
        {name:"Infrared Gun", date:"20/09/20", images:["Infrared Gun 1.jpeg","Infrared Gun 2.jpeg"], info:"Receives, stores & transmits IF signals to mimic the functions of other IF devices like a TV"},
        {name:"Scrolling Picture Frame", date:"12/10/20", images:["Scrolling Picture Frame 1.jpeg","Scrolling Picture Frame 2.jpeg"], info:"Frame to show a different picture every day using a conveyor belt of pics"},
        {name:"Automatic Straw", date:"23/12/20", images:["Auto Straw 1.jpeg","Auto Straw 2.jpeg"], info:"A straw that you don't have to suck!"},
        {name:"Torch", date:"27/12/20", images:["Torch 1.jpeg","Torch 2.jpeg","Torch 3.jpeg","Torch 4.jpeg"], info:"Multi-colour, 3D printed torch"},
    ],
    2019: [
        {name:"Infinity Mirror", date:"20/01/19", images:["Infinity Mirror 1.jpeg","Infinity Mirror 2.jpeg","Infinity Mirror 3.jpeg"], info:"Mirror that appears to go on forever by using special mirrors to trap the light"},
        {name:"Bluetooth Speaker", date:"01/02/19", images:["Bluetooth Speaker 1.jpeg","Bluetooth Speaker 2.jpeg","Bluetooth Speaker 3.jpeg","Bluetooth Speaker 4.jpeg","Bluetooth Speaker 5.jpeg"], info:"School DT project; Bluetooth speaker with flashing ring of LED lights"},
        {name:"Night Light", date:"17/03/19", images:["Night Light 1.jpeg","Night Light 2.jpeg","Night Light 3.jpeg"], info:"Colour changing night light uses LDR to detect when dark and automatically turns on"},
        {name:"Hydrogen Generator V1", date:"22/04/19", images:["Hydrogen Generator V1 1.jpeg","Hydrogen Generator V1 2.jpeg","Hydrogen Generator V1 3.jpeg"], info:"This is version 1, my first time making hydrogen with the electrolysis process"},
        {name:"Vacuum Chamber", date:"28/04/19", images:["Vacuum Chamber 1.jpeg","Vacuum Chamber 2.jpeg","Vacuum Chamber 3.jpeg"], info:"I made this little vacuum chamber to experiment with; the low pressure makes marshmallows grow & water boil"},
        //{name:"Mould", date:"21/06/19", images:["Mould.jpeg"], info:""},
        {name:"Hydrogen Rocket", date:"30/06/19", images:["Rocket 1.jpeg","Rocket 2.jpeg"], info:"Simple bottle rocket filled with hydrogen, goes up with a bang!"},
        {name:"Hydrogen Generator V2", date:"05/07/19", images:["Hydrogen Generator V2 1.jpeg","Hydrogen Generator V2 2.jpeg","Hydrogen Generator V2 3.jpeg"], info:"Generates more hydrogen!"},
        {name:"Potato Cannon 1", date:"06/07/19", images:["Potato Cannon 1 1.jpeg","Potato Cannon 1 2.jpeg","Potato Cannon 1 3.jpeg","Potato Cannon 1 4.jpeg","Potato Cannon 1 5.jpeg","Potato Cannon 1 6.jpeg","Potato Cannon 1 7.jpeg","Potato Cannon 1 8.jpeg"], info:"Hydrogen-powered cannon, very explosive!"},
        {name:"Hovercraft", date:"16/08/19", images:["Hover Craft.jpeg"], info:"Used some old drone motors to make this hovercraft"},
        {name:"Bird House", date:"17/10/19", images:["Bird House 1.jpeg","Bird House 2.jpeg"], info:"I made a luxary bird house & can confirm it has had visitors"},
        {name:"Hydrogen Generator V3", date:"01/11/19", images:["Hydrogen Generator V3 1.jpeg","Hydrogen Generator V3 2.jpeg","Hydrogen Generator V3 3.jpeg","Hydrogen Generator V3 4.jpeg","Hydrogen Generator V3 5.jpeg"], info:"Uses electrolysis the generate hydrogen, by splitting (water) H2O into H & O2"},
        {name:"Potato Cannon 2", date:"03/11/19", images:["Potato Cannon 2 1.jpeg","Potato Cannon 2 2.jpeg","Potato Cannon 2 3.jpeg","Potato Cannon 2 4.jpeg"], info:"This shot a tennis ball 200m!"},
    ]
}


function addProjects(year){    
    const pathStart = "images/"+year.toString()+"/"

    // Get the section with id '2022'
    const section = document.getElementById(year);
    // Loop through each project in the array
    for (let i = PROJECTS[year].length-1; i >= 0; i--) {
        // Get the project name, date, images, and info
        const projectName = PROJECTS[year][i].name;
        const projectDate = PROJECTS[year][i].date;
        const projectImages = PROJECTS[year][i].images;
        const projectInfo = PROJECTS[year][i].info;

        // Create a new div element with class "project" and id of the project name
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = projectName;

        // Create a new h2 element with the project name
        const projectNameHeader = document.createElement('h3');
        projectNameHeader.textContent = projectName;

        const sumryButton = document.createElement('button');
        sumryButton.classList.add('summaryButton');
        
        const projectImage = document.createElement('img');
        projectImage.src = pathStart + projectImages[0];
        projectImage.alt = "0"
        projectImage.id = year.toString()
        if(projectImages.length > 1){
            projectImage.style.cursor = 'pointer';
        }
        
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('projectInfo');

        // Create a new p element with the project info
        const infoP = document.createElement('p');
        infoP.id = 'infoP'
        infoP.innerHTML = `
            Summary: <br>
            ${projectInfo}<br><br>
            Date:
            ${projectDate}`;

        infoDiv.appendChild(infoP);
        
        // Append the h2, date, images, and info elements to the div element
        projectDiv.appendChild(projectNameHeader);
        projectDiv.appendChild(sumryButton);
        projectDiv.appendChild(infoDiv);
        projectDiv.appendChild(projectImage);

        // Append the div element to the section with id '2022'
        section.appendChild(projectDiv);
    }
}

addProjects(2023);
addProjects(2022);
addProjects(2021);
addProjects(2020);
addProjects(2019);

const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    const image = project.querySelector('img');
    const info = project.querySelector('.projectInfo');
    const sumryButton = project.querySelector('.summaryButton');
    const year = image.id

    sumryButton.addEventListener('click', () => {
        if(info.style.display == "block"){
            sumryButton.style.transform = 'scale(1)';
            info.style.display = "none";
            image.style.opacity = 1
        }else{
            sumryButton.style.transform = 'scale(-1)';
            info.style.display = "block";
            image.style.opacity = 0.05
        }
    })
    
    image.addEventListener('click', () => {
        const pathStart = "images/"+year.toString()+"/"
        let projectName = project.querySelector('h3').textContent;
        let projectIndex = PROJECTS[year].findIndex(obj => obj.name === projectName);
        let imgIndex = Number(project.querySelector('img').alt) + 1;

        if(imgIndex >= PROJECTS[year][projectIndex].images.length){
            imgIndex = 0;
        }
        image.src =  pathStart + PROJECTS[year][projectIndex].images[imgIndex];
        project.querySelector('img').alt = imgIndex.toString();
    });
});