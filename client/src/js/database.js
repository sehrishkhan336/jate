import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () =>
console.error('getDb not implemented');
const request = indexedDB.open('jate', 1);
const db = request.result
const tx = db.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const getAllRequest = store.getAll();
const result = getAllRequest.result;
console.log('result.value', result);
return result;


// const tx = db.transaction('jate', 'readonly');
// const store = tx.objectStore('jate');
// const request = await store.getAll();
// const result = await request;
// console.log('result.value', result);
// return result;

// export const getDb = async () => {
//   return new Promise((resolve, reject) => {
//     const request = indexedDB.open('jate', 1);

//     request.onerror = () => {
//       console.error('Error opening database');
//       reject(new Error('Failed to open database'));
//     };

//     request.onsuccess = () => {
//       const db = request.result;
//       const tx = db.transaction('jate', 'readonly');
//       const store = tx.objectStore('jate');
//       const getAllRequest = store.getAll();

//       getAllRequest.onsuccess = () => {
//         const result = getAllRequest.result;
//         console.log('result.value', result);
//         resolve(result);
//       };

//       getAllRequest.onerror = () => {
//         console.error('Error retrieving data from object store');
//         reject(new Error('Failed to retrieve data from object store'));
//       };
//     };
//   });
// };

initdb();
