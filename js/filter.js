const filterButton = document.getElementById("filterButton");
const filterMenu = document.getElementById("filterMenu");
const searchBox = document.getElementById("searchBox");
const filterOptions = document.querySelectorAll(".filter-option");

let currentFilter = "all";

filterButton.addEventListener("click", (e) => {
    e.stopPropagation();
    filterMenu.classList.toggle("show");
});

document.addEventListener("click", () => {
    filterMenu.classList.remove("show");
});

filterMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});

filterOptions.forEach(option => {

    option.addEventListener("click", () => {

        currentFilter = option.dataset.filter;
        
        filterOptions.forEach(o => {

            const text =
                o.dataset.filter.charAt(0).toUpperCase() +
                o.dataset.filter.slice(1);

            if (o.dataset.filter === currentFilter) {
                o.textContent = "✓ " + text;
            } else {
                o.textContent = text;
            }

        });

        updateList();

        filterMenu.classList.remove("show");

    });

});

searchBox.addEventListener("input", updateList);

function updateList() {

    const keyword = searchBox.value.trim().toLowerCase();

    const entries = document.querySelectorAll(".entry");

    entries.forEach(entry => {

        const level =
            entry.querySelector(".name").textContent.toLowerCase();

        const host =
            entry.querySelector(".host").textContent.toLowerCase();

        const status =
            entry.querySelector(".sub-rank").dataset.status;

        const searchMatch =
            level.includes(keyword) ||
            host.includes(keyword);

        const filterMatch =
            currentFilter === "all" ||
            status === currentFilter;

        entry.style.display =
            (searchMatch && filterMatch) ? "flex" : "none";

    });

}

updateList();
