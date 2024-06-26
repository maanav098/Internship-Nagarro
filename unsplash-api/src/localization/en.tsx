import LocalizedStrings from "react-localization";


let strings = new LocalizedStrings({
en:{
  //login page
  signIn: "Sign in",
  signIn_API: "Sign In with Unsplash API",
  copyright: "Copyright © ",
  copyright_text: "Unsplash-API-Demo",
  alert_username: "Please provide a username",
  alert_password: "Please provide a password",
  alert_loggedin: "Logged in",
  alert_invalid: "Invalid credentials",
  forgot: "Forgot password?",
  signUp: "Sign up",
  //homepage    
  error: "Error",
  loading: "Loading...",
  homepage_p1:
    "This is an Unsplash-API demo to fetch random images and normal images...",
  homepage_h1: "HOMEPAGE",
  logout_h1: "This is a page for Logout",
  //Normal photos && RandomP
  p1_error: "SERVER ERROR",
  p1_image: "Error fetching the image",
  //Logout
  logOut: "This is a page for Logout",

},
});

export default strings;