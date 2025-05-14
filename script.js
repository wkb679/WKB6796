// 推文数据
const tweets = [
    {
        id: 1,
        title: "我的第一篇博客文章",
        content: "今天终于搭建好了我的个人博客网站！这是一个使用纯HTML、CSS和JavaScript构建的静态网站。未来我会在这里分享我的技术学习心得和生活感悟。欢迎常来看看！",
        date: "2023-05-15",
        tags: ["博客", "技术"]
    },
    // 可以添加更多推文
];

// 加载推文
function loadTweets() {
    const tweetsContainer = document.querySelector('.tweets');
    
    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.className = 'tweet';
        tweetElement.innerHTML = `
            <h3>${tweet.title}</h3>
            <p class="date">${tweet.date}</p>
            <p>${tweet.content}</p>
            <div class="tags">${tweet.tags.map(tag => `<span class="tag">#${tag}</span>`).join(' ')}</div>
        `;
        tweetsContainer.appendChild(tweetElement);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadTweets();
    
    // 平滑滚动
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});