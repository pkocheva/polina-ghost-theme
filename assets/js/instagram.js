
var userFeed = new Instafeed({
  accessToken:'354540034.1677ed0.b7b286baa7424e239133acd9fe0a7bfb',
  get: 'user',
  userId: '354540034', 
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
  limit: 5,
  links: true,
  target: 'personalfeed'
});
userFeed.run();

var artFeed = new Instafeed({
  accessToken:'6929774122.1677ed0.0c18da6c2a6c4af8aca1040c7086b130',
  get: 'user',
  userId: '6929774122', 
  resolution: 'standard_resolution',
  sortBy: 'most-recent',
  limit: 5,
  links: true,
  taget: 'artfeed'
});
artFeed.run();