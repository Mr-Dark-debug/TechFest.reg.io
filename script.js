$(function() {
    $(".menu-link").click(function() {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(function() {
    $(".main-header-link").click(function() {
        $(".main-header-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});

const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});