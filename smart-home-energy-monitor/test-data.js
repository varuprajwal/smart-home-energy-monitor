import { db } from './firebase-config.js';
import { collection, addDoc } from 'firebase/firestore';

// Add test data
async function addTestData() {
    try {
        const docRef = await addDoc(collection(db, "energy_usage"), {
            usage: 100,
            timestamp: new Date().toISOString()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

addTestData();