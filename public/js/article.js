 function at() {
     var m = Math.floor(Math.random() * 20);
     fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=37ec4f203d6041c89304425c3cb6bccb').then(response => response.json())
         .then(data => {
             console.log(data);
             document.getElementById('n1').innerHTML = `<h3>${data.articles[m].title}</h3>`
             document.getElementById('n2').innerHTML = `<h4>${data.articles[m].description}</h4><a class="btn btn-primary" href="${data.articles[m].url}" target="blank">Read Full Article</a><br>`

             console.log(m);
         })
 }
 at();