 // Dark Mode Toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Preserve Dark Mode on Reload
window.addEventListener('load', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Search Bar Functionality (Basic)
document.querySelector('.search-bar').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Search functionality will be implemented soon!");
});
