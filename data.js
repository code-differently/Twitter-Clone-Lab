let data = [
    {
        name: "Kaleb Burd",
        handle: "@kburd",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  -Kaleb",
        time: "1:40 PM",
        date: "16 Mar 20",
        retweets: 6054,
        likes: 27700,
        image: "https://images.unsplash.com/photo-1596550190729-1d9225e788dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80 "
    },
    {
        name: "Vlad Putin",
        handle: "@noBotHere",
        message: "Howdy all.....",
        time: "4:51 PM",
        date: "22 Jun 20",
        retweets: 4,
        likes: 27,
        image: "https://images.unsplash.com/photo-1611934786226-7caa0c3654a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80 "
    },
    {
        name: "Jack Dorsey",
        handle: "@daBoss",
        message: "Twiter is the best social media on the internet, Zuckerberg is inferior",
        time: "4:51 PM",
        date: "22 Jun 20",
        retweets: 4,
        likes: 27,
        image: "https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80 "
    },
    {
        name: "Leon Jenkins",
        handle: "@leyawn",
        message: "Cool place.... looks uninhaited....",
        time: "1:00 AM",
        date: "1 May 89",
        retweets: 123,
        likes: 27334,
        image: "https://images.unsplash.com/photo-1596550190729-1d9225e788dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80 "
    },
    {
        name: "Mark Zuck",
        handle: "@zuckman",
        message: "This is hot garbage",
        time: "3:59 PM",
        date: "24 Dec 19",
        retweets: 0,
        likes: 0,
        image: "https://images.unsplash.com/photo-1595287137144-cf60a87f39d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80 "
    }
]

for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let image = data[i].image;
    let handle = data[i].handle;
    let message = data[i].message;
    let time = data[i].time;
    let date = data[i].date;
    let retweets = data[i].retweets;
    let likes = data[i].likes;
    let tweet = document.createElement('div');
    tweet.classList.add('tweet');name
    tweet.innerHTML =
`<div class="tweet__bio">
<img src=${image} class="tweet__bio__picture"></div>
<div class="tweet__bio__name">
<p>${name}</p>
<p class="at-name">${handle}</p>
</div>
</div>
<div class="tweet__content">
${message}
</div>
<div class="tweet__time-stamp">
<p class="at-name">${time} &#9679;</p>
<p class="at-name">${date} &#9679;</p>
<p class="blue-link">Twitter for iPhone</p>
</div>
<div class="tweet__social">
<p> <strong>${retweets}</strong><div class="at-name">Retweets</div></p>
<p><strong>${likes}</strong><div class="at-name">Likes</div></p>
</div>`
document.getElementById('post').appendChild(tweet);
}
