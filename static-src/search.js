console.log("search.js is loaded!");

const form = document.querySelector("#body");
const searchBody = document.querySelector("#search-body");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const searchField = document.querySelector("#search-title");
    // const searchedVal = searchField.value.replaceAll(" ", "");

    const results = await fetch(`/api/search/${searchField.value}`);
    const resjson = await results.json();

    if (resjson.status === "ok") {
        console.log(resjson.data);

        const results = JSON.parse(resjson.data);
        showValues(results, searchBody);
    } else if (resjson.status === "not-found") {
        searchBody.innerHTML = "";
        searchBody.innerText = "No results found";
    } else if (resjson.status === "Error") {
        alert(`Error: ${resjson.error}`);
    }
});