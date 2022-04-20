console.log("createRes.js has been loaded!");

const form = document.querySelector("#create-res");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.querySelector("#create-res-title");
    const from = document.querySelector("#create-res-about");

    const result = await fetch("/api/createRes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            title: title.value,
            about: from.value
        })
    });

    const resjson = await result.json();
    if (resjson.status === "ok") {
        alert(resjson.data);
        title.value = "";
        from.value = ""; 
    } else {
        alert(resjson.error);
    }
});