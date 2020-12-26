const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websitenameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

// show modal, Focus input
function showModal() {
    modal.classList.add('show-modal');
    websitenameEl.focus();
}

// Modal Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));

// Validate Form
function validate(nameValue, urlValue) {
    const expession = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expession);
    if (!nameValue || !urlValue) {
        alert('Plase submit values for both fields.')
        return false
    }
    if (!urlValue.match(regex)) {
        alert('Please provide a valid web adress');
        return false
    }
    // Valid
    return true
}

// Fetch Bookmarks
function fetchBookmarks() {
    // Get bookmarks from localStorage if available
    if (localStorage.getItem('bookmarks')) {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
    } else {
        // Create bookmarks array in localStorage
        bookmarks = [
            {
                name: 'Jaxinto Design',
                url: 'https://jacinto.design'
            },
        ];
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    console.log(bookmarks)
}

// Handle Data from form
function storeBookMark(e) {
    e.preventDefault();
    const nameValue = websitenameEl.value;
    let urlValue = websiteUrlEl.value;
    if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
        urlValue = `https://${urlValue}`; 
    }
    if (!validate(nameValue, urlValue)) {
        return false
    }
    const bookmark = {
        name: nameValue,
        url: urlValue
    };
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
    fetchBookmarks()
    bookmarkForm.reset()
    websitenameEl.focus();
}

// Event Listener
bookmarkForm.addEventListener('submit', storeBookMark);

// On load, Fetch Bookmarks
fetchBookmarks();