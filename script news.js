// grabbing elements start
const loader = document.querySelector(".loader");
const loader_title = document.querySelector("#loader-title");
const main = document.querySelector(".main");
const general_news = document.querySelector("#general-btn");
const business_news = document.querySelector("#business-btn");
const sport_news = document.querySelector("#sport-btn");
const movie_news = document.querySelector("#movie-btn");
const tech_news = document.querySelector("#tech-btn");
const health_news = document.querySelector("#health-btn");
const science_news = document.querySelector("#science-btn");
const to_be_founded = document.querySelector("#newsQuery");
const find_button = document.querySelector("#search-btn");
const founded_news_subtitle = document.querySelector("#news-sub-headline");
const founded_news = document.querySelector("#founded_news");
// grabbing elements end

// Declaring array for news data
var newsDataArr = [];

// API DATA Start
// * differ as per login API key
const API_KEY = "d40c10c8503a4311b9130fdd9b39dd46";
// * differ as per login API key
const HEADLINES_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=10&apiKey=";
const SPORTS_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=";
const ENTERTAINMENT_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=10&apiKey=";
const TECHNOLOGY_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=10&apiKey=";
const HEALTH_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=10&apiKey=";
const SCIENCE_NEWS =
    "https://newsapi.org/v2/top-headlines?country=in&category=science&pageSize=10&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
// API DATA End

// on start of page data
window.onload = function () {
    init();
    loader_title.innerHTML = "Getting Headlines";
    founded_news_subtitle.innerHTML = "<h2>Headlines</h2>";
    fetchHeadlines();
};

// Eventlistener start
general_news.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Getting General news";
    founded_news_subtitle.innerHTML = "<h2>General news</h2>";
    fetchGeneralNews();
});

business_news.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Getting business news";
    founded_news_subtitle.innerHTML = "<h2>Business news</h2>";
    fetchBusinessNews();
});

sport_news.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Getting sport news";
    founded_news_subtitle.innerHTML = "<h2>Sports news</h2>";
    fetchSportsNews();
});

movie_news.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Getting movies news";
    founded_news_subtitle.innerHTML = "<h2>Movies news</h2>";
    fetchEntertainmentNews();
});

tech_news.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Getting Tech news";
    founded_news_subtitle.innerHTML = "<h2>Tech news</h2>";
    fetchTechnologyNews();
});

health_news.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Getting Health news";
    founded_news_subtitle.innerHTML = "<h2>Health news</h2>";
    fetchHealthNews();
});

science_news.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Getting Science news";
    founded_news_subtitle.innerHTML = "<h2>Science news</h2>";
    fetchScienceNews();
});

find_button.addEventListener("click", function () {
    init();
    loader_title.innerHTML = "Finding query news";
    founded_news_subtitle.innerHTML =
        "<h2>Found = " + to_be_founded.value + "</h2>";
    fetchQueryNews();
});

// Eventlistener End

// function start

function init() {
    main.style.display = "none";
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = "none";
        main.style.display = "block";
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 4000);
}

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // ! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};
const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // ! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // ! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // ! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // ! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // ! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};
const fetchHealthNews = async () => {
    const response = await fetch(HEALTH_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};
const fetchScienceNews = async () => {
    const response = await fetch(SCIENCE_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //! if error
        founded_news.innerHTML = "<h1>No News found.</h1>";
        return;
    }

    displayNews();
};

const fetchQueryNews = async () => {
    if (to_be_founded.value == null) return;

    const response = await fetch(
        SEARCH_NEWS + encodeURIComponent(to_be_founded.value) + "&apiKey=" + API_KEY
    );
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //! if error
        founded_news.innerHTML = "<h5>No News found.</h5>";
        return;
    }

    displayNews();
};
// function End

// displaying news data start
function displayNews() {
    founded_news.innerHTML = "";

    newsDataArr.forEach((news) => {
        var date = news.publishedAt.split("T");
        var author = news.author;

        var col = document.createElement("div");
        col.className = "mt-2 mb-2 p-2 container";

        var card = document.createElement("div");
        card.className = "p-1 m-1 row";

        var img = document.createElement("img");
        img.className = "col-4 display";
        img.setAttribute("height", "parentelement");
        img.setAttribute("width", "100px");
        img.src = news.urlToImage;

        var cardBody = document.createElement("span");
        cardBody.className = "col-lg-8 col-md-12";

        var headings = document.createElement("h5");
        headings.className = "card-title headline-style";
        headings.innerHTML = news.title;

        var dateHeading = document.createElement("h6");
        dateHeading.className = "date-style";
        dateHeading.innerHTML = date[0];

        var authorname = document.createElement("h6");
        authorname.className = "date-style";
        authorname.innerHTML = author;

        var detail = document.createElement("p");
        detail.className = "description-style";
        detail.innerHTML = news.description;

        var explore = document.createElement("a");
        explore.className = "btn btn-style";
        explore.setAttribute("target", "_blank");
        explore.href = news.url;
        explore.innerHTML = "Explore more information";

        cardBody.appendChild(headings);
        cardBody.appendChild(authorname);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(detail);
        cardBody.appendChild(explore);

        card.append(img);
        card.append(cardBody);

        col.appendChild(card);

        founded_news.appendChild(col);
    });
}
// displaying news data end