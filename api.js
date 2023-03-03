const jokeButton = document.getElementById('yes');
const jokeSlot = document.querySelector(".joke")

async function dadJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        }
    });

    const data = response.json();
    return data;
}

async function buttonClick() {
    const { joke } = await dadJoke();
    console.log(joke);
}

jokeButton.addEventListener("click", buttonClick);
// console.log(dadJoke());