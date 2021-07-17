
// window.onload = (event) => {
$(document).ready(() => {
    var chatHistoryDiv = document.getElementById("chatWindow");
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight - chatHistoryDiv.clientHeight;

    const receiverTitle = document.querySelector("h2.roomname");
    const senderName = document.querySelector("#senderName");
    const receiverName = document.querySelectorAll("#receiverName");
    const contactName = document.querySelectorAll(".contactName");

    receiverTitle.innerText = capitalizeFirstLetter(receiverTitle.innerText);
    senderName.innerText = capitalizeFirstLetter(senderName.innerText);
    receiverName.forEach((name) => {
        name.innerText = capitalizeFirstLetter(name.innerText);
    });
    contactName.forEach((name) => {
        name.innerText = capitalizeFirstLetter(name.innerText);
    });

    $("#messageTypingArea").on("focusin", () => {
        $("#messageTypingArea").attr("placeholder", "");
    })

    $("#messageTypingArea").on("focusout", () => {
        $("#messageTypingArea").attr("placeholder", "Type your message here...");
    })
})


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// mouse positions

// function mouseX(evt) {
//     if (evt.pageX) {
//         return evt.pageX;
//     } else if (evt.clientX) {
//         return evt.clientX + (document.documentElement.scrollLeft ?
//             document.documentElement.scrollLeft :
//             document.body.scrollLeft);
//     } else {
//         return null;
//     }
// }

// function mouseY(evt) {
//     if (evt.pageY) {
//         return evt.pageY;
//     } else if (evt.clientY) {
//         return evt.clientY + (document.documentElement.scrollTop ?
//             document.documentElement.scrollTop :
//             document.body.scrollTop);
//     } else {
//         return null;
//     }
// }