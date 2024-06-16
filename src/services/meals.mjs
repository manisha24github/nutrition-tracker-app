import { getDocs, collection } from 'firebase/firestore';
import { getDb } from './db.mjs';

const collection_name = 'meals';

export const getAllMeals = async () => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));
  let res = [];

  doc_refs.forEach((meals) => {
    res.push({
      id: meals.id,
      ...meals.data(),
    });
  });
  //console.log('db', res);
  return res;
};
