import React, { useEffect } from 'react';
import firebase from './firebase';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, getFirestore } from 'firebase/firestore';

const MyComponent = () => {
 const [value, loading, error] = useCollection(
        collection(getFirestore(firebase), 'books'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },    
        }
    );
    useEffect(() => {
    console.log(value);
}, [value])

  return (
    <div>
      <h1>Items from Firestore</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {value.map((item) => (
            <li key={item.id}>
                <img src={item.imgUrl} alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
