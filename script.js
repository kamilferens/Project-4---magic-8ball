let ballBtn = document.querySelector("#photo");
const input = document.querySelector("#question-input");
const answerArea = document.querySelector(".answer-area");
const error = document.querySelector(".error");
const answerLine = document.querySelector(".answer-line");
const answerValue = document.querySelector("#answer-value");
const photo = document.querySelector("#photo-div");

const answerArr = [
    "To dobry pomysł!",
    "Czy wszystko przemyślałeś?",
    "Nie chcesz znać odpowiedzi na to pytanie",
    "Oczywiście! ",
    "Niestety, przykro mi, to zły pomysł :(",
    "Zapytaj kogoś starszego od Ciebie?",
];

ballBtn.addEventListener("click", () => {
    shakeAnimation();
    setTimeout(resetBall, 1000);

    if (input.value === "") {
        return showError(`Musisz wpisać pytanie!`);
    }

    if (input.value.indexOf("?") !== input.value.length - 1) {
        return showError(
            'Błąd! Pytanie musi być zakończone znakiem zapytania "?"'
        );
    } else {
        showAnswer();
    }
});

function showError(textMsg) {
    clearAnswer();

    console.log("test");
    error.style.display = "block";
    error.textContent = textMsg;
}

function clearError() {
    error.style.display = "none";
    error.textContent = "";
}

function showAnswer() {
    clearError();

    answerLine.style.display = "block";

    let number = Math.floor(Math.random() * (answerArr.length - 1) + 0);
    // zakres:     answerArr.length - 1;
    console.log(number);

    answerValue.innerText = answerArr[number];
    // chcę żeby się wyświetliła answer pod indeksem nr np. 3
}

function clearAnswer() {
    answerLine.style.display = "none";
    answerValue.innerText = "";
}

function shakeAnimation() {
    photo.classList.add("animation-shake");
}

function resetBall() {
    photo.classList.remove("animation-shake");
}
