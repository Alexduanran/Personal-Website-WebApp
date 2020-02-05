import Header from './Header.js';
import NavBar from './NavBar.js';
import About from './About.js';
import News from './News.js';
import Projects from './Projects.js';
import Interactions from './Interactions.js';

export default function ContainerPage(data){
    document.querySelector('.container').innerHTML = `
        ${Header(data.about)}
        ${NavBar('main', Object.keys(data))}
        <div class="main">
            ${About(data.about)}
            ${News(data.news)}
            ${Projects(data.projects)}
        </div>
    `;
    Interactions(data);
}