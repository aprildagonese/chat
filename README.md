## Simple Chat App to Impress Eric Spery

This project is a simple chat app that allows 2 users to exchange messages in a browser window, simply running on localhost alone.

In order to use the app with a friend, simply follow the instructions below.

## Instructions
1. Make a friend. Tell them to follow these instructions.
2. Fork and clone this repository into the directory of your choice.
3. Run `npm install` to install dependencies.
4. Open the app in your preferred code editor, and navigate to `chat/src/app.js`
5. With your friend, determine who will be "User 1" and who will be "User 2". If you are "User 1", skip this step and move to step 6. If you are "User 2", find the `componentDidMount` function inside of `app.js`, and change the `userId` field to `User 2` (it will be set as `User 1` by default.)
![Instructional image](src/assets/instruction1.png)
6. Run `npm start`
7. Your browser should automatically load from your local server, but if it does not, navigate to [http://localhost:3000](http://localhost:3000). The page will reload if you make edits to the source code.
8. In the browser, type a message and click enter to see your message displayed in the room.
9. Happy chatting!

## Tech Stack
- [Create React App](https://github.com/facebook/create-react-app)
- [Pusher Chatkit](https://pusher.com/chatkit)
