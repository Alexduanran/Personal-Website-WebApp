fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const contain = urlParams.has('project');
    if (contain) {
        project = urlParams.get('project');
        for (x of data.projects) {
            if (x.id == project) {
                renderProjectPage(x);
            }
        }
    }
    else {
        renderContainerPage(data);
    }
});

function renderContainerPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderHeader(data.about)}
        ${renderNavbar('main', Object.keys(data))}
        <div class="main">
            ${renderAbout(data.about)}
            ${renderNews(data.news)}
            ${renderProjects(data.projects)}
        </div>
    `;
}

function renderProjectPage(param){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('project')}
        <div>
            <h1 style="font-size:35px;">${param.title}</h1>
            <h3>${param.subtitle}</h3>
            <hr>
        </div>
        <section>
            ${renderImagesS(param.teasers)}
            ${renderImagesB(param.teaserb)}
            <div>
                ${param.authors}<br>
            </div>
            <div>
                ${param.source}
            </div>
            <div>
                <p>
                    ${param.description}
                </p>
            </div>
            <div>
                ${renderMaterials(param.materials)}
            </div>
        </section>
        <footer>Copyright © 2020 Anran Du</footer>
    `;
}

function renderMaterials(param){
    return param.map(d=> `
        <span><a href=${d.path} target="_blank">${d.label}</a></span>
    `).join('<span>|<span>');
}

function renderNavbar(page){
    return `
    <nav>
    ${page==='project'? (
        `
        <ul>
            <li>
                <a href="index.html">Go Back</a>
            </li>
        </ul>
        `
    ):(
        `
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
        `
    )}
    </nav>`;
}

function renderHeader(header){
    return `
    <div class="fixed">
        <div class="blurry"></div>
        <h1 class="name" style="font-size: 280%;">${header.name}</h1>
        <hr style="margin-left: -1000px">
    </div>
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
                <img src="${about.photo}" alt="self portrait" width="60%" height="100%">
            </div>
            <div class="col-6">
                <p>
                    ${about.description}
                </p>
            </div>
        </div>
        <div>
            <p>
                <strong>${about.title}</strong><br>
                <strong>Major:</strong> ${about.major}<br>
                <strong>Minor:</strong> ${about.minor}<br>
                <strong>E-mail:</strong> ${about.email}<br>
                ${about.address}
                <a href="${about.github}" target="_blank">
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
        ${renderNewsItems(news)}
    </div>`;
}

function renderNewsItems(news){
    return news.map(d=>`
        <div class="row">
            <div class="col-6" style="line-height:2;">
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
    </div>
    <div></div>
    <footer>Copyright © 2020 Anran Du</footer>`;
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
                ${renderImagesS(d.teasers)}
                ${renderImagesB(d.teaserb)}
            </div>
        </div>
	`).join('');
}

function renderImagesS(image){
    return image.map(d=>`
        <img src=${d} style="width:auto; max-width:150px;">
    `);
}

function renderImagesB(image){
    return image.map(d=>`
        <img src=${d} style="width:auto; max-width:400px;">
    `);
}