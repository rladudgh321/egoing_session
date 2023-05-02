const db = require('../lib/db');

module.exports = function (app){
var authData = {
    email: 'egoing777@gmail.com',
    password: '111111',
    nickname: 'egoing'
  }
  
  var passport = require('passport');
  var LocalStrategy = require('passport-local');
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.serializeUser((user,done)=>{
    console.log("serializeUser", user);
    return done(null,user.email);
  });
  
  passport.deserializeUser((id,done)=>{
    console.log("deserializeUser", id);
    return done(null,authData);
  });
  
    passport.use(new LocalStrategy(
      {
        usernameField:'email',
        passwordField:'pwd'
      },
      function(email, password, done) {
        if(email === authData.email){
          if(password === authData.password){
            return done(null, authData, {message: 'welcome'});
          } else {
            return done(null, false, {error:'not password'});
          }
        } else {
          return done(null, false, {error:'not email'});
        }
      }
    ));
    return passport;
}