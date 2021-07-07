var sarthak = {
    name: "Sarthak",
    contacts: [{ name: "Suyash", chat: [] }, { name: "Arihaan", chat: [] }, { name: "Aadit", chat: [] }, { name: "Aanya", chat: [] }]
}

var suyash = {
    name: "Suyash",
    contacts: [{ name: "Sarthak", chat: [] }, { name: "Arihaan", chat: [] }, { name: "Aadit", chat: [] }, { name: "Aanya", chat: [] }]
}

var arihaan = {
    name: "Arihaan",
    contacts: [{ name: "Sarthak", chat: [] }, { name: "Suyash", chat: [] }, { name: "Aadit", chat: [] }, { name: "Aanya", chat: [] }]
}

var aadit = {
    name: "Aadit",
    contacts: [{ name: "Sarthak", chat: [] }, { name: "Arihaan", chat: [] }, { name: "Aanya", chat: [] }, { name: "Suyash", chat: [] }]
}

var aanya = {
    name: "Aanya",
    contacts: [{ name: "Sarthak", chat: [] }, { name: "Arihaan", chat: [] }, { name: "Aadit", chat: [] }, { name: "Suyash", chat: [] }]
}

var allUsers = [sarthak, suyash, arihaan, aadit, aanya];

function contains(name) {
    // allUsers.forEach((user, index) => {
    //     console.log(index);
    //     if (user.name === name) {
    //         console.log(`found at location: ${index}!`);
    //         return true;
    //     }
    // });
    // console.log("Not found!");
    // return false;
    for (let i = 0; i < allUsers.length; i++) {
        console.log(i);
        if (allUsers[i].name === name) {
            console.log(`found at location: ${i}!`);
            return true;
        }
        return false;
    }
}

module.exports = { allUsers, sarthak, suyash, aadit, aanya, arihaan, contains };