import { getDocs, collection, addDoc } from 'firebase/firestore';
import { getDb } from './db.mjs';

const collection_name = 'tracker';

export const getAllTracks = async () => {
  const doc_refs = await getDocs(collection(getDb(), collection_name));
  let res = [];

  doc_refs.forEach((track) => {
    res.push({
      id: track.id,
      ...track.data(),
    });
  });
  //console.log('tracks', res);
  return res;
};

export const addTracker = async (track) => {
  //console.log('add to Tracker', track);
  await addDoc(collection(getDb(), collection_name), track);
};
