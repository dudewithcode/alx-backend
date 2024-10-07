const kue = require('kue');

let jobs = kue.createQueue();
let job = jobs.create('push_notification_code', {
  phoneNumber: '0795096442',
  message: 'Hello Seth',
}).save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  }
});

job.on('complete', () => {
  console.log('Notification job completed');
}).on('failed', () => {
  console.log('Notification job failed');
});
