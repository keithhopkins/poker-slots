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

    res.send('/');
});

router.post('/user/logout', function(req, res, next){
  ref.unauth();
  console.log('logged out');
  res.redirect('/');
});

router.post('/users', function(req, res, next){
    ref.createUser({
    email    : req.body.email,
    password : req.body.password
    }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      res.status("Successfully created user account with uid:").redirect('/');
    }
  });
});

router.post('/user/bank', function(req, res, next) {
  if(authData) {
    userRef.child(authData.uid).update({
      'bank' : req.body.bank
    });
  }
  res.end();
});

module.exports = router;

// *** helper functions *** //

var User = function(bank){
  this.bank = 500;
};

function authHandler(error, authData, next) {
  if (error) {
    res.json("Login Failed!", error);
  } else {
    return true;
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

function getUserInfo() {
  var indUserRef = userRef.child(authData.id);
  indUserRef.on('value', function(snapshot) {
    return snapshot.val();
  });
}
