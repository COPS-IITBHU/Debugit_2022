console.log("login.js successfully loaded");

const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const uname = document.querySelector("#uname");
    const pwd = document.querySelector("#pwd");
    if (!uname.value.includes(" ") && !pwd.value.includes(" ")) {
        const data = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uname: uname.value,
                pwd: pwd.value
            })
        });

        const resjson = await data.json(); 
        console.log(resjson);
        if (resjson.status === "ok") {
            console.log("Got the token", resjson.data);
            alert("login successful");
            window.location.href = "/";
        } else {
            alert(resjson.error);
        }

        console.log("fetch done");
        // const resJson = await data.json();

        uname.value = "";
        pwd.value = "";
    } else {
        alert("There must not be a space in your username/password");
    } 
});