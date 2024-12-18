
function openTab(evt, tabName) {
    const formContainers = document.querySelectorAll('.form-container');
    const tabLinks = document.querySelectorAll('.tab-link');

    // Hide all forms
    formContainers.forEach(container => container.classList.remove('active'));
    // Remove active class from tabs
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the current tab and add active class
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}