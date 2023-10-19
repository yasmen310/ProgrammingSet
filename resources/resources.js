const roadmap=document.querySelector('.RoadmapBTN');
const courses=document.querySelector('.CoursesBTN');
const projects=document.querySelector('.ProjectsBTN');
const tasks=document.querySelector('.TasksBTN');
const roadmapClass=document.querySelector('.roadmap');
const coursesClass=document.querySelector('.courses');
const projectsClass=document.querySelector('.Projects');
const tasksClass=document.querySelector('.tasks');


roadmap.addEventListener('click',()=>{
     coursesClass.classList.add('hiddenClass');
    tasksClass.classList.add('hiddenClass');
    projectsClass.classList.add('hiddenClass');
   roadmapClass.classList.remove('hiddenClass');



});
courses.addEventListener('click',()=>{
    roadmapClass.classList.add('hiddenClass');
    tasksClass.classList.add('hiddenClass');
    projectsClass.classList.add('hiddenClass');
    coursesClass.classList.remove('hiddenClass');
    
});
projects.addEventListener('click',()=>{
      roadmapClass.classList.add('hiddenClass');
    tasksClass.classList.add('hiddenClass');
    coursesClass.classList.add('hiddenClass');
    projectsClass.classList.remove('hiddenClass');
    
});
tasks.addEventListener('click',()=>{
      roadmapClass.classList.add('hiddenClass');
    coursesClass.classList.add('hiddenClass');
    projectsClass.classList.add('hiddenClass');
     tasksClass.classList.remove('hiddenClass');
    
});
