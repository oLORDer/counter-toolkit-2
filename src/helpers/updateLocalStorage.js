
const updateLocalStorage = (value) => 
localStorage.setItem("localCount", JSON.stringify(value))

export default updateLocalStorage;