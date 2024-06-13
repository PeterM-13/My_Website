//import PROJECTS from './Projects.json';
const PROJECTS = { 
    2024: [
        {name:"Micro-Mouse Prototype", date:"20/3/24", images:["Mouse 1.jpeg","Mouse 2.jpeg","Mouse 3.jpeg","Mouse 4.jpeg","Mouse 5.jpeg"], info:"Working robotic mouse prototype that uses IR sensors to navigate through mazes", keyWords:['software','electrical','mechanical']},
        {name:"Little Moo & Big Bully", date:"26/4/24", images:["Chariot 1.jpg","Chariot 2.png","Chariot 3.jpg","Chariot 4.jpg","Chariot 5.jpg","Chariot 6.jpg","Chariot 7.jpg","Chariot 8.jpg","Chariot 9.jpg","Chariot 10.jpg"], info:"The Appprentice Team I was in built these Rampaging Chariots for Leonardo's event, see <a target='_blank' href='https://youtu.be/nLV-coJIBKU'>here</a> or <a target='_blank' href='https://www.instagram.com/p/C6bNCHbsOvo/'>here</a>", keyWords:[,'electrical','mechanical','team']},
        {name:"Leonardo Game", date:"25/5/24", images:["game1.jpeg","game2.jpeg","game3.jpeg","game4.jpeg","game5.jpeg","game6.jpeg","game7.jpeg","game8.jpeg","game9.jpeg","game10.jpeg"], info:"A mobile game of 'Higher or Lower' all about Leanardo. Players vote for their answer to score points", keyWords:['software']},
    ],
    2023: [
        {name:"Movie Website", date:"14/02/23", images:["Movie Website 1.jpeg","Movie Website 2.jpeg","Movie Website 3.png"], info:"Named 'Movieter', I made a site to browse and watch movies using a free API", keyWords:['software']},
        {name:"This Website", date:"8/03/23", images:["My Website 1.jpeg","My Website 2.jpeg","My Website 3.jpeg"], info:"I designed and built this website as a portfolio", keyWords:['software']},
        {name:"Leonardo Balsa 'Glider'", date:"14/04/23", images:["Leonardo Frizbee 1.jpeg","Leonardo Frizbee 2.jpeg","Leonardo Frizbee 3.jpeg","Leonardo Frizbee 4.jpeg"], info:"I won a glider competition, working at Leonardo, by making a 'glider' with more of a frizbee design 😄", keyWords:['mechanical','award']},
        {name:"3D Packman", date:"11/06/23", images:["Packman1.jpeg","Packman2.jpeg","Packman3.jpeg","Packman4.jpeg","Packman5.jpeg","Packman6.jpeg","Packman7.jpeg","Packman8.jpeg"], info:"I re-created packman in 3D from a first person perspective for extra suspense", keyWords:['software']},
        {name:"Rampaging Chariot", date:"16/06/23", images:["Chariot1.jpeg","Chariot2.jpeg","Chariot3.jpeg","Chariot4.jpeg","Chariot5.jpeg","Chariot6.jpeg"], info:"Worked in a team of appprentices to build a chariot for Leonardo's event", keyWords:['software','electrical','mechanical','team']},
        {name:"Smart Walking Stick", date:"31/01/23 - 29/09/23", images:["StepSmart1.PNG","StepSmart2.jpg","StepSmart3.jpeg","StepSmart4.jpg","StepSmart5.jpg","StepSmart6.jpg","StepSmart7.jpg","StepSmart8.jpg","StepSmart9.jpeg"], info:"Led team to vicotry, making a smart walking stick in IMechE automation challenge. Got fall detection, torch, app & <a target='_blank' href='https://youtu.be/iHIE9UCjryk'>more</a>", keyWords:['software','electrical','mechanical','invention','team','award']},
        {name:"Conway's Game of Life", date:"12/10/23", images:["Conway 1.jpeg","Conway 2.jpeg","Conway 3.jpeg","Conway 4.jpeg"], info:"Re-created the game (with smiley faces) as a coding challenge. Simulates cellular life, <a target='_blank' href='https://youtu.be/s4DJEKRyq6w'>see my video</a>", keyWords:['software']},
        {name:"Useless Box", date:"30/11/23", images:["UBox 1.jpeg","UBox 2.jpeg","UBox 3.jpeg","UBox 4.jpeg","UBox 5.jpeg"], info:"This box won't let you switch it off. Servos are used to switch the box off if you turn it on - that's all it does, <a target='_blank' href='https://youtu.be/qVN5IE1tdXc'>see here</a>", keyWords:['software','mechanical','electrical']},
    ],
    2022: [
        {name:"Rain Simulator", date:"09/01/22", images:["Rain Sim 1.jpg","Rain Sim 2.jpeg","Rain Sim 3.jpeg","Rain Sim 4.jpeg"], info:"Allows you to experiment with different velocities and angles to find out if you stay dryer by running or walking in the rain", keyWords:['software']},
        {name:"Squid Game", date:"17/01/22", images:["Squid Game 1.jpeg","Squid Game 2.jpeg","Squid Game 3.jpeg","Squid Game 4.jpeg","Squid Game 5.jpeg"], info:"6 player game that will randomly shock a player each round, eliminating them... <br><a target='_blank' href='https://peter-metcalfe.co.uk/Peter%27s%20Squid%20Game.pdf'>See PDF</a>", keyWords:['software','mechanical','electrical','invention']},
        {name:"3D Fractal Generator", date:"26/01/22", images:["3D Fractal Generation 1.jpeg", "3D Fractal Generation 2.jpeg","3D Fractal Generation 3.jpeg"], info:"Made to explore 3D graphics and experiment with plotting different values on the Z-axis of the Mandelbrot set", keyWords:['software']},
        {name:"Parking Website", date:"10/02/22", images:["Parking Website 1.png","Parking Website 2.png"], info:"My first public website. Made while at sixth form to rate everyone's parking", keyWords:['software','invention']},
        {name:"'Alien Crush' 2D Game", date:"16/03/22", images:["Alien Crush 2D 1.jpeg","Alien Crush 2D 2.jpeg","Alien Crush 2D 3.jpeg"], info:"My first mobile game, live on the <a target='_blank' href='https://apps.apple.com/gb/app/alien-crush/id1623648789?platform=iphone'>AppStore</a>. Fly through space & try to survive without getting crushed!", keyWords:['software','invention']},
        {name:"Fractal Generator V1", date:"31/03/22", images:["Fractal Generator V1 1.jpeg","Fractal Generator V1 2.jpeg","Fractal Generator V1 3.jpeg"], info:"App generates the Mandelbrot set and corresponding Julia set position, and makes cool fractals, <a target='_blank' href='https://youtu.be/V6_6afSMMPE'>see video</a>", keyWords:['software']},
        {name:"Fractal Generator V2", date:"11/04/22", images:["Fractal Generation V2 1.png", "Fractal Generation V2 2.png","Fractal Generation V2 3.PNG","Fractal Generation V2 4.jpeg","Fractal Generation V2 5.jpeg","Fractal Generation V2 6.jpeg"], info:"I used shaders to run the maths on the GPU in this version, made the app fast and detailed, <a target='_blank' href='https://peter-metcalfe.co.uk/fractals/'>see website</a>", keyWords:['software','award']},
        {name:"Wimshurst Machine", date:"26/06/22", images:["Wimshurst Machine 1.jpeg","Wimshurst Machine 2.jpeg","Wimshurst Machine 3.jpeg","Wimshurst Machine 4.jpeg"], info:"This is an old invention that generates high voltages using static charge built up by spinning the wheels", keyWords:['mechanical','science']},
        {name:"'Alien Crush 3D' Game", date:"01/08/22", images:["Alien Crush 3D 1.jpeg","Alien Crush 3D 2.jpeg","Alien Crush 3D 3.jpeg","Alien Crush 3D 4.jpeg"], info:"This was my first 3D game, live on the <a target='_blank' href='https://apps.apple.com/us/app/alien-crush-3d/id1635056740?platform=iphone'>AppStore</a>. Fly through space & try to survive until the end!", keyWords:['software','invention']},
        {name:"Pea Gun", date:"31/08/22", images:["Pea Gun 1.jpeg","Pea Gun 2.jpeg","Pea Gun 3.jpeg","Pea Gun 4.jpeg"], info:"Built this gun to shoot peas using compressed air<br><a target='_blank' href='https://youtu.be/8Wl3flOoBJ0'>See video</a>", keyWords:['mechanical','electrical','invention']},
        {name:"Tetris", date:"19/09/22", images:["Tetris 1.jpeg","Tetris 2.jpeg","Tetris 3.jpeg"], info:"I recreated Tetris using the 'Godot' game engine", keyWords:['software']},
    ],
    2021: [
        {name:"Mouse Trap Car", date:"03/02/21", images:["Mouse Trap Car 1.jpeg","Mouse Trap Car 2.jpeg","Mouse Trap Car 3.jpeg"], info:"Light-weight car powered by only a mouse trap, challenge to find the greatest distance it could go", keyWords:['mechanical']},
        {name:"Mandelbrot Set", date:"22/03/21", images:["Mandelbrot Set 1.jpeg","Mandelbrot Set 2.jpeg"], info:"Using Python to generate the Mandelbrot set, it was fun optimising the code to make it run faster", keyWords:['software']},
        {name:"Graphical Calculator", date:"08/04/21", images:["Graphs.png"], info:"My A-level project; plots & solves any function, cartesian and complex plane, stats calc, formula sheets & much more..", keyWords:['software']},
        {name:"Marble Machine", date:"06/04/21", images:["Marble Machine 1.jpeg","Marble Machine 2.jpeg"], info:"Motorised laser cut marble run", keyWords:['mechanical']},
        {name:"'Hot' Potato", date:"24/05/21", images:["Hot Potato 1.jpeg","Hot Potato 2.jpeg"], info:"3D printed potato used to play the game, with shocking consequences...", keyWords:['mechanical','electrical','invention']},
        {name:"'Devil's Dungeon' Game", date:"31/05/21", images:["Devils Dungeon 1.jpeg","Devils Dungeon 2.png","Devils Dungeon 3.jpeg","Devils Dungeon 4.jpeg","Devils Dungeon 5.jpeg"], info:"Game Dev competition with McAfee; open world, puzzle solving game, fight enemies and avoid obstacles <a target='_blank' href='https://youtu.be/dtgxWdRTyNw'>see video</a>", keyWords:['software','award']},
        {name:"'Chicken Run' Game", date:"07/09/21", images:["Chicken Run 1.jpeg","Chicken Run 2.png","Chicken Run 3.jpeg","Chicken Run 4.jpeg"], info:"Fun 2 player desktop game where you each control a chicken, it's a race to the finish line, <a target='_blank' href='https://youtu.be/xagOvx40B7E'>see video</a>", keyWords:['software']},
        {name:"Snake Game", date:"12/12/21", images:["Snake Game 1.jpeg","Snake Game 2.jpeg","Snake Game 3.jpeg"], info:"Basic snake game on the Raspberry Pi, using the accelerometer and tilting as controls", keyWords:['software']},
        {name:"Face Tracking Game", date:"16/12/21", images:["Face Tracking Game 1.jpeg","Face Tracking Game 2.jpeg","Face Tracking Game 3.jpeg"], info:"Uses the webcam to see you face and moves player on screen relative to your head's position", keyWords:['software']},
    ],
    2020: [
        {name:"Laser Cut Jigsaw", date:"03/01/20", images:["Jigsaw 1.jpeg","Jigsaw 2.jpeg","Jigsaw 3.jpeg","Jigsaw 4.jpeg"], info:"Laser cut a jigsaw design and vacuum formed a box for it", keyWords:['mechanical']},
        {name:"Rubens' Tube", date:"18/01/20", images:["Rubens Tube 1.jpeg","Rubens Tube 2.jpeg","Rubens Tube 3.jpeg"], info:"Visualising sound waves at different frequencies with fire! Used pennies to hold flame & stop plastic melting", keyWords:['science']},
        {name:"Tank", date:"27/01/20", images:["Tank 1.jpeg","Tank 2.jpeg","Tank 3.jpeg","Tank 4.jpeg","Tank 5.jpeg"], info:"Laser cut this tank with treads and spinning turret & a flying propeller as a weapon!?", keyWords:['mechanical','electrical']},
        {name:"Nerf Gun", date:"14/03/20", images:["Nerf Gun 1.jpeg","Nerf Gun 2.jpeg","Nerf Gun 3.jpeg"], info:"Built this spring powered Nerf gun to explore different trigger designs", keyWords:['mechanical']},
        {name:"Clock", date:"16/06/20", images:["Clock 1.jpeg"], info:"Laser cut a new clock for my room", keyWords:['mechanical']},
        {name:"Ozone Generator", date:"10/07/20", images:["Ozone Generator 1.jpeg","Ozone Generator 2.png","Ozone Generator 3.png"], info:"Generates ozone using pure oxygen and high voltage. It breaks the O2 down into O3, shown on ozone meter", keyWords:['science']},
        {name:"Crossbow", date:"16/07/20", images:["Crossbow 1.jpeg", "Crossbow 2.jpeg"], info:"3D printed crossbow, shoots projectiles with elastic band", keyWords:['mechanical']},
        {name:"RC Car", date:"26/07/20", images:["RC Car 1.jpeg","RC Car 2.jpeg","RC Car 3.jpeg","RC Car 4.jpeg"], info:"Completely custom RC car, controller and all, with 3D printed shell", keyWords:['mechanical','electrical','software']},
        {name:"Infrared Gun", date:"20/09/20", images:["Infrared Gun 1.jpeg","Infrared Gun 2.jpeg"], info:"Receives, stores & transmits IF signals to mimic the functions of other IF devices like a TV", keyWords:['software','electrical','invention']},
        {name:"Scrolling Picture Frame", date:"12/10/20", images:["Scrolling Picture Frame 1.jpeg","Scrolling Picture Frame 2.jpeg"], info:"Frame to show a different picture every day using a conveyor belt of pics", keyWords:['mechanical','electrical','invention']},
        {name:"Automatic Straw", date:"23/12/20", images:["Auto Straw 1.jpeg","Auto Straw 2.jpeg"], info:"A straw that you don't have to suck!", keyWords:['mechanical','electrical','invention']},
        {name:"Torch", date:"27/12/20", images:["Torch 1.jpeg","Torch 2.jpeg","Torch 3.jpeg","Torch 4.jpeg"], info:"Multi-colour, 3D printed torch", keyWords:['electrical']},
    ],
    2019: [
        {name:"Desk Shelves", date:"13/01/19", images:["Shelves 1.jpeg","Shelves 2.jpeg","Shelves 3.jpeg","Shelves 4.jpeg","Shelves 5.jpeg"], info:"I made some MDF shelves to help organise my desk", keyWords:['mechanical']},
        {name:"Infinity Mirror", date:"20/01/19", images:["Infinity Mirror 1.jpeg","Infinity Mirror 2.jpeg","Infinity Mirror 3.jpeg","Infinity Mirror 4.jpeg"], info:"Mirror that appears to go on forever by using special mirrors to trap the light", keyWords:['electrical','software']},
        {name:"Crystals", date:"27/01/19", images:["Crystals 1.jpeg","Crystals 2.jpeg","Crystals 3.jpeg","Crystals 4.jpeg","Crystals 5.jpeg"], info:"Sparkly blue crystals made with potassium aluminium sulfate & blue food dye", keyWords:['science']},
        {name:"DT Crane Competition", date:"04/02/19", images:["Crane 1.jpeg","Crane 2.jpeg","Crane 3.jpeg","Crane 4.jpeg"], info:"Represented my school in DT competiotion. Were tasked with building a crane and our team won!", keyWords:['mechanical','award']},
        {name:"Night Light", date:"17/03/19", images:["Night Light 1.jpeg","Night Light 2.jpeg","Night Light 3.jpeg"], info:"Colour changing night light uses LDR to detect when dark and automatically turns on", keyWords:['mechanical','electrical']},
        {name:"Hydrogen Generator V1", date:"22/04/19", images:["Hydrogen Generator V1 1.jpeg","Hydrogen Generator V1 2.jpeg","Hydrogen Generator V1 3.jpeg"], info:"This is version 1, my first time making hydrogen with the electrolysis process", keyWords:['science']},
        {name:"Vacuum Chamber", date:"28/04/19", images:["Vacuum Chamber 1.jpeg","Vacuum Chamber 2.jpeg","Vacuum Chamber 3.jpeg"], info:"I made this little vacuum chamber to experiment with; the low pressure makes marshmallows grow & water boil", keyWords:['science']},
        //{name:"5s Rule Experiment", date:"21/06/19", images:["Mould.jpeg"], info:"Science experiment to test the 5 second rule. Turns out there is some truth behind it", keyWords:['science']},
        {name:"Hydrogen Rocket", date:"30/06/19", images:["Rocket 1.jpeg","Rocket 2.jpeg","Rocket 3.jpeg","Rocket 4.jpeg"], info:"Simple bottle rocket filled with hydrogen, goes up with a bang!", keyWords:['science']},
        {name:"Hydrogen Generator V2", date:"05/07/19", images:["Hydrogen Generator V2 1.jpeg","Hydrogen Generator V2 2.jpeg","Hydrogen Generator V2 3.jpeg"], info:"Generates more hydrogen!", keyWords:['science']},
        {name:"Potato Cannon 1", date:"06/07/19", images:["Potato Cannon 1 1.jpeg","Potato Cannon 1 2.jpeg","Potato Cannon 1 3.jpeg","Potato Cannon 1 4.jpeg","Potato Cannon 1 5.jpeg","Potato Cannon 1 6.jpeg","Potato Cannon 1 7.jpeg","Potato Cannon 1 8.jpeg"], info:"Hydrogen-powered cannon, very explosive!", keyWords:['science']},
        {name:"Hovercraft", date:"16/08/19", images:["Hover Craft.jpeg"], info:"Used some old drone motors to make this hovercraft", keyWords:['electrical']},
        {name:"Bird House", date:"17/10/19", images:["Bird House 1.jpeg","Bird House 2.jpeg"], info:"I made a luxary bird house & can confirm it has had visitors", keyWords:['mechanical']},
        {name:"Bluetooth Speaker", date:"26/10/19", images:["Bluetooth Speaker 1.jpeg","Bluetooth Speaker 2.jpeg","Bluetooth Speaker 3.jpeg","Bluetooth Speaker 4.jpeg","Bluetooth Speaker 5.jpeg"], info:"School DT project; Bluetooth speaker with flashing ring of LED lights", keyWords:['electrical']},
        {name:"Hydrogen Generator V3", date:"01/11/19", images:["Hydrogen Generator V3 1.jpeg","Hydrogen Generator V3 2.jpeg","Hydrogen Generator V3 3.jpeg","Hydrogen Generator V3 4.jpeg","Hydrogen Generator V3 5.jpeg"], info:"Uses electrolysis the generate hydrogen, by splitting (water) H2O into H & O2", keyWords:['science']},
        {name:"Potato Cannon 2", date:"03/11/19", images:["Potato Cannon 2 1.jpeg","Potato Cannon 2 2.jpeg","Potato Cannon 2 3.jpeg","Potato Cannon 2 4.jpeg"], info:"This shot a tennis ball 200m!", keyWords:['science']},
        // {name:"Newton's Cradle", date:"22/05/19", images:[""], info:"", keyWords:['mechanical']},
    ],
    2018: [
        {name:"Christmas Decorations", date:"22/12/18", images:["Ballball 1.jpeg","Ballball 2.jpeg","Ballball 3.jpeg","Ballball 4.jpeg","Ballball 5.jpeg"], info:"Designed & laser cut these christmas tree decorations", keyWords:['other']},
        {name:"Hydrogen Reaction", date:"26/10/18", images:["Hydrogen 1.jpeg","Hydrogen 2.jpeg","Hydrogen 3.jpeg","Hydrogen 4.jpeg","Hydrogen 5.jpeg","Hydrogen 6.jpeg"], info:"Recting alluminium with sodium hydroxide to produce hydrogen", keyWords:['science']},
        {name:"Cross-Stitch Sewing", date:"01/04/18", images:["Sewing 1.jpeg","Sewing 2.jpeg","Sewing 3.jpeg","Sewing 4.jpeg","Sewing 5.jpeg","Sewing 6.jpeg","Sewing 7.jpeg","Sewing 8.jpeg","Sewing 9.jpeg","Sewing 10.jpeg"], info:"Sewing cross-stitch, each one takes about 4~6hrs", keyWords:['other']},
    ],
    2017: [
        {name:"Gallium", date:"29/01/17", images:["Gallium 1.jpeg","Gallium 2.jpeg","Gallium 3.jpeg"], info:"Got my hands on some gallium which is a metal that melts at room temperature", keyWords:['science']},
        {name:"Origami", date:"17/11/17", images:["Origami 1.jpeg","Origami 2.jpeg","Origami 3.jpeg","Origami 4.jpeg","Origami 5.jpeg","Origami 6.jpeg","Origami 7.jpeg","Origami 8.jpeg","Origami 9.jpeg","Origami 10.jpeg","Origami 11.jpeg"], info:"The art of folding paper...", keyWords:['other']},
        {name:"Scissor Arm", date:"23/11/17", images:["Arm 1.jpeg","Arm 3.jpeg","Arm 4.jpeg","Arm 5.jpeg"], info:"Extendable scissor arm to get things out of reach", keyWords:['mechanical']},
        //{name:"USB Desk Light", date:"03/11/17", images:["Scissor Arm 1.jpeg","Scissor Arm 2.jpeg"], info:"Small USB light for the desk", keyWords:['electrical']},
    ],
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

function addProject(project){
    const projectYear = Object.keys(PROJECTS).find(year => PROJECTS[year].includes(project));
    const projectsContainer = document.getElementById(projectYear);
    
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.id = projectName;

    const projectNameHeader = document.createElement('h3');
    projectNameHeader.textContent = project.name;

    const sumryButton = document.createElement('button');
    sumryButton.classList.add('summaryButton');

    const projectImage = document.createElement('img');
    projectImage.src = pathStart + project.images[0];
    projectImage.alt = "0"
    projectImage.id = year.toString()
    if(project.images.length > 1){
        projectImage.style.cursor = 'pointer';
    }

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('projectInfo');

    // Create a new p element with the project info
    const infoP = document.createElement('p');
    infoP.id = 'infoP'
    infoP.innerHTML = `
        Summary: <br>
        ${project.info}<br><br>
        Date:
        ${project.date}`;

    infoDiv.appendChild(infoP);

    // Append the h2, date, images, and info elements to the div element
    projectDiv.appendChild(projectNameHeader);
    projectDiv.appendChild(sumryButton);
    projectDiv.appendChild(infoDiv);
    projectDiv.appendChild(projectImage);

    // Append the div element to the section with id '2022'
    projectsContainer.appendChild(projectDiv);
}

addProjects(2024);
addProjects(2023);
addProjects(2022);
addProjects(2021);
addProjects(2020);
addProjects(2019);
addProjects(2018);
addProjects(2017);

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

const filterIcon = document.getElementById('filterIcon');
const filterOptions = document.querySelectorAll('.filter');
const filters = document.getElementById('filters');

filterIcon.addEventListener('click', () => {
    filters.classList.toggle('filters-visible');
});

filterOptions.forEach(filter => {
    filter.addEventListener('click', () => {
        filter.classList.toggle('clicked');
        applyFilters();
    });
});

function applyFilters() {
    
    let appliedFilters = [];
    let noFiltersSelected = true;
    
    const softwareFilter = document.getElementById('softwareFilter');
    const electricalFilter = document.getElementById('electricalFilter');
    const mechanicalFilter = document.getElementById('mechanicalFilter');
    const inventionFilter = document.getElementById('inventionFilter');
    const scienceFilter = document.getElementById('scienceFilter');
    const awardFilter = document.getElementById('awardFilter');
    if (softwareFilter.classList.contains('clicked')) { appliedFilters.push('software'); noFiltersSelected = false; }
    if (electricalFilter.classList.contains('clicked')) { appliedFilters.push('electrical'); noFiltersSelected = false; }
    if (mechanicalFilter.classList.contains('clicked')) { appliedFilters.push('mechanical'); noFiltersSelected = false; }
    if (inventionFilter.classList.contains('clicked')) { appliedFilters.push('invention'); noFiltersSelected = false; }
    if (scienceFilter.classList.contains('clicked')) { appliedFilters.push('science'); noFiltersSelected = false; }
    if (awardFilter.classList.contains('clicked')) { appliedFilters.push('award'); noFiltersSelected = false; }
    

    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const projectYear = project.parentNode.id;
        const projectName = project.querySelector('h3').textContent;
        const projectDetails = PROJECTS[projectYear];
        const projectData = projectDetails.find(item => item.name === projectName);

        if (projectData && projectData.keyWords) {
            if (noFiltersSelected) {
                project.style.display = '';
                project.classList.remove('filtered');
            } else {
                const projectHasFilters = appliedFilters.some(filter => projectData.keyWords.includes(filter));

                if (!projectHasFilters) {
                    project.classList.add('filtered');
                   // setTimeout(() => {
                        project.style.display = 'none';
                    //}, 500);
                } else {
                    project.style.display = '';
                    project.classList.remove('filtered');
                }
            }
        }
    });   
}


const projectTitles = document.querySelectorAll('h3');
projectTitles.forEach((projectTitle, index) => {
    projectTitle.addEventListener('click', ()=>{
        const parentProject = projectTitle.closest('.project');
        if (parentProject) {
            const imgElement = parentProject.querySelector('img');

            const isClicked = parentProject.classList.contains('clicked');

            const clickedProjects = document.querySelectorAll('.project.clicked');
            clickedProjects.forEach(clickedProject => {
                clickedProject.classList.remove('clicked');
                const img = clickedProject.querySelector('img');
                if (img) {
                    img.classList.remove('clicked');
                }
            });

            if (!isClicked) {
                parentProject.classList.add('clicked');
                if (imgElement) {
                    imgElement.classList.add('clicked');
                }
            }
        }
    })
})

function removeClickedClasses() {
    const clickedProjects = document.querySelectorAll('.project.clicked');
    clickedProjects.forEach(clickedProject => {
        clickedProject.classList.remove('clicked');
        const img = clickedProject.querySelector('img');
        if (img) {
            img.classList.remove('clicked');
        }
    });
}
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        removeClickedClasses();
    }
});
// const main = document.querySelector('main');
// main.addEventListener('click', () => {
//     removeClickedClasses();
// });


if (location.protocol !== "https:") {
    //location.protocol = "https:";
}

const backBtn = document.getElementById("backButton");
backBtn.addEventListener("click", () => {
  window.location.href = "../";
});

const topBtn = document.getElementById("topButton");
topBtn.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});