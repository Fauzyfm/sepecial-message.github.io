const quote = {
    "quote1" : "Semangat Berliana! kamu pasti bisa!",
    "quote2" : "Hidupmu tidak akan pernah bahagia jika terus-menerus menunggu dibahagiakan.",
    "quote3" : "I Love You 3000!",
    "quote4" : "You're my favorite part of my life.",
    "quote5" : "Yuk bisa yuk!",
    "quote6" : "Jangan Sedih terus;(",
    "quote7" : "Gunakan senyummu untuk mengubah dunia, jangan biarkan dunia mengubah senyummu.",
    "quote8" : "Percayalah dengan kemampuan dirimu sendiri. Jangan dengarkan omongan orang yang meragukanmu.",
    "quote9" : "Kekecewaan adalah salah satu cara tuhan dalam berkata, 'Aku punya sesuatu yang lebih baik buatmu'.",
    "quote10" : "Ada banyak hal yang bisa membuatmu bahagia, jangan terlalu fokus pada hal yang membuatmu sedih.",
    "quote11" : "For you, I was a chapter. For me, you were the book.",
    "quote12" : "This life is a choice. Whatever makes you sad, leave it. And, whatever makes you smile, hold it.",
    "quote13" : "Love can sometimes be magic but magic can sometimes just be an illusion.",
    "quote14" : "Life Free!",
    "quote15" : "Don't ever forget me!",
    "quote16" : "",
    "quote17" : "",
    "quote18" : "",
    "quote19" : "",
    "quote20" : "",
    "quote21" : "",
    "quote22" : "",
    "quote23" : "",
    "quote24" : "",
    "quote25" : "",
    "quote26" : "",
    "quote27" : "",
    "quote28" : "",
    "quote29" : "",
    "quote30" : "",
    "quote31" : "",
    "quote32" : "",
    "quote33" : "",
    "quote34" : "",
    "quote35" : "",
    "quote36" : "",
    "quote37" : "",
    "quote38" : "",
    "quote39" : "",
    "quote40" : "",
    "quote41" : "",
    "quote42" : "",
    "quote43" : "",
    "quote44" : "",
    "quote45" : "",
    "quote46" : "",
    "quote47" : "",
    "quote48" : "",
    "quote49" : "",
    "quote50" : "",


}

const button = document.getElementById('btn');
button.addEventListener('click', function(){    
    let author = Object.keys(quote);
    let randomQuotes = author[Math.floor(Math.random() * author.length)]
    let quotes = quote[randomQuotes];
    const text = document.getElementById('text');
    setTimeout(texts, 2000);
    function texts(){
        text.innerHTML = quotes;
    }

    text.innerHTML = `<div class="loader mx-auto"></div>`
    


});