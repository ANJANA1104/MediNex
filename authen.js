const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Get references to authentication and database
const auth = firebase.auth();
const database = firebase.database();

// Function to add a new user with email and password
function addUser(email, password) {
    // Push the new user to the 'users' node in the database
    add.ref('users').push({
      email: email,
      password: password
    });
  }
  function login() {
    const email = document.getElementById('doctor-email').value;
    const password = document.getElementById('doctor-password').value;
  
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Authentication successful
        console.log('Doctor logged in:', userCredential.user.email);
        // You can redirect or perform additional actions here
      })
      .catch((error) => {
        // Handle authentication errors
        console.error('Authentication failed:', error.message);
      });
  }
  // Example usage
  addUser("user1@example.com", "user1");
  addUser("user2@example.com", "user2");

  