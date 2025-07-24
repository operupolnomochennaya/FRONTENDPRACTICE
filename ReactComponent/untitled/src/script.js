const { useState, useEffect } = React;

function UserCard() {
  const defaultName = "Иван";
  const [name, setName] = useState(defaultName);

  useEffect(() => {
    console.log("Имя пользователя изменилось:", name);
  }, [name]);

  const handleReset = () => {
    setName(defaultName);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "250px" }}>
      <h3>Карточка пользователя</h3>
      <p>Имя: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <br />
      <button onClick={handleReset} style={{ marginTop: "10px" }}>
        Сбросить
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<UserCard />);
