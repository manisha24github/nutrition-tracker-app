import { getDocs, collection, addDoc } from 'firebase/firestore';
import { getDb } from './db.mjs';

const collection_name = 'users';

export const findUser = async (username, password) => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));
  let res = false;

  doc_refs.forEach((users) => {
    let user = users.data();
    //console.log(user);
    if (user.email === username && user.password === password) {
      res = true;
    }
  });

  return res;
};

export const registerUser = async (user) => {
  //console.log(user);
  await addDoc(collection(getDb(), collection_name), user);
};
