// remove the actual element
var modalElement = document.getElementById("advocate-modal");
modalElement.parentNode.removeChild(modalElement);

// remove the css style that prevents scrolling
var body = document.getElementsByTagName("body")[0];
body.classList.remove("advocate-modal-visible");
