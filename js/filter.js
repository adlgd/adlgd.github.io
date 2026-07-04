let currentFilter = "all";

const searchBox = document.getElementById("searchBox");
const filterOptions = document.querySelectorAll(".filter-option");

filterOptions.forEach(option => {

    option.addEventListener("click", () => {

        currentFilter = option.dataset.filter;

        filterOptions.forEach(o => {
            const text = o.dataset.filter.charAt(0).toUpperCase() + o.dataset.filter.slice(1);

            if (o.dataset.filter === currentFilter) {
                o.textContent = "✓ " + text;
            } else {
                o.textContent = text;
            }
        });

        updateList();

    });

});

searchBox.addEventListener("input", updateList);

function updateList() {

    const keyword = searchBox.value.toLowerCase();

    const entries = document.querySelectorAll(".entry");

    entries.forEach(entry => {

        const levelName = entry.querySelector(".name").textContent.toLowerCase();
        const host = entry.querySelector(".host").textContent.toLowerCase();

        const status = entry.querySelector(".sub-rank").dataset.status;

        const searchMatch =
            levelName.includes(keyword) ||
            host.includes(keyword);

        const statusMatch =
            currentFilter === "all" ||
            status === currentFilter;

        if (searchMatch && statusMatch) {
            entry.style.display = "flex";
        } else {
            entry.style.display = "none";
        }

    });

}

updateList();
