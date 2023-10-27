document.addEventListener('DOMContentLoaded', function() {
  let counter = document.getElementById('counter');
  let previousVisits = parseInt(getCookie('visits')) || 0;
  let currentVisits = previousVisits + 1;
  let totalVisits = parseInt(getCookie('totalVisits')) || 0;
  totalVisits += currentVisits - previousVisits;
  setCookie('visits', currentVisits.toString(), 365);
  setCookie('totalVisits', totalVisits.toString(), 365);
  counter.textContent = `Current views: ${currentVisits} - Previous views: ${previousVisits} - Total views: ${totalVisits}`;
});

function getCookie(name) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}