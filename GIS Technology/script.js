function toggleSlider() {
    const slider = document.getElementById('leftSlider');
    slider.classList.toggle('open');
}

function searchContent() {
    const searchBar = document.getElementById('searchBar');
    const sections = document.querySelectorAll('section');
    const query = searchBar.value.toLowerCase();

    sections.forEach(section => {
        if (section.innerText.toLowerCase().includes(query)) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
