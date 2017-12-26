// Clés FB, Twitter, Google

module.exports = {
  'facebook': {
    'clientID' : '1789868497980393',
    'clientSecret' : '896c761cbb08af48a30ba9e79606c312',
    'callback' : 'http://127.0.0.1:3000/auth/facebook/callback',
  },
  'twitter': {
    'consumerKey': 'CaCWWWlPYQnnxty7IJiMiZoC4',
    'consumerSecret': 'swe4oafRAprfT8s9YcugznypiO3XSTm1mUq2Jwo1izFJVLB1lM',
  },
  'google': {
    'clientID': '1052543100704-4ceo1ug1qaa4u0mkrrnaa0sh8330stat.apps.googleusercontent.com',
    'clientSecret': 'hIB7SWBijmk9JsE9x6xcXIn9',
    'returnURL': 'http://127.0.0.1:3000/auth/google/callback',
  }
}