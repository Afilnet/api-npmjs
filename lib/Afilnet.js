const request = require('request');
module.exports = {
    url: 'http://www.afilnet.com/api/http/',

    username: '',
    password: '',
	
    login: function(user, pass){
		this.setConfig(user, pass);

		this.user.getBalance(
			function(response){
                console.log(response);
				if (response.status="SUCCESS")
					return true;
				else{
					this.username = '';
					this.password = '';
					return false;
				}
			}
		);
	},

    sms: {
        class: "sms",
        methods: {
            send: "send" + this.class,
            sendFromTemplate: "send" + this.class + "fromtemplate",
            sendToGroup: "send" + this.class + "togroup",
            sendToGroupFromTemplate: "send" + this.class + "togroupfromtemplate",
            getDeliveryStatus: "getdeliverystatus",
        },
        send: function (to, message, from, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: this.class,
                    method: this.methods.send,

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

                    class: this.class,
                    method: this.methods.sendFromTemplate,

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

                    class: this.class,
                    method: this.methods.sendToGroup,

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

                    class: this.class,
                    method: this.methods.sendToGroupFromTemplate,

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

                    class: this.class,
                    method: this.methods.getDeliveryStatus,

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
        class: "email",
        methods: {
            send: "send" + this.class,
            sendFromTemplate: "send" + this.class + "fromtemplate",
            sendToGroup: "send" + this.class + "togroup",
            sendToGroupFromTemplate: "send" + this.class + "togroupfromtemplate",
            getDeliveryStatus: "getdeliverystatus",
        },
        send: function (subject, to, message, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: this.class,
                    method: this.methods.send,

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

                    class: this.class,
                    method: this.methods.sendFromTemplate,

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

                    class: this.class,
                    method: this.methods.sendToGroup,

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

                    class: this.class,
                    method: this.methods.sendToGroupFromTemplate,

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

                    class: this.class,
                    method: this.methods.getDeliveryStatus,

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
        class: "voice",
        methods: {
            send: "send" + this.class,
            sendFromTemplate: "send" + this.class + "fromtemplate",
            sendToGroup: "send" + this.class + "togroup",
            sendToGroupFromTemplate: "send" + this.class + "togroupfromtemplate",
            getDeliveryStatus: "getdeliverystatus",
        },
        send: function (to, message, lang, scheduledatetime, output, callback) {
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: this.class,
                    method: this.methods.send,

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

                    class: this.class,
                    method: this.methods.sendFromTemplate,

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

                    class: this.class,
                    method: this.methods.sendToGroup,

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

                    class: this.class,
                    method: this.methods.sendToGroupFromTemplate,

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

                    class: this.class,
                    method: this.methods.getDeliveryStatus,

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
        class: "user",
		
        getBalance: function(callback){
            try {
                var postData = {
                    user: this.username,
                    password: this.password,

                    class: this.class,
                    method: "getbalance"
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
