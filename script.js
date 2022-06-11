const quote = {
    "quote1" : "Semangat Berliana! kamu pasti bisa!",
    "quote2" : "Hidupmu tidak akan pernah bahagia jika terus-menerus menunggu dibahagiakan.",
    "quote3" : "We will never know the real answer before we try.",
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
    "quote16" : "Loving yourself isn't vanity, it's sanity.",
    "quote17" : "Love is like war, easy to begin but very hard to stop.",
    "quote18" : "Hidup ini singkat. Jangan sia-siakan dengan bersedih. Jadilah dirimu apa adanya, berbahagialah, jadilah bebas menjadi apa pun yang kamu inginkan.",
    "quote19" : "Hidup itu sebentar. Kamu harus bisa tersenyum saat merasakan kepedihan atau kita tak akan pernah melanjutkan hidup. - Jeff Ross",
    "quote20" : "Meskipun kamu merasa sedih, jangan pernah putus asa. Dan meskipun kamu terjatuh, jangan pernah hancur.",
    "quote21" : "kalo kamu lagi sedih keluarkan, setelah itu tersenyum lagi.",
    "quote22" : "Berhasil atau gagal itu bukan yang terpenting, yang terpenting adalah melakukan yang terbaik.",
    "quote23" : "Jika kamu bisa memimpikannya, kamu bisa melakukannya",
    "quote24" : "Jangan sedih karena ini sudah berakhir. Tersenyumlah karena itu terjadi.",
    "quote25" : "Salah satu cara pendewasaan diri adalah melalui ujian-ujian yang terjadi dalam kehidupanmu.",
    "quote26" : "When someone hurts you, do not be sad. God has the cure.",
    "quote27" : "Giving up, doesn't mean you are weak, sometimes it means that you are strong enough to let go.",
    "quote28" : "Meeting you is the best and worst time I ever have. Because you tell me happiness and leave me with sadness.",
    "quote29" : "Aku tahu bahwa kita memang tidak bisa bersama.",
    "quote30" : "I hope we can meet again someday.",
    "quote31" : "Good luck in the future.",
    "quote32" : "I hope we can get to know each other.",
    "quote33" : ";)",
    "quote34" : "(O_O)",
    "quote35" : "fsdkanfjbwqbfiuenqjbqoflntbqfijq.",


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