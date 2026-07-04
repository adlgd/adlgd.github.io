const filterButton = document.getElementById("filterButton");
const filterMenu = document.getElementById("filterMenu");

filterButton.onclick = () => {
    filterMenu.classList.toggle("show");
};

const searchBox = document.getElementById("searchBox");
const radios = document.querySelectorAll("input[name=status]");

function updateList(){

    const search = searchBox.value.toLowerCase();

    const status =
        document.querySelector("input[name=status]:checked").value;

    document.querySelectorAll(".entry").forEach(entry=>{

        const level =
            entry.querySelector(".name").textContent.toLowerCase();

        const host =
            entry.querySelector(".host").textContent.toLowerCase();

        const s =
            entry.querySelector(".sub-rank").dataset.status;

        const searchMatch =
            level.includes(search) || host.includes(search);

        const statusMatch =
            status==="all" || status===s;

        entry.style.display =
            searchMatch && statusMatch ? "flex" : "none";

    });

}

searchBox.addEventListener("input",updateList);

radios.forEach(r=>{

    r.addEventListener("change",updateList);

});
