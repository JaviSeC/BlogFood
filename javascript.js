function loadContent(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', page + '.html', true);
    xhttp.send();
}
// Manejo de eventos de clic en los enlaces de navegación
document.addEventListener('DOMContentLoaded', function () {
    let navLinks = document.querySelectorAll('nav ul a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            let page = this.getAttribute('href').substring(1);
            loadContent(page);
        });
    }
});

