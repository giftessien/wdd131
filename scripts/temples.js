
// Display current year
const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

// Display last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Temple filtering
const filterLinks = document.querySelectorAll("#navigation a");
const temples = document.querySelectorAll(".temple-grid figure");

filterLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const category = this.dataset.filter;

        temples.forEach(temple => {
            const showTemple =
                category === "all" ||
                temple.classList.contains(category);

            temple.style.display = showTemple ? "block" : "none";
        });

        // Close mobile navigation after selection
        navigation.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});
