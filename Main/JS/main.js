// ============================================================
// Featured projects. Add or reorder cards here
// ============================================================
const FEATURED = [
    {
        name: "StepSmart Walking Stick",
        img: "AllProjects/images/2025/stepsmart1.jpeg",
        desc: "Smart walking stick with fall detection, GPS, obstacle detection and a Bluetooth companion app. Led the team and entered it for the James Dyson Award.",
        tags: ["Hardware", "iOS App", "Bluetooth"],
        link: { url: "https://peter-metcalfe.co.uk/StepSmart/Home/", label: "Visit site" }
    },
    {
        name: "Fractal Generator",
        img: "images/fractals.svg",
        desc: "Explores the maths behind the Mandelbrot set and other fractals, with the heavy lifting done in GPU shaders. I even took it to the 3rd dimension.",
        tags: ["Maths", "GPU Shaders", "Web"],
        link: { url: "https://peter-metcalfe.co.uk/fractals/", label: "Try it live" }
    },
    {
        name: "LightSymphony iOS App",
        img: "AllProjects/images/2025/LSApp1.jpeg",
        desc: "Garden lighting app to wirelessly control your lights, with timers, colours and GPS automation.",
        tags: ["Swift", "Light Control", "Published"],
        link: { url: "https://apps.apple.com/gb/app/lightsymphony/id6743965202", label: "On the App Store" }
    },
    {
        name: "Micro-Mouse",
        img: "AllProjects/images/2025/Mouse1.jpeg",
        desc: "Maze-solving robotic mice with custom PCBs, IR sensors and path-finding algorithms, built for Leonardo's Micro-Mouse competition.",
        tags: ["Robotics", "PCB Design", "C++"],
        link: { url: "https://www.instagram.com/reel/DHLWK2mNXE-/", label: "Watch it run" }
    },
    {
        name: "Alien Crush 3D",
        img: "AllProjects/images/2022/Alien Crush 3D 1.jpeg",
        desc: "My first 3D game. Fly a UFO through shrinking space across 10 levels and try to survive until the end.",
        tags: ["Godot", "Game Dev", "Published"],
        link: { url: "https://apps.apple.com/il/app/alien-crush-3d/id1635056740?platform=iphone", label: "On the App Store" }
    },
    {
        name: "Squid Game",
        img: "images/squid.jpeg",
        desc: "A 6-player electronic game inspired by the TV show, where players are randomly eliminated with an electric shock! Software, electronics and 3D printing combined.",
        tags: ["Electronics", "3D Printing", "High Voltage"],
        link: { url: "https://peter-metcalfe.co.uk/Peter%27s%20Squid%20Game.pdf", label: "Read more" }
    },
];

// ============================================================
// Experience timeline, newest at the bottom
// ============================================================
const TIMELINE = [
    { year: "2018", name: "BSI", logo: "images/bsi.png", desc: "A week placement at the Hemel office exploring about test standards on a variety of appliances." },
    { year: "2019", name: "Post Office", logo: "images/postOffice.png", desc: "Evening and weekend work in my local village shop." },
    { year: "2024", name: "Resonate", logo: "images/resonate.png", desc: "4 months as a software degree apprentice learning full-stack development." },
    { year: "2025", name: "DSTL", logo: "images/dstl.png", desc: "4 months at Porton Down working on robotics and neuromorphic computing." },
    { year: "2022 to present", name: "Leonardo", logo: "images/leonardo.png", desc: "Software engineering degree apprentice. Developed software for next-gen fighter & electronic surveillance systems. Currently in future R&D.", current: true },
];

// ============================================================
// Skills & interests
// ============================================================
const SKILLS = [
    { name: "C++", icon: "cpp.png", desc: "A general-purpose computer programming language." },
    { name: "C#", icon: "cSharp.svg", desc: "A general-purpose computer programming language." },
    { name: "Swift", icon: "swift.png", desc: "Programming language used to develop apps for Apple products." },
    { name: "Xcode", icon: "xcode.webp", desc: "Application to develop apps for the Apple App Store." },
    { name: "Python", icon: "python.png", desc: "A high-level, general-purpose programming language." },
    { name: "TensorFlow", icon: "TensorFlow.svg", desc: "An open-source platform for machine learning and artificial intelligence." },
    { name: "Figma", icon: "Figma-logo.svg", desc: "A collaborative web application for interface design." },
    { name: "Godot", icon: "godot.png", desc: "A cross-platform, free and open-source game engine." },
    { name: "Blender", icon: "Blender.svg", desc: "A free and open-source 3D computer graphics software tool set." },
    { name: "Fusion 360", icon: "Fusion_360_Logo.png", desc: "A commercial computer-aided design software application." },
    { name: "Arduino", icon: "arduino.svg", desc: "An open-source electronics platform based on easy-to-use hardware and software." },
    { name: "Raspberry Pi", icon: "Raspberry_Pi_Logo.svg", desc: "Small single-board, programmable computer." },
    { name: "HTML", icon: "html.svg", desc: "The standard language for documents designed to be displayed in a web browser." },
    { name: "CSS", icon: "css.svg", desc: "A language used for describing the presentation of a document written in HTML." },
    { name: "JavaScript", icon: "javaScript.svg", desc: "A language at the core of web technologies, used on the client side for webpage behavior." },
    { name: "NodeJS", icon: "Node.js_logo.svg", desc: "A cross-platform open-source back-end JavaScript runtime environment." },
    { name: "React", icon: "React-icon.svg", desc: "An open-source front-end JavaScript library for building user interfaces based on components." },
    { name: "Postman", icon: "postman-icon.svg", desc: "An API Platform for developers to design, build, test and iterate their APIs." },
    { name: "RESTful API", icon: "rest-api.svg", desc: "An interface that computers use to exchange information securely over the internet." },
    { name: "PostgreSQL", icon: "Postgresql_elephant.svg", desc: "A free and open-source relational database management system and SQL compliance." },
    { name: "EasyEDA", icon: "EasyEda.svg", desc: "A tool for electronics design, including schematic capture, circuit simulation and PCB layout." },
    { name: "MATLAB", icon: "Matlab.png", desc: "A platform for algorithm development, data analysis, visualisation, and computation." },
    { name: "Visual Studio", icon: "Visual Studio.svg", desc: "An integrated development environment (IDE) from Microsoft for developing applications." },
    { name: "Terminal / Linux", icon: "Terminal.svg", desc: "Proficient with command-line interfaces and Linux-based operating systems." },
    { name: "Git", icon: "Git.svg", desc: "A distributed version control system for tracking changes in source code." },
    { name: "GitHub", icon: "github.png", desc: "An Internet hosting service for software development and version control using Git." },
    { name: "Bitbucket", icon: "Bitbucket SVG Icon.svg", desc: "A Git-based source code repository hosting service owned by Atlassian." },
    { name: "Microsoft Teams", icon: "MicrosoftTeams.svg", desc: "A collaboration platform that combines workplace chat, meetings, notes, and attachments." },
    { name: "Microsoft Office", icon: "office.png", desc: "Suite including Word, Excel, PowerPoint, Outlook, OneNote." },
    { name: "Azure DevOps", icon: "azureDevops.webp", desc: "A Microsoft product that provides project management and DevOps tools." },
    { name: "Jira", icon: "Jira SVG Icon.svg", desc: "A tool for tracking issues, managing projects, and supporting agile software development." },
    { name: "Confluence", icon: "Confluence SVG Icon.svg", desc: "A collaboration wiki tool used to help teams collaborate and share knowledge efficiently." },
];

const INTERESTS = [
    { name: "3D Printing", icon: "3D-Printer.svg", desc: "I am lucky enough to own a 3D printer, so have used it to create many projects, <a href='https://www.thingiverse.com/peter-metcalfe/designs' target='_blank'>see models</a>", url: "https://www.thingiverse.com/peter-metcalfe/designs" },
    { name: "Laser Cutting", icon: "laserCutter.png", desc: "I am lucky enough to own a laser cutter, so have used it to create many projects" },
    { name: "Electronics", icon: "soldering.png", desc: "Electronics often play a significant role in the projects I make" },
    { name: "Mechanical Work", icon: "tools.svg", desc: "I have access to a workshop of tools which I have learnt to use" },
    { name: "Programming", icon: "code2.png", desc: "My work and my hobby. From apps to games to websites, I enjoy it all, especially the <a href='https://sites.google.com/view/peters-maths-posters/home' target='_blank'>math</a>", url: "https://sites.google.com/view/peters-maths-posters/home" },
    { name: "Army Cadet Force", icon: "cadets.png", desc: "I volunteer with my local cadet detachment as an adult instructor" },
    { name: "Badminton", icon: "badminton.svg", desc: "Keen badminton player, often play with friends" },
    { name: "Rock Climbing", icon: "climbing.png", desc: "Keen rock climber, go at least once a week" },
    { name: "Cycling", icon: "cycling1.png", desc: "Enjoy biking off-road when the weather is good" },
];

// ============================================================
// Rendering
// ============================================================
function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    FEATURED.forEach(p => {
        const card = document.createElement('article');
        card.className = 'card reveal';
        card.innerHTML = `
            <img class="card-img" src="${p.img}" alt="${p.name}" loading="lazy">
            <div class="card-body">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
            </div>`;
        card.addEventListener('click', () => openProjectModal(p));
        grid.appendChild(card);
    });
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    TIMELINE.forEach(job => {
        const item = document.createElement('div');
        item.className = 't-item reveal' + (job.current ? ' current' : '');
        item.innerHTML = `
            <div class="t-logo"><img src="${job.logo}" alt="${job.name}"></div>
            <div class="t-body">
                <span class="t-year">${job.year}</span>
                <h3>${job.name}</h3>
                <p>${job.desc}</p>
            </div>`;
        timeline.appendChild(item);
    });
}

function renderIconGrid(items, gridId, infoId, iconPath) {
    const grid = document.getElementById(gridId);
    const info = document.getElementById(infoId);
    items.forEach(item => {
        const tile = document.createElement(item.url ? 'a' : 'div');
        tile.className = 'icon-tile';
        if (item.url) {
            tile.href = item.url;
            tile.target = '_blank';
        }
        tile.innerHTML = `<img src="${iconPath}${item.icon}" alt="${item.name}" title="${item.name}" loading="lazy">`;
        // Info text stays after the mouse leaves, so links inside it remain clickable
        tile.addEventListener('mouseenter', () => {
            info.innerHTML = `<strong>${item.name}:</strong> ${item.desc}`;
        });
        grid.appendChild(tile);
    });
}

// ============================================================
// Project modal (expanded view of a featured project)
// ============================================================
const modal = document.getElementById('projectModal');

function openProjectModal(p) {
    document.getElementById('modalImg').src = p.img;
    document.getElementById('modalImg').alt = p.name;
    document.getElementById('modalTitle').textContent = p.name;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modalTags').innerHTML =
        p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const link = document.getElementById('modalLink');
    link.href = p.link.url;
    link.textContent = p.link.label;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

modal.addEventListener('click', e => {
    if (!e.target.closest('.modal-card')) closeProjectModal();
});
document.getElementById('modalClose').addEventListener('click', closeProjectModal);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeProjectModal();
});

renderFeatured();
renderTimeline();
renderIconGrid(SKILLS, 'skillsGrid', 'skillsInfo', 'images/skills/');
renderIconGrid(INTERESTS, 'interestsGrid', 'interestsInfo', 'images/skills/');

// ============================================================
// Scroll reveal
// ============================================================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
