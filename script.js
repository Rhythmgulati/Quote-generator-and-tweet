const quote = document.querySelector(".container-top h3");
const author = document.querySelector(".container-top p");
const newquotebtn = document.querySelector(".newquote");
const tweetbtn = document.querySelector(".container-top img");
let realdata = '';
let dataa = '';
let quotedata = "";

const generatequote = async() => {
    var api = `https://type.fit/api/quotes`
    try {
        dataa = await fetch(api);
        console.log(dataa);
        realdata = await dataa.json();
        console.log(realdata);   
    } catch (error) {
       console.log(error);
    }
}
generatequote();
const newquote = () =>{
    var rn = Math.floor(Math.random()*10);
 
    quotedata = realdata[rn].text;
    quote.innerText = quotedata;
    author.innerText = realdata[rn].author;
}
const tweetnow = () => {
    let tweetpost = `https://twitter.com/intent/tweet?text=${quotedata}`
    window.open(tweetpost);
}

newquotebtn.addEventListener("click",()=>{
    newquote();
    console.log("clicked")
})

tweetbtn.addEventListener("click",tweetnow);
