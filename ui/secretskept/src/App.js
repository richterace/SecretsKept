import React, { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    recipient: "",
    message: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    setFormData({ recipient: "", message: "", image: null });
    setShowForm(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <h1>secretskept</h1>
          <div className="menu">
            <button onClick={() => setShowForm(true)}>Create</button>
            <a href="#about">About</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <p className="tagline">
          secrets kept, photographs cherished, and memories remained.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </header>
      <main className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <p>To: {card.recipient}</p>
            <p>{card.message}</p>
            {card.image && <img src={card.image} alt="Uploaded" />}
          </div>
        ))}
      </main>
      {showForm && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <h2>Create a New Card</h2>
            <label>
              Recipient:
              <input
                type="text"
                name="recipient"
                value={formData.recipient}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </label>
            <label>
              Attach Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <button type="submit">Add Card</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;