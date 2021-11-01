const submit = document.getElementById("submit");

submit.addEventListener("click", messageW = () => {
    let messageText = document.getElementById("link").value;
    let messengerDisplay = document.getElementById("messengerDisplay");

    messengerDisplay.insertAdjacentHTML("beforeend", `<div class="message"> ${messageText} </div>`);
    
    console.log(messageText);
});

submit.addEventListener("mousedown", mouseDown = () => {
    let submit = document.getElementsByClassName("messageSubmit");
    submit = document.getElementsByClassName("messageSubmitMousedown");
    console.log("hi boy")
})

