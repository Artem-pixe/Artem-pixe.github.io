document.getElementById("submit").addEventListener("click", function messageW() {
    let messageText = document.getElementById("link").value;
    let window = document.getElementById("window");

    window.insertAdjacentHTML("beforeend", `<div class="message"> ${messageText} </div>`);
    
    console.log(messageText);
});

document.getElementById("submit").addEventListener("mousedown", function mouseDown() {
    let submit = document.getElementsByClassName("messageSubmit");
    submit = document.getElementsByClassName("messageSubmitMousedown");
    console.log("hi boy")
})

