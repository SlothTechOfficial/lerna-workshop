'use strict';

const AWS = require('aws-sdk')
const translate = new AWS.Translate();

module.exports.hello = async event => {
  const lang = event.queryStringParameters.lang || 'en';
  const message = await TranslateText(event.queryStringParameters.message, lang)
  
   return {
    statusCode: 200,
    body: JSON.stringify(
      message,
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


const TranslateText = (message, lang)=>{
  return new Promise((resolve, reject)=>{
    const text = translate.translateText({
      Text: message,
      SourceLanguageCode: "auto",
      TargetLanguageCode: lang
    }, (error, response)=>{
      if(error) { reject(error); }
      else { resolve(response); }
    });
  });
}