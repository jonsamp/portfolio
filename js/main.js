var userFeed = new Instafeed({
  get: 'user',
  userId: '17942230',
  accessToken: '17942230.e281b92.8252eb3acca645b5a37b86388ee59137',
  limit: 1,
  resolution: 'standard_resolution',
  template: '<img src="{{image}}" class="photo"/><div class="caption"><p>@{{location}}: {{caption}}</p></div>'
});


function adjustHeight(message) {
  var origin = message.origin;
  var event = message.data.event;
  var height = message.data.height;
  if (origin === 'https://entire.life' && event === 'ENTIRELIFE_ROUTE_CHANGE') {
    var iframe = document.querySelector('#entire-life-calendar');
    iframe.height = '' + (height + 5) + 'px';
  }
}

userFeed.run();
window.addEventListener('message', adjustHeight, false);
