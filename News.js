export default function News(news){
    return `
    <a class="news" href="#news">
        News
    </a>
    <div class="search">
        <input type="search" name='news' placeholder="Search News">
    </div>
    <!-- we will add a filter interface here in the next lab -->
    <div id="news" style="padding-top: 130px; margin-top: -130px; grid-row:2/9;">
        <div class="news-list">
            ${NewsItems(news)}
        </div>
    </div>`;
}

export function NewsItems(news){
    return news.map(d=>`
        <div class="row">
            <div class="col-6" style="line-height:2;">
                ${d.title}
            </div>
            <div class="col-6 align-right">
                ${d.date}
            </div>
        </div>
    `).join('');
}