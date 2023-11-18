let quote =document.querySelector('.quote');
let speaker =document.querySelector('.speaker');
let btn =document.querySelector('#btn');

const quotes = [
    {
        quote:"Own your morning. Elevate your life.",
        speaker:"Robin S. Sharma"
    },
    {
        quote:"Doing the difficult things that you've never done awakens the talents you never knew you had",
        speaker:"Robin S. Sharma"
    },
    {
        quote:"There's a cure for aging that no one talks about. It's called learning.",
        speaker:"Robin S. Sharma"
    },
    {
        quote:"Don't ask for respect. Earn it.",
        speaker:"Robin S. Sharma"
    },
    {
        quote:"Believe and act as if it were impossible to fail.",
        speaker:"Charles F. Kettering"
    },
    {
        quote:"The man who moves a mountain begins by carrying away small stones.",
        speaker:"Confucius"
    },
    {
        quote:"Be kind, for everyone you meet is figthing a hard battle.",
        speaker:"Socrates"
    },
    {
        quote:"If something is important enough, even if the odds are against you, you should still do it.",
        speaker:"Elon Mask"
    },
    {
        quote:"He who has a why to live for can bear almost any now.",
        speaker:"Friedrich Nietzsche"
    },
    {
        quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        speaker:"Mahatma Gandhi"
    },
    {
        quote:"Mistake is a mistake only if you make it twice.",
        speaker:"Robin S. Sharma"
    },
    {
        quote:"Where you come from doesn't determine your life, but how you spend your time.",
        speaker:"Robert Takyi"
    },
]

btn.addEventListener('click', ()=>{
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    speaker.innerHTML = quotes[random].speaker;
})