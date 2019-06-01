# node-chat-integrator
<hr>

### Project Setup
<li>
Setup a project for bot in the Google API console with the Hangouts Chat enabled
</li>
<li>Open your project in the API Console. In the list of APIs, click Hangouts Chat API.</li>
<li>Select the Configuration tab and enter the information for the bot</li>

### Configuring the bot
[Google Chatbot Configuration](https://console.developers.google.com/apis/api/chat.googleapis.com)
Click the configuration tab of the Hangouts Chat API and enter in the nessesary information for the bot.
### Prerequisite
<li>Node</li>
<li>Jenkins</li>
<li>Google Chatbot with Chatbot API configuration</li>
<li>ngrok</li>

###Deploying the node-chat app
Clone this repository using the following command.
```shell
git clone https://github.com/rajcrk/node-chat-integrator.git
```
Change your directory into the newly cloned folder using the command
```shell
cd node-chat-integrator
```
Make sure that you have all the neccesary dependency by running the command
```shell
npm install
```
Start the application by typing the application by running the command 
```shell 
npm start
```
### Exposing the localhost port using ngrok
Download ngrok and change into the drectory and execute the following command
```shell
./ngrok http <local-node-app>
```
Copy the exposed URL and paste it into the Google Chatbot configuration page as the BOT script.
Click save.