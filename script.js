const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websitenameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// show modal, Focus input
function showModal() {
    modal.classList.add('show-modal');
    websitenameEl.focus();
}

// Modal Event Listeners
modalShow.addEventListener('click', showModal)