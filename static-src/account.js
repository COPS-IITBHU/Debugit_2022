console.log("account.js loaded successfully");
const myPostsDiv = document.querySelector("#my-posts");

async function displayAccountDetails() {
    const authToken = document.cookie.split("=")[1];
    const infoToken = authToken.split(".")[1];
    const infoObj = JSON.parse(atob(infoToken));

    const myAccountDiv = document.querySelector("#my-account");
    myAccountDiv.innerText = `Welcome, ${infoObj.uname}`;
}

async function displayMyPosts() {
    const results = await fetch("/api/mine");
    const resjson = await results.json();

    if (resjson.status === "ok") {
        console.log(resjson.data);

        const results = JSON.parse(resjson.data);
        showValues(results, myPostsDiv);
    } else if (resjson.status === "not-found") {
        myPostsDiv.innerHTML = "";
        myPostsDiv.innerText = "You haven't posted anything yet";
    } else if (resjson.status === "Error") {
        alert(`Error: ${resjson.error}`);
    }
}

const myPostsToggle = document.querySelector("#my-posts-toggle");
myPostsToggle.addEventListener("click", async () => {
    myPostsDiv.classList.toggle("opacity-0");
    myPostsDiv.classList.toggle("h-0");
});

displayAccountDetails();
displayMyPosts();