import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APY_KEY,
  authDomain: "proyecto-react-coder-7a2a2.firebaseapp.com",
  projectId: "proyecto-react-coder-7a2a2",
  storageBucket: "proyecto-react-coder-7a2a2.appspot.com",
  messagingSenderId: "712847550186",
  appId: "1:712847550186:web:3e0779acd9768a818ad993"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const cargarBaseDeDatos = async () => {
    const promise = await fetch('../data.js')
    const productos = await promise.json()
    productos.forEach(async(producto)  =>{
        await addDoc(collection(db,'productos'), {
            nombre: producto.title, 
            marca: producto.category,
            precio: producto.precio,
            img: producto.image,
            stock: producto.cantidad

        })
    })
}

export {cargarBaseDeDatos}