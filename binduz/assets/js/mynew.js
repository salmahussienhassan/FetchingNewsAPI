
var httpclient=new XMLHttpRequest();
httpclient.open("get","https://newsapi.org/v2/everything?q=Apple&from=2022-12-21&sortBy=popularity&apiKey=69a9a718b53d4398b4869125c0e48fd1")
httpclient.send()

var responsebody={}
var articles=[]

var mainarticle=document.querySelector("#mainarticle")
var recentnewscontainer=document.querySelector("#recentnewscontainer")
var submainarticles=document.querySelector("#submainarticles")

httpclient.addEventListener('readystatechange',function()
{
    if(httpclient.readyState==4)
    {
        responsebody=JSON.parse(httpclient.response)
        articles=responsebody.articles
       showarticle1()
       showarticle2()
       showarticle3()
        
    }
})
var maincontainer=''
var subcontainer=''
var recentcontainer=''

var articlecontainer=''


function showarticle1()
{

    
        maincontainer+=`
        <div class=" col-lg-9">
        <div class="binduz-er-editors-pack-thumb">
            <img src="${articles[0].urlToImage}" alt="">
        </div>
    </div>



    <div class=" col-lg-3" >
        <div class="binduz-er-editors-pack-content">
            <div class="binduz-er-meta-item">
                <div class="binduz-er-meta-categories">
                    <a href="#">Technology</a>
                </div>
                <div class="binduz-er-meta-date">
                    <span><i class="fal fa-calendar-alt"></i> ${articles[0].publishedAt}</span>
                </div>
            </div>
            <h4 class="binduz-er-title"><a href="#">${articles[0].title}</a></h4>
            <div class="binduz-er-meta-author">
                <div class="binduz-er-author">
                    <img src="assets/images/user-2.png" alt="">
                    <span>By <span>${articles[0].author}</span></span>
                </div>
            </div>
        </div>
    </div>
        `
    
        mainarticle.innerHTML=maincontainer
}

function showarticle2(){
for(var i=1;i<5;i++)
{
    subcontainer+=`
    <div class=" col-lg-3 col-md-6">
                        <div class="binduz-er-video-post binduz-er-recently-viewed-item">
                            <div class="binduz-er-latest-news-item">
                                <div class="binduz-er-thumb">
                                    <img src="${articles[i].urlToImage}" alt="">
                                </div>
                                <div class="binduz-er-content">
                                    <div class="binduz-er-meta-item">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt}</span>
                                        </div>
                                    </div>
                                    <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
                                    <div class="binduz-er-meta-author">
                                        <span>By <span>${articles[i].author}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `
}
submainarticles.innerHTML=subcontainer
}

function showarticle3(){
    for(var i=5;i<articles.length;i++)
{
    recentcontainer+=`
    <div class="binduz-er-recent-news-item mb-20">
    <div class="binduz-er-thumb">
        <img src="${articles[i].urlToImage}" alt="">
    </div>
    <div class="binduz-er-content">
        <div class="binduz-er-meta-item">
            <div class="binduz-er-meta-categories">
                <a href="#">Technology</a>
            </div>
            <div class="binduz-er-meta-date">
                <span><i class="fal fa-calendar-alt"></i>${articles[i].publishedAt}</span>
            </div>
        </div>
        <h5 class="binduz-er-title"><a href="#">${articles[i].title}</a></h5>
        <p>${articles[i].content}</p>
    </div>
</div>
    `
}
recentnewscontainer.innerHTML=recentcontainer
}