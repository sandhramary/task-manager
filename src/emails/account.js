const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sandhra.mary@keyvalue.systems",
    subject: "Welcome to the app!",
    text: `Hello ${name}, welcome to the task manager app. Let me know how you get along with this app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "sandhra.mary@keyvalue.systems",
    subject: "Goodbye!",
    text: `Goodbye ${name}. We've always loved you as a customer. Please let us know if there is anything we can do keep you on board?`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelEmail };
