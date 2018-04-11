import Firebase from 'firebase'


const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDG6RhXSRZ1xrE4jjT3KDZxoMmD1WDQglE",
  authDomain: "ironhack-admin.firebaseapp.com",
  databaseURL: "https://ironhack-admin.firebaseio.com",
  projectId: "ironhack-admin",
  storageBucket: "",
  messagingSenderId: "69631709491"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
