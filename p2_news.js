let source='';
let key='e3675187b61c480b9ae6842776b61bda';
let newsAccordion = document.getElementById('newsAccordion');
const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                  ${element["title"]}

                                  
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> <img src=${element["urlToImage"]} alt="image not found" height=300 width=300> <br> <p>${index}</p>${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>
                                  <br> <b> Date of publish:  </b> ${element["publishedAt"].substring(0,10)}</div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()
