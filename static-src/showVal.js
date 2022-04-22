function showValues(results, displayBody) {
    displayBody.innerHTML = "";
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

        displayBody.appendChild(newDiv);
    });
}