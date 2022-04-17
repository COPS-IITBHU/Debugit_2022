console.log("registration.js successfully loaded");

const form = document.querySelector("#reg-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const uname = document.querySelector("#uname").value;
    const pwd = document.querySelector("#pwd").value;

    const data = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            uname,
            pwd
        })
    });
    const resJson = await data.json();
    
});