document.addEventListener("DOMContentLoaded", (event) => {
    let progressBar = document.getElementById("progress-bar");
    let width = 0;
    let progressInterval;

    function updateProgressBar() {
      if (width >= 100) {
        clearInterval(progressInterval);
        redirectToProfile();
      } else {
        width++;
        progressBar.style.width = width + '%';
      }
    }

    function redirectToProfile() {
      window.location.href = 'home.html';
    }
    let searchText = new Typed("#searchText", {
      strings: ["Koyal Borbora"],
      typeSpeed: 80,
      attr: "placeholder",
      onComplete: function() {
        progressInterval = setInterval(updateProgressBar, 30); 
}});
});

  
