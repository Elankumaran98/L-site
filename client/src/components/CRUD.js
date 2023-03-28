import {
  query,
  collection,
  limit,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase.js";
export const userCollectionRef = collection(db, "users");

const CRUD = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const quaryResponse = query(userCollectionRef, limit(10));
    const snapShot = onSnapshot(quaryResponse, (snapShotParam) => {
      setUsers(
        snapShotParam.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
    return () => snapShot();
  }, []);

  const updateAge = async (userId, updateAge) => {
    const userDoc = doc(db, "users", userId);
    const newAge = { age: updateAge };
    await updateDoc(userDoc, newAge);
  };

  const deleteUser = async (userId) => {
    const userDoc = doc(db, "users", userId);
    await deleteDoc(userDoc);
  };

  return <div>
    <ul>
        {users.map((user)=>{
            return (
                <li key={user.id}>Name :{user.name} {user.age}</li>
            )
        })}
    </ul>
  </div>;
};

export default CRUD;
