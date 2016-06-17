
# SMS, Email and Voice notifications

## Easy to use

This package is designed to be an easy way to use Afilnet API services. You can send SMS, email and voice notifications using your Afilnet account.

You only need an Afilnet account with enought credits.
If you do not have an account, you can [create it](http://afilnet.us/client/register.php) in a few minutes.

Example
```js
var afilnet = require('afilnet');

afilnet.login(
	"account@test.com", 
	"password",
	function(result){
		if (result){
			console.log("User logged");
		}
		else {
			console.log("Bad credentials");
		}
	}
);

//You must login correctly or all services will return error bad user/pass

//SEND SIMPLE SMS
afilnet.sms.send(
    'to',
    'message',
    'from',
    'scheduledatetime', //Optional, you can set it null
    'output',   //Optional, you can set it null
    function(result){
        console.log(result);
    }
);

//SEND EMAIL FROM TEMPLATE
afilnet.email.sendFromTemplate(
    'to',
    'idTemplate',
    'params',
    'scheduledatetime', //Optional, you can set it as null
    'output', //Optional, you can set it as null
    function(result){
        console.log(result);
    }
);

//SEND VOICE TO GROUP
afilnet.voice.sendToGroup(
    'countryCode',
    'idGroup',
    'msg',
    'scheduledatetime', //Optional, you can set it as null
    'output', //Optional, you can set it as null
    function(result){
        console.log(result);
    },
);
```


## Index

* [About Afilnet](#afilnet)
    *  [Our website](#website)
* [Setup](#setup)
* [API Services](#afilnet-api-service)
    * [User](#user)
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

Then login with your account credentials. **(You must login correctly or all services will return error bad user/pass)**

```js
afilnet.login(
	"account@test.com", 
	"password",
	function(result){
		if (result){
			console.log("User logged");
		}
		else {
			console.log("Bad credentials");
		}
	}
);
```

If you have been successfully logged in, we are ready to use the services :)


[back to top](#index)


---


## Afilnet API Services

There are 4 channels availables:
- [User](#user)
- [SMS](#sms)
- [Email](#email)
- [Voice](#voice)

This library use the structure: 

```js
afilnet.channel.service(params, callbackFunction);
```

User has two services:
- getBalance (Get balance of your account)
- getUsername (Return username of the logged account) *This service return a variable, so it doesn't require callback function*

SMS, Email and Voice have the same services:
- send (Send to a single user)
- sendFromTemplate (Send to a single user using a template)
- sendToGroup (Send to a defined group)
- sendToGroupFromTemplate (Send to a defined group using a template)
- getDeliveryStatus (Get delivery status of a message)

---

### User

If you want to check User parameters you only need to call the object user and the service required.

#### Services
```js
//GET BALANCE
afilnet.user.getBalance(callback);

//GET USERNAME
var accountUsername = afilnet.user.getUsername();
```

#### Example

```js
var accountUsername = afilnet.user.getUsername();

afilnet.user.getBalance(
    function(result){
        if (result.status=="SUCCESS"){
            console.log("I have " + result.result + " credits");
        } else { // == "ERROR"
            console.log("Error: "+ result.error);
        }
    }
);
```

### SMS

If you want to use SMS you only need to call the object sms and the service required.

#### Services
```js
//SEND
afilnet.sms.send(
    'from',
    'to', 
    'msg',
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

//SEND FROM TEMPLATE
afilnet.sms.sendFromTemplate(
    'to', 
    'idTemplate', 
    'params', // (optional) 
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

//SEND TO GROUP
afilnet.sms.sendToGroup(
   'from', 
   'countryCode', 
   'idGroup', 
   'msg', 
   'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

//SEND TO GROUP FROM TEMPLATE
afilnet.sms.sendToGroupFromTemplate(
    'countryCode', 
    'idGroup', 
    'idTemplate', 
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

// GET DELIVERY STATUS
afilnet.sms.getDeliveryStatus('ids', callback);
```

#### Example

```js
var to = "34600000000";
var message = "Hey Luke, I want to tell you something... I am your father.";
var from = "Darth Vader";

afilnet.sms.send(
    from,
    to,
    message,
    null,
    null,
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

If you want to use Email you only need to call the object sms and the service required.

#### Services

```js
//SEND
afilnet.email.send(
    'subject',
    'to', 
    'msg',
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

//SEND FROM TEMPLATE
afilnet.email.sendFromTemplate(
    'to', 
    'idTemplate', 
    'params', // (optional) 
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

//SEND TO GROUP
afilnet.email.sendToGroup(
    'subject', 
    'idGroup', 
    'msg', 
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

//SEND TO GROUP FROM TEMPLATE
afilnet.email.sendToGroupFromTemplate(
    'idGroup', 
    'idTemplate', 
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

// GET DELIVERY STATUS
afilnet.email.getDeliveryStatus('ids', callback);
```


#### Example

```js
var to = "luke_skywalker@newjediorder.com";
var subject = "I have a surprise for you - Darth Vader";
var message = "<h2>I am your father.</h2><hr><p>Hehehe surprise.</p><p>Best wishes, Darth Vader.</p>";

afilnet.email.send(
    subject,
    to, 
    message,
    null, // (optional) 
    null, // (optional)
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

If you want to use Voice you only need to call the object sms and the service required.

#### Services

```js
//SEND
afilnet.voice.send(
    'to', 
    'msg',
    'lang', // (optional) 
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback
);

//SEND FROM TEMPLATE
afilnet.voice.sendFromTemplate(
    'to', 
    'idTemplate', 
    'params', // (optional) 
    'scheduledatetime', // (optional) 
    'output', // (optional)
    callback 
);

//SEND TO GROUP
afilnet.voice.sendToGroup(
   'countryCode', 
   'idGroup', 
   'msg', 
   'scheduledatetime', // (optional) 
   'output', // (optional) 
    callback
);

//SEND TO GROUP FROM TEMPLATE
afilnet.voice.sendToGroupFromTemplate(
    'countryCode', 
    'idGroup', 
    'idTemplate', 
    'scheduledatetime', // (optional) 
    'output', // (optional) 
    callback
);

// GET DELIVERY STATUS
afilnet.voice.getDeliveryStatus('ids', callback);
```

#### Example

```js
var to = "346000000";
var message = "Hey Luke, I want to tell you something... I... am... your father.";
var lang = "EN";

afilnet.voice.send(
    to,
    message,
    null,
    null,
    lang,
    function(result){
        if (result.status=="SUCCESS"){
            console.log("Wait, what?!... Nooooo!!!!!");
        } else { // == "ERROR"
            console.log("I have not received any phone call :(");
        }
    }
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
