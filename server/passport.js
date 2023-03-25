const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: "270227781239-3ndt34703bp9geojo944i087o2kj83md.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function(accessToken, refreshToken, profile, callback){
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done)=>{
  done(null, user);
});

passport.deserializeUser((user, done)=>{
  done(null, user);
})