import {imagesB} from './Projects.js';
import {imagesS} from './Projects.js';

export default function ProjectPage(param){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('project')}
        <div>
            <h1 style="font-size:35px;">${param.title}</h1>
            <h3>${param.subtitle}</h3>
            <hr>
        </div>
        <section>
            ${imagesS(param.teasers)}
            ${imagesB(param.teaserb)}
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
