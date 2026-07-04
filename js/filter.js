const filterButton = document.getElementById("filterButton");
const filterMenu = document.getElementById("filterMenu");
const searchBox = document.getElementById("searchBox");
const ratedCheck = document.getElementById("ratedCheck");
const unratedCheck = document.getElementById("unratedCheck");
const unratedallCheck = document.getElementById("unratedallCheck");

filterButton.addEventListener("click",(e)=>{
    e.stopPropagation();

    filterMenu.classList.toggle("show");
});

document.addEventListener("click",()=>{
    filterMenu.classList.remove("show");
});

filterMenu.addEventListener("click",(e)=>{
    e.stopPropagation();
});

searchBox.addEventListener("input",updateList);

ratedCheck.addEventListener("change", handleCheckChange);
unratedCheck.addEventListener("change", handleCheckChange);

function handleCheckChange() {

    if (!ratedCheck.checked && !unratedCheck.checked) {
        ratedCheck.checked = true;
        unratedCheck.checked = true;
    }

    updateList();
}

function updateList(){

    const keyword=searchBox.value.toLowerCase();

    document.querySelectorAll(".entry").forEach(entry=>{

        const level=
            entry.querySelector(".name").textContent.toLowerCase();

        const host=
            entry.querySelector(".host").textContent.toLowerCase();

        const status=
            entry.querySelector(".sub-rank").dataset.status;

        const searchMatch=
            level.includes(keyword) ||
            host.includes(keyword);

        let statusMatch=false;

        if(status==="rated" && ratedCheck.checked)
            statusMatch=true;

        if(status==="unrated" && unratedCheck.checked)
            statusMatch=true;

        if(status==="unratedall" && unratedallCheck.checked)
            statusMatch=true;

        entry.style.display=
            (searchMatch && statusMatch)
            ? "flex"
            : "none";

    });

}

updateList();
