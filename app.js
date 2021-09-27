const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const _ = require('lodash');
const app = express();


app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// establish mongoDB connection
mongoose.connect("mongodb://localhost:27017/webChatDB", { useNewUrlParser: true, useUnifiedTopology: true });

// Schemas
const userSchema = new mongoose.Schema({
    name: String,
    contacts: [String]
});

const messageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    content: String,
    sendingTime: String
});

const chatSchema = new mongoose.Schema({
    participants: [String],
    conversations: [messageSchema]
});

// models

const User = mongoose.model("User", userSchema);
const Chat = mongoose.model("Chat", chatSchema);

// home route
app.route("/")
    .get((req, res) => {
        res.render("form");
    })
    .post((req, res) => {
        const senderName = _.lowerCase(req.body.sender);
        const receiverName = _.lowerCase(req.body.receiver);
        User.findOne({ name: (senderName) }, (err, foundSender) => {
            if (!err) {
                if (!foundSender) {
                    const sender = new User({ name: senderName, contacts: [] });
                    console.log("new user created with name: ", senderName);
                    sender.save();
                }
                User.findOne({ name: receiverName }, (err, foundReceiver) => {
                    if (!err) {
                        if (!foundReceiver) {
                            const receiver = new User({ name: receiverName, contacts: [] });
                            console.log("new user created with name: ", receiverName);
                            receiver.save();
                        }
                        const url = "/" + senderName + "/" + receiverName;
                        res.redirect(url);
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });
    })


// chat application route
app.route("/:senderName/:receiverName")
    .get((req, res) => {
        const senderName = _.lowerCase(req.params.senderName);
        const receiverName = _.lowerCase(req.params.receiverName);
        User.findOne({ name: senderName }, (err, foundSender) => {
            if (!err) {
                User.findOne({ name: receiverName }, (err, foundReceiver) => {
                    if (!err) {
                        Chat.findOne({ participants: { $all: [senderName, receiverName] } }, (err, foundChat) => {
                            if (!err) {
                                if (foundChat) {
                                    let isContact = false;
                                    foundSender.contacts.forEach((contact) => {
                                        if (contact === receiverName) {
                                            isContact = true;
                                        }
                                    })
                                    res.render("index", {
                                        currentUser: foundSender,
                                        currentReceiver: foundReceiver,
                                        chat: foundChat,
                                        isInContacts: isContact
                                    });
                                } else {
                                    const chat = new Chat({
                                        participants: [senderName, receiverName],
                                        conversations: []
                                    });
                                    console.log("created new char between: ", chat.participants);
                                    chat.save();
                                    const url = "/" + senderName + "/" + receiverName;
                                    res.redirect(url);
                                }
                            } else {
                                console.log(err);
                            }
                        });
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });
    })
    .post((req, res) => {
        const senderName = _.lowerCase(req.params.senderName);
        const receiverName = _.lowerCase(req.params.receiverName);
        const messageText = req.body.messageTypingArea;
        const url = "/" + senderName + "/" + receiverName;
        if (messageText !== null && messageText !== "") {
            const message = {
                content: messageText,
                sender: senderName,
                receiver: receiverName,
                sendingTime: new Date().toLocaleTimeString()
            }
            User.findOne({ name: senderName }, (err, foundSender) => {
                if (!err) {
                    User.findOne({ name: receiverName }, (err, foundReceiver) => {
                        if (!err) {
                            if (foundSender && foundReceiver) {
                                Chat.updateOne(
                                    { participants: { $all: [senderName, receiverName] } },
                                    { $push: { conversations: message } },
                                    (err, foundChat) => {
                                        if (!err) {
                                            res.redirect(url);
                                        } else {
                                            console.log(err);
                                        }
                                    });
                            }
                        } else {
                            console.log(err);
                        }
                    });
                } else {
                    console.log(err);
                }
            });
        } else {
            res.redirect(url);
        }
    })

// route to add receiver as a contact of the sender
app.route("/add-contact/:senderName/:receiverName")
    .get((req, res) => {
        const senderName = _.lowerCase(req.params.senderName);
        const receiverName = _.lowerCase(req.params.receiverName);
        const url = "/" + senderName + "/" + receiverName;

        User.updateOne({ name: senderName }, { $addToSet: { contacts: receiverName } }, (err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect(url);
            }
        });
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});