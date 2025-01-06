function toggleSidebar() {
  const hiddenTopics = document.getElementById('hiddenTopics');
  hiddenTopics.style.display = hiddenTopics.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', (event) => {
  const hiddenTopics = document.getElementById('hiddenTopics');
  const toggleButton = document.querySelector('.toggle-btn');

  if (
    hiddenTopics.style.display === 'block' &&
    !hiddenTopics.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    hiddenTopics.style.display = 'none';
  }
});

document.querySelectorAll('#hiddenTopics a').forEach(link => {
  link.addEventListener('click', () => {
    const hiddenTopics = document.getElementById('hiddenTopics');
    hiddenTopics.style.display = 'none';
  });
});
function showContent(sectionId){
  const allSections=document.querySelectorAll('.hidden-content');
  allSections.forEach(section =>{
    section.style.display ='none';
  });
  const selectSection =document.getElementById(sectionId);
  if (selectSection){
    selectSection.style.display='block';
  }
}
const button =document.querySelector('.btn');
const container = document.querySelector('.appoint');
  button.addEventListener('click' , function (e){
    e.stopPropagation();
    container.classList.toggle('active');
  });
  document.addEventListener('click' , function(e){
    if (!container.contains(e.target)){
      container.classList.remove('active');
    }
  });



  function toggleJoinUs(){
    const joinLinks= document.getElementById('joinLinks');
    joinLinks.classList.toggle('active');
  }
  function showForm(formType, event) {
    if (event) {
      event.preventDefault();
    }
  
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const joinLinks = document.getElementById('joinLinks');
  
    joinLinks.classList.remove('active');
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
  
    if (formType === 'login') {
      loginForm.classList.add('active');
    } else if (formType === 'signup') {
      signupForm.classList.add('active');
    }
  }
  
  

  
  
