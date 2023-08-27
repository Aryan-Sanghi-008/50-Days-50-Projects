let changetext = document.querySelector(".message");
let clickbtn = document.querySelector(".click-btn");

clickbtn.addEventListener("click", async function() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const res = await fetch("https://icanhazdadjoke.com", config)
    const data = await res.json()

    changetext.innerHTML = data.joke
});