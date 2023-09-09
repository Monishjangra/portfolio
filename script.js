
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

        // Open the sidebar when the "Open Sidebar" button is clicked
        function openMenu() {
            sideMenu.style.top = '0';
            // content.style.marginLeft = '';
        };

        // Close the sidebar when the close button is clicked
        function closeMenu() {
          sideMenu.style.top = '-200px';
            // content.style.marginLeft = '0';
        };
