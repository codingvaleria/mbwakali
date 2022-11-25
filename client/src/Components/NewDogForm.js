import { useState } from "react";

function NewDogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const dog = {
      name,
      age,
      breed,
      image,
    };
    fetch("/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dog),
    })
      .then((r) => r.json())
      .then((newDog) => {
        onAddDog(newDog);
        setName("");
        setImage("");
        setBreed("");
        setAge("");
      });
  }

  return (
    <div className="new-dog-form">
      <h2>New Dog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Dog name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="breed"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          type="integer"
          name="age"
          placeholder="Dog age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
}

export default NewDogForm;
