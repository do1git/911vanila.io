const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser";

function paintGreeting(text)
{
    form.classList.remove("showing");
    greeting.innerHTML = `Hi 911 owner ${text}`;
    greeting.classList.add("showing");
}

function handleSubmit(event)
{
    event.preventDefault();
    const currentValue = input.value;
    localStorage.setItem("currentUser",currentValue);
    paintGreeting(currentValue);
}

function askForName()
{
    form.classList.add("showing");
    form.addEventListener("submit",handleSubmit);
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null)
    {
        askForName();
    }
    else
    {
        paintGreeting(currentUser);
    }
}

function init()
{
    loadName();
}

init();