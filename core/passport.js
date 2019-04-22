const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

const config = require("./../config/app");

const User = require("./../database/models").User;

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  User.findOne({ where: { id: id } })
    .then(_user => done(null, _user))
    .catch(err => done(err));
});

passport.use(
  new BearerStrategy((token, done) => {
    // Check does jwt valid
    jwt.verify(token, config.secretKey, function(error, decoded) {
      if (error) done(error);
      // Find user from token
      User.findOne({ where: { id: decoded.userId } })
        .then(_user => done(null, _user))
        .catch(err => done(err));
    });
  })
);

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: config.googleClientId,
        clientSecret: config.googleSecretKey,
    }, (accessToken, refreshToken, profile, done) => {
        console.log(accessToken)
        User.findOrCreate({
            where: {email: profile.emails[0].value},
            defaults: {
                email: profile.emails[0].value,
                password: profile.emails[0].value
            }
        }).then(([_user, created]) => {
            console.log(_user.get({
                plain: true
            }))
            console.log(created)
            done(null, _user);
        })
        .catch(err => done(err));
    })
);
