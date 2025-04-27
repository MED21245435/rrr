const firebaseConfig = {
    apiKey: "AIzaSyB8JZxJXegza-7rjdlPp-XOeo5BIBNFePY",
    authDomain: "proje-5a5c7.firebaseapp.com",
    databaseURL: "https://proje-5a5c7-default-rtdb.firebaseio.com",
    projectId: "proje-5a5c7",
    storageBucket: "proje-5a5c7.appspot.com",
    messagingSenderId: "605912193204",
    appId: "1:605912193204:web:a9c81545c5a4f94e141fe1",
    measurementId: "G-DF8TXZXPXW"
  };
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();