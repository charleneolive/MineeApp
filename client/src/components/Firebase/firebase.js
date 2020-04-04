import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDHwWsZyq0GhykZghn5nONliz1jMXFVKpE",
  authDomain: "minee-itmmjm.firebaseapp.com",
  databaseURL: "https://minee-itmmjm.firebaseio.com",
  projectId: "minee-itmmjm",
  storageBucket: "minee-itmmjm.appspot.com",
  messagingSenderId: "469043137966",
  appId: "1:469043137966:web:16a48e0d84916e5fe20c3f",
  measurementId: "G-CQTZVJNJW6"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth=app.auth();

  }


// Auth API
doCreateUserWithEmailAndPassword = (email, password)=> 
  this.auth.createUserWithEmailAndPassword(email, password)

doSignInWithEmailAndPassword = (email, password)=> 
this.auth.signInWithEmailAndPassword(email, password)

doSignOut = () => this.auth.signOut();

doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

doPasswordUpdate=password=> this.auth.currentUser.updatePassword(password);

onAuthStateChange=(user)=> this.auth.onAuthStateChange(user);

}


export default Firebase;