// https://developer.pebble.com/docs/pebblekit-js/Pebble/#on
// pkjs index.js
Pebble.on('message', function(event) {
  var message = event.data;
  var address = '0x8fece74c20cc5fbe506701ccac1b3a22ba862dd6';
  var finalURL = 'http://172.27.165.143:5000/patients/'+address+'/'+JSON.stringify(event.data).slice(13,15);
  console.log(JSON.stringify(event.data).slice(13,14));
  request(finalURL, 'GET', function(respText){});
});

function request(url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send();
}