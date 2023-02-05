const adviceNumber = document.getElementById("adviceNumber")
const adviceText = document.getElementById("adviceText")
const getAdviceBtn = document.getElementById("getAdviceBtn")


const displayAdvice = (advice)=>{
    adviceNumber.innerText = `advice # ${advice.slip.id}`
    adviceText.innerText = advice.slip.advice
}

const getAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(advice => displayAdvice(advice));
}

getAdviceBtn.addEventListener("click",getAdvice )

