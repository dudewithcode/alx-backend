const kue = require('kue');

function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

let queue = kue.createQueue();
queue.process('push_notification_code', (job, done) => {
  let {phoneNumber, message} = job.data;
  sendNotification(phoneNumber, message);
  done();
});
