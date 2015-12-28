// http://budiirawan.com/send-emails-using-amazon-ses-and-node-js/
var nodemailer = require('nodemailer');
var credentials = require('./credentials');
var ses = require('nodemailer-ses-transport');

module.exports = nodemailer.createTransport(ses(credentials));
