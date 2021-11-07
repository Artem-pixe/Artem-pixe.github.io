const submit = document.getElementById("submit");
const submit2 = document.getElementById("submit2");

submit.addEventListener("click", () => {
    
    const messageText = document.getElementById("link");
    if (messageText.value.length > 0) {
        const messengerDisplay = document.getElementById("messengerDisplay");
        
        messengerDisplay.insertAdjacentHTML("beforeend", `<div class="message"> ${messageText.value} </div>`);
        messageText.value = "";
    }
    console.log(messageText);
});

submit2.addEventListener("click" , () => {
    const messageText = document.getElementById("link2");

    if (messageText.value.length > 0) {
        const messengerDisplay = document.getElementById("messengerDisplay");

        messengerDisplay.insertAdjacentHTML("beforeend", `<div class="message align_self_end"> ${messageText.value} </div>`);
        messageText.value = ""
        console.log("program is work")
    }
});

submit.addEventListener("mousedown", () => {
    // const submit = document.getElementsByClassName("messageSubmit");
    // submit = document.getElementsByClassName("messageSubmitMousedown");
    submit.classList.add("green");

    console.log(submit.classList);
})

submit.addEventListener("mouseup", () => {
    submit.classList.remove("green");
    console.log(submit.classList);
})

// const message = document.getElementsByClassName()