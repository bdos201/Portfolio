const sidebar_btn = document.querySelector('.sidebar-btn');

const projects = document.querySelector('.projects');

const project = document.querySelectorAll('.project');

const sidebar_title = document.querySelector('.sidebar-title');

const sidebar = document.querySelector('.sidebar');

const sidebar_arrow = document.querySelector('.sidebar-arrow');

const transparent_arrow = document.querySelector('.transparent-arrow');

const hero = document.querySelector('.hero');

sidebar_btn.addEventListener('click', function () {
    projects.classList.toggle('open');
    sidebar_title.classList.toggle('open');
    sidebar.classList.toggle('open');
    sidebar_arrow.classList.toggle('open');
    transparent_arrow.classList.toggle('open');
    hero.classList.toggle('open');
    
    //runs through all elements labeled project since there are multiple
    
    for (const pro of project) {
        pro.classList.toggle('open');
    };

});

sidebar_btn.addEventListener('mouseover', function () {
     sidebar_arrow.classList.toggle('hover');
});

sidebar_btn.addEventListener('mouseout', function () {
    sidebar_arrow.classList.toggle('hover');
});