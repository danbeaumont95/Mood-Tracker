const history = document.getElementById('history');
const current = document.getElementById('current')
//console.dir(history)

const moodButtons = [...document.getElementsByClassName('mood-button')]

//console.log(moodButtons)

moodButtons.forEach((button) => {
    // button.onclick = function() {
    //     console.log('clicked')
    // };
    button.addEventListener('click', logMood)

});

function logMood(event) {
    const mood = event.target.innerText;
       history.innerText += mood 

       current.innerText = 'Current mood:' + mood;
}