import LocalizedStrings from "react-localization";


let strings = new LocalizedStrings({
  en: {
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
    unsplash_demo:"Unsplash-API-Demo",
    //homepage
    error: "Error",
    loading: "Loading...",
    homepage_p1:
      "This is an Unsplash-API demo to fetch random images and normal images...",
    homepage_h1: "HOMEPAGE",
    logout_h1: "This is a page for Logout",
    user:"User Profile",
    unsplash_username:" Unsplash Username: ",
    //Normal photos && RandomP
    p1_error: "SERVER ERROR",
    p1_image: "Error fetching the image",
    //Logout
    logOut: "This is a page for Logout",
    //common
    console_error_profile: "Error fetching user profile:",
    console_error_random: "Error fetching random photo:",
    console_error_photo: "Error fetching photos:",
    console_error_fetch: "Failed to fetch access token ",
    console_log_accesstoken: "Access_token_data",
    console_log_auth_code: "Authorization code:",
    console_error_auth_code: "Authorization code not found in URL",
    loading_token: "Loading your token...",
    //MATERIAL
    logout: "Logout",
    Unsplash: "Unsplash",
  },
});

export default strings;