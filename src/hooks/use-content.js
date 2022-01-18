import { useEffect, useState } from "react";
import {
  collection,
  documentId,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const useContent = (target) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, target));
        const content = [];
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), docId: doc.id };
          content.push(data);
        });
        setContent(content);
      } catch (err) {
        console.log(err);
      }
    };
    getContent();
  }, []);

  return { [target]: content };
};

export default useContent;
