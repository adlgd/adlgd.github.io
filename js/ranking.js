const entries = document.querySelectorAll(".entry");

let ratedRank = 1;

entries.forEach((entry, index) => {
    const mainRank = entry.querySelector(".main-rank");
    const subRank = entry.querySelector(".sub-rank");
    
    mainRank.textContent = `#${index + 1}`;
    
    const status = subRank.dataset.status;
    
    if(status === "rated"){
        subRank.textContent = `#${ratedRank}`;
        ratedRank++;
    }
});
