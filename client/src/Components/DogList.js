import DogCard from "./DogCard";

function DogList({ dogs, onDeleteDog }) {
  return (
    <ul className="cards">
      {dogs.map((dog) => {
        return <DogCard key={dog.id} dog={dog} onDeleteDog={onDeleteDog} />;
      })}
    </ul>
  );
}

export default DogList;
