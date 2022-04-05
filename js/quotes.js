const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다." ,
        author: "키케로",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다." ,
        author: "파울로 코엘료",
    },
    {
        quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에" ,
        author: "엘사 맥스웰",
    },
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다. " ,
        author: "L.론허바드",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다." ,
        author: "앙드레 말로",
    },
    {
        quote: "1%의 가능성, 그것이 나의 길이다." ,
        author: "나폴레옹",
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다." ,
        author: "괴테",
    },
    {
        quote: "물러나서 조용하게 구하면 배울 수 있는 스승이 많다. 사람은 가는 곳마다 보는 곳마다 모두 스승으로서 배울 것이 많은 법이다." ,
        author: "맹자",
    },
    {
        quote: "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다." ,
        author: "아인슈타인",
    },
    {
        quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더 많이 잃은 것이며, 용기를 잃은 사람은 모든 것을 잃은 것이다." ,
        author: "세르반테스",
    },
    {
        quote: "고난의 시기에 동요하지 않는 것, 이것은 진정 칭찬받을 만한 뛰어난 인물의 증거다." ,
        author: "베토벤",
    },
    {
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다." ,
        author: "발타사르 그라시안",
    },
    {
        quote: "최고에 도달하려면 최저에서 시작하라." ,
        author: "P.시루스",
    },
    {
        quote: "우리는 두려움의 호수에 버티기 위해서 끊임없이 용기의 둑을 쌓아야 한다." ,
        author: "마틴 루터 킹",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;