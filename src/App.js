import React, {useState, useEffect}from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import getDog from "./helpers/getDog";
import Error from "./components/Error";

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  useEffect(() => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
    .then((newDog) => {
      setDog(newDog); //dejalo seteado para pintar los perros
      setLoading(false);
    })
    .catch(() => {
      console.log(error)
      setError("Error al cargar un perro")
      setLoading(false);
    })
  }

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      {
        error && <Error />
      }
      
      <Card dog={dog} updateDog={updateDog} loading={loading} />
      
    </div>
  );
}

export default App;
