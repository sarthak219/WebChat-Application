
window.onload = (event) => {
    var chatHistoryDiv = document.getElementById("chatWindow");
    chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight - chatHistoryDiv.clientHeight;

    const receiverTitle = document.querySelector("h2.roomname");
    const senderName = document.querySelector("#senderName");
    const receiverName = document.querySelectorAll("#receiverName");
    receiverTitle.innerText = capitalizeFirstLetter(receiverTitle.innerText);
    senderName.innerText = capitalizeFirstLetter(senderName.innerText);
    receiverName.forEach((name)=> {
        name.innerText = capitalizeFirstLetter(name.innerText);
    });
    
};


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
