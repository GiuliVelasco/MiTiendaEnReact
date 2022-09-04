import React, {useEffect, useState} from 'react';
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import {Link} from 'react-router-dom'
import './Categories.css'

export default function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const categoriesCollection = collection(db, 'categories')

        getDocs(categoriesCollection)
            .then((snapshot) => {
                setCategories(snapshot.docs.map((doc) => doc.data().nombre))
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <>
        {categories.map((el) => (
            <li className='nav-item otroEstilo' key={el}>
                <Link className="categoriasNav" to={'/categoria/'+el}>{ el.charAt(0).toUpperCase() + el.slice(1)}</Link><br></br>
            </li>
        ))}
        </>
    )
}