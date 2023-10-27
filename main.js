document.addEventListener('DOMContentLoaded', function() {
  let counter = document.getElementById('counter');
  let visits = localStorage.getItem('visits');
  
  if (!visits) {
    visits = 1;
    localStorage.setItem('visits', visits);
  } else {
    visits = parseInt(visits) + 1;
    localStorage.setItem('visits', visits);
  }
  
  counter.textContent = `عدد المشاهدات: ${visits}`;
});
