export default function Projects(projects){
    return `
    <a class="projects" href="#projects">
        Projects
    </a>
    <div class="filter">
        <label>
            <input type="radio" name="filter" value="all" checked>
            All<br>
        </label>
        <label>
            <input type="radio" name="filter" value="personal">
            Personal<br>
        </label>
        <label>
            <input type="radio" name="filter" value="class">
            Class<br>
        </label>
        <label>
            <input type="radio" name="filter" value="internship">
            Internship<br>
        </label>
    </div>
    <!-- we will add a filter interface here in the next lab -->
    <div class="project-list" id="projects" style="padding-top: 130px; margin-top: -130px; grid-row: 10/17">
        ${ProjectItems(projects)}
    </div>
    <div></div>
    <footer style="grid-column: 2; grid-row:18;">Copyright © 2020 Anran Du</footer>`;
}
 
export function ProjectItems(projects){
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
                ${imagesS(d.teasers)}
                ${imagesB(d.teaserb)}
            </div>
        </div>
	`).join('');
}

export function imagesS(image){
    return image.map(d=>`
        <img src=${d} style="width:auto; max-width:150px;">
    `);
}

export function imagesB(image){
    return image.map(d=>`
        <img src=${d} style="width:auto; max-width:400px;">
    `);
}