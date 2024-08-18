var Quotes = [
    {
        qyote:"Be yourself; everyone else is already taken.",
        auther:"Oscar Wilde"
    },
    {
        qyote:"So many books, so little time.",
        auther:"Frank Zappa"
    },
    {
        qyote:"Without music, life would be a mistake.",
        auther:"Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        qyote:"If you tell the truth, you don't have to remember anything.",
        auther:"Mark Twain"
    },
    {
        qyote:"To live is the rarest thing in the world. Most people exist, that is all.",
        auther:"Oscar Wilde"
    },
    {
        qyote:"So many books, so little time.",
        auther:"Frank Zappa"
    },
    {
        qyote:"Without music, life would be a mistake.",
        auther:"Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        qyote:"It is better to be hated for what you are than to be loved for what you are not.",
        auther:"Andre Gide, Autumn Leaves"
    }
    
]

function quote(){
    var num = Math.round(Math.random()*Quotes.length)
    console.log(num);

    document.getElementById("quote").innerHTML= `" ${Quotes[num].qyote} "` ;
    document.getElementById("auther").innerHTML= `auther :  ${Quotes[num].auther}  ` ;
}