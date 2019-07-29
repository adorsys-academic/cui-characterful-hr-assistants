const Alexa = require('ask-sdk-core');
let skill;

const express = require('express'); 
const bodyParser = require('body-parser');
const helloHRBotHandler = require('./handlers/HelloHRBotHandler');
const port = 3030; 
const app = express();

app.use(express.static("resources"));
app.use(bodyParser.json()); 

app.post('/', function (req, res) {
    skill.invoke(req.body)
        .then(function(responseBody){
            res.json(responseBody);
        })
        .catch(function(error){
            console.log(error);
            res.status(500).send('Error during the request');
        });
});

app.get('/pictures/:name', function (req, res){
    res.sendFile("/Users/alinamegos/Developer/Alexa/HR-Buddies/cui-hr-buddies-alexa/resources/"+req.params.name);
});

//alle Handler
app.listen(port, function() {
   skill = Alexa.SkillBuilders.custom()
        .addRequestHandlers(
            helloHRBotHandler
            )
        .create();
    console.log('Development endpoint listening on port 3030!');
});