import { useEffect, useState } from "react";
import DogList from "./DogList";
import NewDogForm from "./NewDogForm";
import Search from "./Search";

function DogPage() {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/dogs")
      .then((r) => r.json())
      .then((dogsArray) => {
        setDogs(dogsArray);
      });
  }, []);

  function handleAddDog(newDog) {
    const updatedDogsArray = [...dogs, newDog];
    setDogs(updatedDogsArray);
  }

  function handleDeleteDog(id) {
    const updatedDogsArray = dogs.filter((dog) => dog.id !== id);
    setDogs(updatedDogsArray);
  }

  function handleUpdateDog(updatedDog) {
    const updatedDogsArray = dogs.map((dog) => {
      return dog.id === updatedDog.id ? updatedDog : dog;
    });
    setDogs(updatedDogsArray);
  }

  const displayedDogs = dogs.filter((dog) => {
    return dog.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewDogForm onAddDog={handleAddDog} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <DogList
        dogs={displayedDogs}
        onDeleteDog={handleDeleteDog}
        onUpdateDog={handleUpdateDog}
      />
    </main>
  );
}

export default DogPage;
