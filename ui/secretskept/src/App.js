import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <h1>secretskept</h1>
          <div className="menu">
            <a href="#create">Create</a>
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
        {Array(4)
          .fill()
          .map((_, i) => (
            <div key={i} className="card">
              <p>To: Drose</p>
              <p>Hello chuchu</p>
              <button>Attached Image</button>
            </div>
          ))}
      </main>
    </div>
  );
}

export default App;
