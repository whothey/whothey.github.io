const tagrize   = require('./tagrize.js'),
      requester = require('./requester.js');

var tags = document.querySelectorAll('.tagrize');
for (var i = 0; i < tags.length; i++) tagrize(tags.item(i));
