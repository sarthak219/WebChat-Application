# Web Chatting Application
This is a simple online chatting application made from scratch mainly using Express, EJS, MongoDB and Node.js

## How to Use 
1. Create your personal one-to-one chat room with someone by simply entering your name, and the name of the person you wish to chat with. WebChat automatically creates an account for you, and you will be redirected to your chat room.

2. Once in the chatting room, you can send any text message to the person you're chatting with, and even receive messages from them. You can even add them to your contacts! 

## Note:
- The application is not build using web sockets at the moment and hence you need to manually refresh the page in order to see the latest version of your conversation. But the good news is, the real-time version of the application is on its way!
- Since the application currently runs on port localhost:3000, in order to use the application, you must first open localhost:3000 in one tab and open a chat room between you, and some other person X. Now once you're redirected to your chat room, open another tab on your web browser. Open localhost:3000 on this tab as well ,and start a conversation between person X and you.<b> So, in tab 1, you are logged in as yourself and in tab 2, you are logged in as person X.</b> Now, you can send messages to person X from your account and once you <b>refresh the page</b> on person X's account, you should see your message. You can also send message to person X from your account and refresh to see them on his account.

## Features
- Chats are automatically saved to a database so if you start a conversation with someone you have already chatted with in the past, you can see your previous chats!
- You can add people to your contacts and always open your chat with them just by clicking on their name in the menu panel on the left. Just like your conversations, your contacts will also be stored and you will see them whenever you open a chat room.

## Screenshots
- ### Sign Up Page
![SignupPage](https://github.com/sarthak219/WebChat-Application/blob/master/images/screenshots/login.png)

- ### Personal Chat Room
![chats](https://github.com/sarthak219/WebChat-Application/blob/master/images/screenshots/chats.png)