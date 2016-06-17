const request = require('request');

module.exports = {
    url: 'http://www.afilnet.com/api/http/',

    username: '',
    password: '',
	
    login: function(user, pass, callback){
		this.setConfig(user, pass);

		this.user.getBalance(
			function(response){
				if (response.status=="SUCCESS"){
					return callback(true);
				}
				else{
					this.username = '';
					this.password = '';
					return callback(false);
				}
			}
		);
	},

    sms: {
        send: function (to, message, from, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "sms",
                    method: "sendsms",

                    from: from,
                    to: to,
                    sms: message
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;


                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendFromTemplate: function (to, idTemplate, params, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "sms",
                    method: "sendsmsfromtemplate",

                    to: to,
                    idtemplate: idTemplate
                };
                if (params)
                    postData.params = params;
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendToGroup: function (from, countryCode, idGroup, msg, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "sms",
                    method: "sendsmstogroup",

                    from: from,
                    countrycode: countryCode,
                    idgroup: idGroup,
                    sms: msg
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendToGroupFromTemplate: function (countryCode, idGroup, idTemplate, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "sms",
                    method: "sendsmstogroupfromtemplate",

                    countrycode: countryCode,
                    idgroup: idGroup,
                    idtemplate: idTemplate
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },
        getDeliveryStatus: function (ids, callback){
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "sms",
                    method: "getdeliverystatus",

                    messages: ids
                };

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
    },

    email: {
        send: function (subject, to, message, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "email",
                    method: "sendemail",

                    subject: subject,
                    to: to,
                    email: message
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;


                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendFromTemplate: function (to, idTemplate, params, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "email",
                    method: "sendemailfromtemplate",

                    to: to,
                    idtemplate: idTemplate
                };
                if (params)
                    postData.params = params;
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendToGroup: function (subject, idGroup, msg, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "email",
                    method: "sendemailtogroup",

                    subject: subject,
                    idgroup: idGroup,
                    email: msg
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendToGroupFromTemplate: function (idGroup, idTemplate, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "email",
                    method:"sendemailtogroupfromtemplate",

                    idgroup: idGroup,
                    idtemplate: idTemplate
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        getDeliveryStatus: function (ids, callback){
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "email",
                    method: "getdeliverystatus",

                    messages: ids
                };

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
    },

    voice: {
        send: function (to, message, lang, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "voice",
                    method: "sendvoice",

                    to: to,
                    message: message
                };
                if (lang)
                    postData.lang = lang;
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;


                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendFromTemplate: function (to, idTemplate, params, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "voice",
                    method: "sendvoicefromtemplate",

                    to: to,
                    idtemplate: idTemplate
                };
                if (params)
                    postData.params = params;
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendToGroup: function (countryCode, idGroup, msg, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "voice",
                    method: "sendvoicetogroup",

                    countrycode: countryCode,
                    idgroup: idGroup,
                    message: msg
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },

        sendToGroupFromTemplate: function (countryCode, idGroup, idTemplate, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "voice",
                    method: "sendvoicetogroupfromtemplate",

                    countrycode: countryCode,
                    idgroup: idGroup,
                    idtemplate: idTemplate
                };
                if (scheduledatetime)
                    postData.scheduledatetime = scheduledatetime;
                if (output)
                    postData.output = output;

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        },
		
        getDeliveryStatus: function (ids, callback){
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "voice",
                    method: "getdeliverystatus",

                    messages: ids
                };

                request.post(
                    this.url,
                    {form: postData},
                    function (err, response, body) {
                        return callback(JSON.parse(body));
                    }
                );
            } catch (error) {
                console.error(error);
            }
        }
    },

    user: {	
        getBalance: function(callback){
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: "user",
                    method: "getbalance"
                };

                var url = this.url+"?";

                for (var k in postData){
                    if (postData.hasOwnProperty(k)) {
                        url += k+"="+postData[k]+"&";
                    }
                }
                request({url: url}, function (error, response, body) {
                    return callback(JSON.parse(body));
                });

                
            } catch (error) {
                console.error(error);
            }
        },

        getUsername: function () {
            return this.username;
        },
    },
	
	setConfig: function(user, pass){
		for (channel in this){
			if (typeof this[channel] == 'object'){
				this[channel].username = user;
				this[channel].password = pass;
				this[channel].url = this.url;
			}
		}
	}
}
