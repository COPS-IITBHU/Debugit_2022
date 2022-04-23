console.log("registration.js successfully loaded");

const form = document.querySelector("#reg-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const uname = document.querySelector("#uname");
    const pwd = document.querySelector("#pwd");

    if (!uname.value.includes(" ") && !pwd.value.includes(" ")) {
        const data = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uname: uname.value,
                pwd: pwd.value
            })
        });

        uname.value = "";
        pwd.value = "";
        const resjson = await data.json();
        console.log(resjson);

        if (resjson.code === "Error") {
            alert("Username already exists");
        } else if (resjson.code === "ok") {
            alert("user registered successfully");     
        }
        console.log("fetch done");
        // const resJson = await data.json();
    } else {
        alert("There must not be a space in your username/password");
    }
    
});