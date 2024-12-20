import { getFirestore, doc, collection, getDoc, getDocs } from "firebase/firestore";
import firebaseApp from "../config/firebase";

const db = getFirestore(firebaseApp);

export async function fetchSectionCol1Data() {
  try {
    // Referencia al documento `sectionCol1`
    const sectionCol1DocRef = doc(db, "angularData", "sectionCol1");

    // Obtener datos de las colecciones `1`, `2`, `3`
    const collections = ["1", "2", "3"];
    const data = [];

    for (const colId of collections) {
      const colRef = collection(sectionCol1DocRef, colId);
      const snapshot = await getDocs(colRef);

      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
    }
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
