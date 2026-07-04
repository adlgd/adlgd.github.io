document.addEventListener("DOMContentLoaded", () => {
    const entries = document.querySelectorAll(".entry");

    let mainRank = 1;
    let ratedRank = 1;
    let unratedRank = 1;

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

        switch (status) {

            case "rated":
                subRank.textContent = `#${ratedRank}`;
                ratedRank++;
                break;
    
            case "unrated":
                subRank.textContent = `Unrated(#${unratedRank})`;
                unratedRank++;
                break;
    
            case "unratedall":
                subRank.textContent = "Unrated(-)";
                break;
    
            case "challenge":
                subRank.textContent = "Challenge";
                break;

            default:
                subRank.textContent = "?";
                break;
        }
    });
});
