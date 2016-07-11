var $ = require('jquery');

export var apiGet = function apiGet (path, callback) {
  var jqXHR = $.get('http://localhost:8080' + path);
  jqXHR.done(data => callback(data));
};

export var apiPost = function apiPost (path, postObj) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:8080' + path,
    data: JSON.stringify(postObj),
    contentType: 'application/json'
  });
};



