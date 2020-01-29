fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
	// render HTML here
});

function renderNavbar(page){
    return `
    <nav>
        <ul class="relative">
            <li>
                <a href="#about">About</a>
            </li>
            <li>|</li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>|</li>
            <li>
                <a href="#projects">Projects</a>
            </li>
        </ul><hr>
    </nav>
    `;
}

function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
}

function renderAbout(about){
    return `
    <a class="about" href="#about">
            About
    </a>
    <!-- we will add a filter interface here in the next lab -->
    <div id="about" style="padding-top: 130px; margin-top: -130px;">
        <div class="row">
            <div class="col-6 profile-image">
                <img src="${d.photo}" alt="self portrait" width="60%" height="100%">
            </div>
            <div class="col-6">
                <p>
                    Hi, welcome to my webpage! I am currently a junior at Boston College with a major in Computer Science and a minor in Finance. I was born in Guangzhou, China, and I came to the U.S. when I was 13 years old. This  will mainly update my resent news and showcasing the various projects I have done in college. Feel free to reach out to me via my email!
                </p>
            </div>
        </div>
        <div>
            <p>
                <strong>${d.title}</strong><br>
                <strong>Major:</strong> Computer Science B.S.<br>
                <strong>Minor:</strong> Finance<br>
                <strong>E-mail:</strong> duab at bc.edu<br>
                110 St. Thomas More Rd., Chestnut Hill, 02467<br>
                Stayer Hall 311 Boston College<br>
                <a href="https://github.com/alexduanran" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </p>
        </div>
    </div>`;
}

function renderNews(news){
    return `
    <a class="news" href="#news">
            News
        </a>
    <!-- we will add a filter interface here in the next lab -->
    <div id="news" style="padding-top: 130px; margin-top: -130px;">
        ${renderNewsItems(projects)}
    </div>`;
}

function renderNewsItems(projects){
    return projects.map(d=>`
        <div class="row">
            <div class="col-6">
                ${d.title}
            </div>
            <div class="col-6 align-right">
                ${d.date}
            </div>
        </div>
    `).join('');
}

function renderProjects(projects){
    return `
    <a class="projects" href="#projects">
        Projects
    </a>
    <!-- we will add a filter interface here in the next lab -->
    <div id="projects" style="padding-top: 130px; margin-top: -130px;">
        ${renderProjectItems(projects)}
    </div>`;
}
 
function renderProjectItems(projects){
    return projects.map(d=>`
        <div>
            <div><!--Project Info-->
                <div>
                    <a href="?project=${d.id}"><strong>${d.title}</strong></a>
                </div>
                <div>
                    ${d.authors}<br>
                </div>
                <div>
                    ${d.tag}<br>
                </div>
            </div>
            <div><!--Project Teaser-->
                <img src="${d.teaser}" width="100%">
                <!--
                <img src="../images/eagle-exchange-homepage.png" alt="eagle exchange homepage"width="150px">
                <img src="../images/eagle-exchange-items-page.png" alt="eagle exchange items indices" width="150px">
                <img src="../images/eagle-exchange-item-description.png" alt="eagle exchange item description" width="150px">
                -->
            </div>
        </div>
	`).join('');
}



function renderPage(data){
    document.querySelector('.container').innerHTML = renderProjects(data.projects);
}

function renderProjects(projects){
    return projects.map(d=>`
        <div class="row">
            <div class="col">
                <div class="title"><a href="?project=${d.id}"> ${d.title} </a></div>
            </div>
            <div class="col">
                <img src="${d.teaser}" width="100%"/>
            </div>
        </div>
    `);
}