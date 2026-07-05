document.addEventListener("DOMContentLoaded", () => {
    const entries = document.querySelectorAll(".entry");

    let mainRank = 1;
    let ratedRank = 1;
    let unratedRank = 1;
    let challengeRank = 1;

    entries.forEach((entry) => {
        const mainRankElement = entry.querySelector(".main-rank");
        const subRank = entry.querySelector(".sub-rank");

        const status = subRank.dataset.status;

        if (status === "unratedother") {
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
                subRank.textContent = `UR #${unratedRank}`;
                unratedRank++;
                break;
    
            case "unratedother":
                subRank.textContent = "UR #-";
                break;
    
            case "challenge":
                subRank.textContent = `Chall #${challengeRank}`;
                challengeRank++;
                break;

            default:
                subRank.textContent = "?";
                break;
        }
    });
});
