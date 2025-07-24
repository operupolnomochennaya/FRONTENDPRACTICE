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

  return /*#__PURE__*/(
    React.createElement("div", { style: { border: "1px solid gray", padding: "10px", width: "250px" } }, /*#__PURE__*/
    React.createElement("h3", null, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/
    React.createElement("p", null, "\u0418\u043C\u044F: ", name), /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      value: name,
      onChange: e => setName(e.target.value),
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F" }), /*#__PURE__*/

    React.createElement("br", null), /*#__PURE__*/
    React.createElement("button", { onClick: handleReset, style: { marginTop: "10px" } }, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C")));




}

ReactDOM.createRoot(document.getElementById('root')).render( /*#__PURE__*/React.createElement(UserCard, null));