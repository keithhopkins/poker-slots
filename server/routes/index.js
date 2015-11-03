var express = require('express');
var router = express.Router();
var Firebase = require('firebase');

var ref = new Firebase('https://poker-slots.firebaseio.com/');
var userRef = ref.child('users');
var authData = ref.getAuth();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user/login', function(req, res, next){
    ref.authWithPassword({
    email    : req.body.loginEmail,
    password : req.body.loginPassword
  }, authHandler);
    saveUser();
    res.redirect('/');
});

module.exports = router;

// *** helper functions *** //

function authHandler(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
}

function saveUser(){
  ref.onAuth(function(authData) {
    if (authData) {
      uid = authData.uid;
      userRef.child(authData.uid).set({
        provider: authData.provider,
        email: authData.password.email,
      });
    }
  });
}
