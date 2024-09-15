// const headpatHand = document.getElementById("headpat-hand");
const catCalm = document.getElementById("cat-calm");
const header = document.getElementById("header");
let petCounter = 0;




catCalm.addEventListener("click", () => {
    petCounter = petCounter + 1;
    
    if(petCounter > 5) {
        catCalm.setAttribute("src", "cat-angry.jpg");
        header.innerHTML = "SEE?";

        setTimeout(() => {
            catCalm.setAttribute("src", "cat-calm.jpg");
            header.innerHTML = "PLEASE DO NOT CLICK THE CAT 5 TIMES";
            petCounter = 0;
        }, 4000)
    }
});