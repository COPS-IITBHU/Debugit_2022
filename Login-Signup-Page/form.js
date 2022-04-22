const firebaseConfig = {
  apiKey: "AIzaSyAc8begGqp_eMyJdfBevqqqZMSpzb2A4Fk",
  authDomain: "log-in-sign-up-page.firebaseapp.com",
  projectId: "log-in-sign-up-page",
  storageBucket: "log-in-sign-up-page.appspot.com",
  messagingSenderId: "798228783273",
  appId: "1:798228783273:web:1f93193cb4a6a2380a89b8",
  measurementId: "G-Z9E40N5RYW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
//signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  //
  promise.catch((e) => alert(e.message));
  //alert("SignUp Successfully");
}

//signIN function
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    auth.signOut();
    location.replace("gaming.html");
  }
});
