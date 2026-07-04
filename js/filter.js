const filter = document.getElementById("statusFilter");

filter.addEventListener("change", function () {
    const mode = this.value;
    const entries = document.querySelectorAll(".entry");

    entries.forEach(entry => {
        const status = entry.querySelector(".sub-rank").dataset.status;

        if (mode === "all" || status === mode) {
            entry.style.display = "flex";
        } else {
            entry.style.display = "none";
        }
    });
});
