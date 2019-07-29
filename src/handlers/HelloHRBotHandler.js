const aplDocument = require('../apls/aplDocument.json');
const aplData = require('../apls/data.json');

const HelloHRBotHandler = {
    canHandle(input) {
        return input.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(input) {
        const speechText = 'Wir sind zusammen die H R Bots von ador sis! Mit wem von uns magst du denn sprechen?';

        return input.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                token: '[SkillProvidedToken]',
                version: '1.0',
                document: aplDocument,
                datasources: aplData
            })
            .getResponse();
    }
}

module.exports = HelloHRBotHandler