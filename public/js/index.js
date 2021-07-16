
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
