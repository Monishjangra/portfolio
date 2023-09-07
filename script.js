
var tabLinks = document.getElementsByClassName("tab-link");
      var tabContents = document.getElementsByClassName("tab-content");
      function opentab(tabName) {
        for (tabLink of tabLinks) {
          tabLink.classList.remove("active");
        }
        for (tabContent of tabContents) {
          tabContent.classList.remove("active");
          event.currentTarget.classList.add("active");
          document.getElementById(tabName).classList.add("active");
        }
      }

// Get references to the toggle button, close button, popup container, and overlay
const togglePopupBtn = document.getElementById('togglePopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupContainer = document.getElementById('popupContainer');
const overlay = document.createElement('div');
overlay.className = 'overlay';

function togglePopup() {
    if (popupContainer.style.display === 'block') {
        closePopup();
    } else {
        openPopup();
    }
}

function openPopup() {
    popupContainer.style.display = 'block';
    overlay.style.display = 'block';
    document.body.appendChild(overlay);
}

function closePopup() {
    popupContainer.style.display = 'none';
    overlay.style.display = 'none';
    document.body.removeChild(overlay);
}

togglePopupBtn.addEventListener('click', togglePopup);
closePopupBtn.addEventListener('click', closePopup);


// var typedText = document.getElementById("typedText");
// var typedItems = ["Designer", "Developer"];
// var currentItemIndex = 0;
// var currentTextIndex = 0;
// var isTyping = true;

// function animateText() {
//     var currentText = typedItems[currentItemIndex];
    
//     if (isTyping) {
//         typedText.textContent = currentText.slice(0, currentTextIndex);
//         currentTextIndex++;

//         if (currentTextIndex > currentText.length) {
//             isTyping = false;
//             setTimeout(function () {
//                 isTyping = true;
//                 currentTextIndex = 0;
//                 currentItemIndex = (currentItemIndex + 1) % typedItems.length;
//             }, 1000); // Pause for 1 second after typing
//         }
//     } else {
//         typedText.textContent = currentText.slice(0, currentTextIndex);
//         currentTextIndex--;

//         if (currentTextIndex < 0) {
//             isTyping = true;
//             setTimeout(function () {
//                 isTyping = false;
//             }, 1000); // Pause for 1 second after erasing
//         }
//     }
// }

// setInterval(animateText, 100);
