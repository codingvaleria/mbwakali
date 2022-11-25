function DogCard({ dog, onDeleteDog }) {
  const { id, name, image, breed } = dog;

  function handleDeleteClick() {
    fetch(`/dogs/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteDog(id);
      }
    });
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Breed: {breed}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default DogCard;
