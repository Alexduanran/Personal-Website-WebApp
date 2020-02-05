import {NewsItems} from './News.js';
import {ProjectItems} from './Projects.js';

export default function Interactions(data){
    let input = document.querySelector('input[type=search]');
    input.addEventListener('input', (event)=>{   
        const filtered = data.news.filter(news=>news.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        news.date.toLowerCase().includes(event.target.value.toLowerCase()));
        document.querySelector('.news-list').innerHTML = NewsItems(filtered);
    });

    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', function(event){
        const filtered = data.projects.filter(project=>project.filter.find(d => d.toLowerCase() === event.target.value));
        document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
    }));
}