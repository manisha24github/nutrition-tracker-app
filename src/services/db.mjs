import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
      apiKey: 'AIzaSyDq6juMCRVdP4az1yh874AgG75sCUmgUtM',
      authDomain: 'nutrify-f5b62.firebaseapp.com',
      projectId: 'nutrify-f5b62',
      storageBucket: 'nutrify-f5b62.appspot.com',
      messagingSenderId: '1047848499788',
      appId: '1:1047848499788:web:48b74b8eb55456ccb212e9',
      measurementId: 'G-8G5CQMXK9K',
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
