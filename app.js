const correctAnswers = ["B", "B", "B", "B"]

const form = document.querySelector(".quiz-form")
const displayScore = document.querySelector(".result")


form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    //Check answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    //Show result on page
    scrollTo(0, 0)

    displayScore.classList.remove("d-none")
    let output = 0;
    const timer = setInterval(() => {
        displayScore.querySelector("span").textContent = `${output}%`
        if (output === score){
            clearInterval(timer);
        }else {
            output++;
        }
    }, 10)
})


//show result
// let i = 0;
// const timer = setInterval(()=>{
//     console.log("Hello")
//     i++
//     if (i == 5){
//         //To stop an interval
//         clearInterval(timer)
//     }
// }, 1000)