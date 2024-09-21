const profileData = {
    name: "Abaan Fida",
    title: "Computer Scientist | Game Developer",
    image: "pfp.webp",
    skills: {
        hardSkills: ["HTML, CSS, JavaScript", "PHP-Laravel", "Python, Django", "C++, C#, C", "Web Scraping with Scrapy", "Game Development with Unity"],
        softSkills: ["Communication", "Teamwork", "Problem-solving"]
    },
    projects: [
        { icon: "fa-utensils", title: "goFood", description: "A food delivery web application developed using PHP Laravel, featuring a user-friendly interface for ordering and managing food deliveries." },
        { icon: "fa-laptop-code", title: "Game Comparator Using Django and Scrapy", description: "A web application that aggregates and compares game data from multiple sources using Django and Scrapy." },
        { icon: "fa-gamepad", title: "Pac-Man in Unity", description: "A classic Pac-Man game developed in Unity, featuring the original gameplay mechanics and enhanced graphics." },
        { icon: "fa-chess", title: "Chess Game in C++", description: "A fully functional chess game implemented in C++, featuring AI opponents and a graphical interface." },
        { icon: "fa-running", title: "Infinite Runner in Unity", description: "A dynamic endless runner game developed in Unity, showcasing procedural generation and player progression." },
        { icon: "fa-dice", title: "Ludo Game in C++ Using SFML", description: "A Ludo board game developed in C++ with SFML for graphics, including multiplayer support and AI players." },
        { icon: "fa-image", title: "Client-Server Image Processing in C", description: "A client-server application for image processing tasks, allowing clients to send images to the server for processing and receiving results." },
        { icon: "fa-chess", title: "Shogi Game in C++", description: "A Shogi game implemented in C++, featuring traditional Japanese chess rules and AI opponents." },
        { icon: "fa-database", title: "MongoDB Clone in C++", description: "A database system implemented in C++ that mimics the functionality of MongoDB, including basic CRUD operations and indexing." }
    ],
    activities: [
        { icon: "fa-trophy", title: "Debates in GCU", description: "Participated in various debate competitions held at Government College University (GCU), showcasing public speaking and argumentation skills." },
        { icon: "fa-hands-helping", title: "Anti Narcotics Society", description: "Active member of the Anti Narcotics Society, involved in spreading awareness and conducting campaigns against drug abuse." },
        { icon: "fa-users", title: "ITU Media Club", description: "Contributed to various media and communication projects as the Graphics Head of the ITU Media Club." },
        { icon: "fa-soccer-ball", title: "ITU Sports Society", description: "Engaged in sports activities and events organized by the ITU Sports Society." },
        { icon: "fa-calendar-day", title: "ITU Sportsfest 2023 & 2024", description: "Participated and volunteered as the Graphics Head in the ITU Sportsfest events for 2023 and 2024, contributing to the success of these annual sports festivals." },
        { icon: "fa-code", title: "GDSC ITU", description: "Active member of Google Developer Student Clubs (GDSC) ITU as the Design Head, working on tech projects and community events." },
        { icon: "fa-code-branch", title: "Code Rush 2022 & 2023", description: "Participated in Code Rush competitions in 2022 and 2023, engaging in coding challenges and hackathons." }
    ],
    degrees: [
        "BSc Computer Science - Information Technology University (2022 - Present)",
        "FSc Pre Engineering - Government College University (2020 - 2022)"
    ],
    socialLinks: [
        { platform: "GitHub", url: "https://github.com/abaanfida" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/abaanfida" }
    ],
    contact: {
        email: "abaanfida@gmail.com",
        phone: "+92-3110482778"
    }
};


document.getElementById('profile-image').src = profileData.image;
document.getElementById('name').textContent = profileData.name;
document.getElementById('title').textContent = profileData.title;

function populateSkills() {
    const skillsSection = document.getElementById('skills');
    let skillsHTML = `<h2 class="section-title">Skills</h2>
                      <div class="skills-container">
                          <div class="skills-column hard-skills">
                              <h3>Hard Skills</h3>
                              <ul>`;
    profileData.skills.hardSkills.forEach(skill => {
        skillsHTML += `<li>${skill}</li>`;
    });
    skillsHTML += `</ul></div><div class="skills-column soft-skills">
                   <h3>Soft Skills</h3><ul>`;
    profileData.skills.softSkills.forEach(skill => {
        skillsHTML += `<li>${skill}</li>`;
    });
    skillsHTML += `</ul></div></div>`;
    skillsSection.innerHTML = skillsHTML;
}

function populateProjects() {
    const projectsSection = document.getElementById('projects');
    let projectsHTML = `<h2>Projects</h2><div class="projects-container">`;
    profileData.projects.forEach(project => {
        projectsHTML += `<div class="project-item">
                            <div class="project-header">
                                <i class="fas ${project.icon}"></i>
                                <h3>${project.title}</h3>
                            </div>
                            <p>${project.description}</p>
                        </div>`;
    });
    projectsHTML += `</div>`;
    projectsSection.innerHTML = projectsHTML;
}

function populateActivities() {
    const activitiesSection = document.getElementById('activities');
    let activitiesHTML = `<h2>Certifications & Extracurricular Activities</h2><div class="certifications-activities-container">`;

    profileData.activities.forEach(activity => {
        activitiesHTML += `
            <div class="activity-item">
                <div class="activity-header">
                    <i class="fas ${activity.icon}"></i>
                    <h3>${activity.title}</h3>
                </div>
                <p>${activity.description}</p>
            </div>`;
    });

    activitiesHTML += `</div>`;
    activitiesSection.innerHTML = activitiesHTML;
}

function populateDegrees() {
    const degreesSection = document.getElementById('degrees');
    let degreesHTML = `<h2>Degrees</h2><ul>`;
    profileData.degrees.forEach(degree => {
        degreesHTML += `<li>${degree}</li>`;
    });
    degreesHTML += `</ul>`;
    degreesSection.innerHTML = degreesHTML;
}

function populateSocialLinks() {
    const socialSection = document.getElementById('social');
    let socialHTML = `<h2>Social Feed</h2><div class="social-container">`;
    profileData.socialLinks.forEach(link => {
        socialHTML += `<a href="${link.url}" target="_blank"><i class="fab fa-${link.platform.toLowerCase()}"></i> ${link.platform}</a>`;
    });
    socialHTML += `</div>`;
    socialSection.innerHTML = socialHTML;
}

function populateContactInfo() {
    const contactSection = document.getElementById('contact');
    contactSection.innerHTML = `<h2>Contact</h2>
                                <p><strong>Email: </strong> ${profileData.contact.email}</p>
                                <p><strong>Phone: </strong>${profileData.contact.phone}</p>`;
}

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Populate all sections
populateSkills();
populateProjects();
populateActivities();
populateDegrees();
populateSocialLinks();
populateContactInfo();
