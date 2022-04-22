console.log("search.js is loaded!");

const form = document.querySelector("#body");
const searchBody = document.querySelector("#search-body");

function showValues(results) {
    results.forEach(value => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("bg-pink-100");
        newDiv.classList.add("p-4");
        newDiv.classList.add("rounded-lg");

        newDiv.innerHTML = `<h3 class="text-center underline underline-offset-4 text-xl"> ${value.title} </h3>
        <br>
        <p> From: <span class="text-center"> ${value.from} </span> </p>
        <br>
        <p class="bg-gradient-to-r from-pink-300 to-purple-300 p-4 rounded-md"> ${value.about} </p>`;

        searchBody.appendChild(newDiv);
    })
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchField = document.querySelector("#search-title");
    // const searchedVal = searchField.value.replaceAll(" ", "");

    const results = await fetch(`/api/search/${searchField.value}`);
    const resjson = await results.json();

    if (resjson.status === "ok") {
        console.log(resjson.data);

        const results = JSON.parse(resjson.data);
        showValues(results);
    } else if (resjson.status === "not-found") {
        searchBody.innerHTML = "";
        searchBody.innerText = "No results found";
    } else if (resjson.status === "Error") {
        alert(`Error: ${resjson.error}`);
    }
});