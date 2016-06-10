const request = require('request');
module.exports = {
    url: 'http://www.afilnet.com/api/http/',

    username: '',
    password: '',

    setUsername: function (user) {
        this.username = user;
    },

    getUsername: function () {
        return this.username;
    },

    setPassword: function (pass) {
        this.password = pass;
    },

    /*
     getPassword: function () {
     return this.password;
     },
     */

    sendSMS: function (to, message, from, callback) {
        try {
            var postData = {
                user: this.username,
                password: this.password,

                class: 'sms',
                method: 'sendsms',

                from: from,
                to: to,
                sms: message
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

    sendEmail: function (to, message, subject, callback) {
        try {
            var postData = {
                user: this.username,
                password: this.password,

                class: 'email',
                method: 'sendemail',

				to: to,
                subject: subject,
                email: message
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

    sendVoice: function (to, message, callback, lang) {
        try {
            var postData = {
                user: this.username,
                password: this.password,

                class: 'voice',
                method: 'sendvoice',

                to: to,
                message: message
            };

            if (lang != null) postData.lang = lang;

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
}
