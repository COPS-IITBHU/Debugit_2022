console.log("createRes.js has been loaded!");

const form = document.querySelector("#create-res");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.querySelector("#create-res-title").value;
    const from = document.querySelector("#create-res-about").value;

    const result = fetch("/api/createRes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            title,
            from
        })
    });
});