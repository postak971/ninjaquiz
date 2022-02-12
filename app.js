const correctAnswers = ['B', 'B', 'B', 'B'];

const qform = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

qform.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const usersAnswers = [qform.q1.value, qform.q2.value, qform.q3.value, qform.q4.value];

    //Check answers
    usersAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    //show results on the page
    scrollTo(0, 0); //Scrolls the page up
    
    //result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;

        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
        
    },50);

});

/* let i = 0;
const timer = setInterval(() => {
    console.log('hello'); 
    i++;
    if (i === 5) {
        clearInterval(timer);
    }
}, 1000); */