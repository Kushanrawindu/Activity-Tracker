/* eslint-disable no-undef */
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBkiPQ9gh5nuDsfm_E4_B8Ymgk5DJ08J9E",
    authDomain: "activity-tracker-514c2.firebaseapp.com",
    databaseURL: "https://activity-tracker-514c2.firebaseio.com",
    projectId: "activity-tracker-514c2",
    storageBucket: "activity-tracker-514c2.appspot.com",
    messagingSenderId: "246943162387",
    appId: "1:246943162387:web:fd8866ee006411e44b9fe6",
    measurementId: "G-DYX1547ZCP"
};

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();

        /*** Authentication  ***/
        // doCreateUserWithEmailAndPassword = (email, password) => 
        // this.auth.createUserWithEmailAndPassword(email, password);

        // doSignInWithEmailAndPassword = (email, password) => 
        // this.auth.signInWithEmailAndPassword(email, password);

        // doSignOut = () => 
        // this.auth.signOut();

        // doPasswordReset = email => 
        // this.auth.sendPasswordResetEmail(email);

         /*** Database ***/
        // user = uid => this.db.ref(`users/${uid}`);
        // users = () => this.db.ref('users');

        // addActivity = (uid, activity) => {
        //     const ref = this.db.ref().child(`users/${uid}/activities`);
        //     ref.push(activity);
        // };
    }
}

export default Firebase;