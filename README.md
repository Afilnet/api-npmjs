
# SMS, Email and Voice notifications

## Easy to use

This package is designed to be an easy way to use Afilnet API services. You can send SMS, email and voice notifications using your Afilnet account.

You only need an Afilnet account with enought credits.
If you do not have an account, you can [create it](http://afilnet.us/client/register.php) in a few minutes.

```js
var afilnet = require('afilnet');

afilnet.setUsername('your username');
afilnet.setPassword('your password');

//SEND SMS
afilnet.sendSMS(
    'to',
    'message',
    'from',
    function(result){
        console.log(result);
    }
);

//SEND EMAIL
afilnet.sendEmail(
    'to',
    'message',
    'subject',
    function(result){
        console.log(result);
    }
);

//SEND VOICE
afilnet.sendVoice(
    'to',
    'message',
    function(result){
        console.log(result);
    },
    'lang' //OPTIONAL PARAMETER
);
```


## Index

* [About Afilnet](#afilnet)
    *  [Our website](#website)
* [Setup](#setup)
* [API Services](#afilnet-api-service)
    * [SMS](#sms)
    * [Email](#email)
    * [Voice](#voice)


---

## Afilnet

![Afilnet Cloud Marketing Logo](https://afilnet.com/img/logodesignb.png)

Afilnet is a company dedicated to Cloud Marketing.

With this module we seek to facilitate the use of the services we offer through our API.

We offer support to our clients if they have some trouble with their accounts or our services.

If you notice some error or bugs, feel free to contact us.

### Website
We are available in 3 different languages:
- [Español - www.afilnet.com](http://www.afilnet.com/) 
- [English - www.afilnet.us](http://www.afilnet.us/) 
- [English - www.afilnet.co.uk](http://www.afilnet.co.uk/) 
- [Français - www.afilnet.fr](http://www.afilnet.fr/) 


[back to top](#index)


---

## Setup

**ATTENTION: You need an Afilet account with credits to use this module**

*If you dont have an account, [visit our web page](#website) and create it.*

*After that, you will have to buy some credits to be able to send the notifications*

*We have a promo to test the services which give you 10 credits for free*

Once you have an account, we are ready to setup the module in your app:
 
The first step is require the module.

```js
var afilnet = require('afilnet');
```

Then set your username and password.

```js
afilnet.setUsername('your username');
afilnet.setPassword('your password');
```

And now we are ready to use the services :)


[back to top](#index)


---


## Afilnet API Services

There are 3 services availables:
- [Send SMS](#sms)
- [Send Email](#email)
- [Send Voice](#voice)
  
---

### SMS

If you want to send SMS you only need to call a function: sendSMS

This function requires 4 parameters: to, message, from, callback.
* to: 
    *  String.
    *  Mobile phone number where the message will be send.
    *  Country prefix is required.
* message:
    *  String (max 160 characters or text will be split in multiple messages).
    *  Text to be sent.
* from:
    *  String(max 11 characters).
    *  Name of sender.
* callback:
    *  Function (1 parameter).
    *  Function which will handle the JSON response.


#### Example

```js
var to = "34600000000";
var message = "Hey Luke, I want to tell you something... I am your father.";
var from = "Darth Vader";

afilnet.sendSMS(
    to,
    message,
    from,
    function(result){
        if (result.status=="SUCCESS"){
            console.log("Nooooo!!!!!11");
        } else { // == "ERROR"
            console.log("I have not received any sms :(");
        }
    }
);
```


[back to top](#index)


---

### Email

If you want to send email you only need to call a function: sendEmail

This function requires 4 parameters: to, message, subject, callback
* to: 
    *  String.
    *  Email address where the message will be send.
* message:
    *  String (The string may have HTML entities).
    *  Message to be sent.
* subject:
    *  String.
    *  Subject of email.
* callback:
    *  Function (1 parameter).
    *  Function which will handle the JSON response.


#### Example

```js
var to = "luke_skywalker@newjediorder.com";
var message = "<h2>I am your father.</h2><hr><p>Hehehe surprise.</p><p>Best wishes, Darth Vader.</p>";
var subject = "I have a surprise for you - Darth Vader";

afilnet.sendEmail(
    to,
    message,
    subject,
    function(result){
        if (result.status=="SUCCESS"){
            console.log("Nooooo!!!!!11");
        } else { // == "ERROR"
            console.log("I have not received any email :(");
        }
    }
);
```


[back to top](#index)


---

### Voice

If you want to send voice you only need to call a function: sendVoice

This function requires 4 parameters: to, message, callback, lang
* to: 
    *  String.
    *  Mobile phone number where the message will be send.
    *  Country prefix is required.
* message:
    *  String.
    *  Text to be sent.
* callback:
    *  Function (1 parameter).
    *  Function which will handle the JSON response.
* lang:
    *  *Optional parameter*
    *  String.
    *  [ISO code (2 digits)](https://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements) of the language in which the message will be transformed to voice.


#### Example

```js
var to = "346000000";
var message = "Hey Luke, I want to tell you something... I... am... your father.</p>";
var lang = "EN";

afilnet.sendEmail(
    to,
    message,
    function(result){
        if (result.status=="SUCCESS"){
            console.log("Wait, what?!... Nooooo!!!!!11");
        } else { // == "ERROR"
            console.log("I have not received any phone call :(");
        }
    },
    lang
);
```


[back to top](#index)


---


### RESPONSE
  
All services receive similar parameters but all return same JSON object.

The services will return a JSON object with the next structure:
* status
* error (if status=ERROR), here you will receive the error code
* result (if status=SUCCESS), here you will receive the following values:
    *  messageid
    *  credits
 
#### ERROR CODES

Code | Description
--- | --- | ---
MISSING_USER | User or email not included
MISSING_PASSWORD | Password not included
MISSING_CLASS | Class not included
MISSING_METHOD | Method not included
MISSING_COMPULSORY_PARAM | Compulsory parameter not included
INCORRECT_USER_PASSWORD | Incorrect user or password
INCORRECT_CLASS | Incorrect class
INCORRECT_METHOD | Incorrect method
NO_ROUTE_AVAILABLE | There are no available paths for the indicated destination
NO_CREDITS | Your balance is insufficient
 
#### Example

- If everything is ok:
```json
{"status":"SUCCESS","result":{"messageid":"id_from_message","credits":"credits_spent"}}
```

- If something went bad:
```json
{"status":"ERROR","error":"error_message"}
```


[back to top](#index)


---