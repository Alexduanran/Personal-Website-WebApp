import ContainerPage from './ContainerPage.js';
import ProjectPage from './ProjectPage.js';

fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("project") === null) {
      ContainerPage(data);
    } else {
      let project = data.projects.find(d => d.id === params.get("project"));
      ProjectPage(project);
    }
});
