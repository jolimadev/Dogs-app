import React, { useState, useEffect} from 'react'
import getBreeds from '../helpers/getBreeds';
import Error from './Error';

const initialBreeds = [
    {
        id: 1,
        name: 'Pitbull'
    },
    {
        id: 2,
        name: 'Golden'
    },
];

const Select = ({ updateDog }) => {

    const [breeds, setBreeds] = useState(initialBreeds);
    const [error, setError] = useState(null);    

    useEffect(() => {
        updateBreeds();
    }, []);

    const updateBreeds = () => {
        getBreeds()
          .then((newBreeds) => {  //el useEffect se ejecuta y renderiza después de leer la funcion, por eso figura en este caso la func.flecha aspi
            setBreeds(newBreeds);
        })
        .catch((error) => {
            console.log(error); //paras devs
            setError('Error al cargar las razas') //para users
        })
    }

    return (
        <>
        <select onChange={(e) => updateDog(e.target.value)}>
          {breeds.map((breed) => (
          <option value={breed.id} key={breed.id}>
            {breed.name}
          </option>
        ))}
        </select>
            {
                error && <Error error = {error}/>
            }
        
        </>
    )
}

export default Select