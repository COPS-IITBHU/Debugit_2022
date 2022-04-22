function scrollWin(n) {
    window.scrollBy(0, n);
  }


function scrollto(s,n) {
    const element = document.getElementById(s);
    element.scrollIntoView();
    window.scrollBy(0,n);
  }

  function openNav() {
    document.getElementById("myNav").style.width = "50%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }