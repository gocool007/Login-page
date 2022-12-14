const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    eInput.value == "" ? eField.classList.add("shake", "error") : checkEmail();
    pInput.value == "" ? pField.classList.add("shake", "error") : checkPass();

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => {
        checkEmail();
    };
    pInput.onkeyup = () => {
        checkPass();
    };

    const checkEmail = () => {
        const pattern = /^[a-z|\d]+@[a-z]+.[a-z]+/i;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            const errorTxt = eField.querySelector(".error-txt");

            eInput.value != ""
                ? (errorTxt.innerText = "Enter a valid email address")
                : (errorTxt.innerText = "Email can't be blank");
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    };

    const checkPass = () => {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    };

    if (
        !eField.classList.contains("error") &&
        !pField.classList.contains("error")
    ) {
        window.location.href = form.getAttribute("action");
    }
};
