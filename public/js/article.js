 function at() {
     var m = Math.floor(Math.random() * 68);
     fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json').then(response => response.json())
         .then(data => {
             console.log(data);
             document.getElementById('n1').innerHTML = `<h3>${data.articles[m].title}</h3>`
             document.getElementById('n2').innerHTML = `<h4>${data.articles[m].description}</h4><a class="btn btn-primary" href="${data.articles[m].url}" target="blank">Read Full Article</a><br>`

             console.log(m);
         })
 }
 at();