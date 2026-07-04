document.addEventListener("DOMContentLoaded", () => {
    const entries = document.querySelectorAll(".entry");

    let mainRank = 1;
    let ratedRank = 1;

    entries.forEach((entry) => {
        const mainRankElement = entry.querySelector(".main-rank");
        const subRank = entry.querySelector(".sub-rank");

        const status = subRank.dataset.status;

        if (status === "unratedall") {
            mainRankElement.textContent = "-";
        } else {
            mainRankElement.textContent = `#${mainRank}`;
            mainRank++;
        }

        if (status === "rated") {
            subRank.textContent = `#${ratedRank}`;
            ratedRank++;
        } else if (status === "unrated" || status === "unratedall") {
            subRank.textContent = "Unrated(All)";
        } else if (status === "challenge") {
            subRank.textContent = "Challenge";
        }
    });
});
