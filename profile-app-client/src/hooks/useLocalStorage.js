import { useState, useEffect } from 'react';
// Creamos un custom hook para reutilizar cuantas veces queramos la logica de almacenar una propiedad del estado de nuestros componentes en local storage, asi persisten aun que se recargue la pagina
function useLocalStorage(initialValue, key) {
  // revisamos que exista una propiedad con ese nombre que tenga contenido
  const stored = localStorage.getItem(key);
  // si hay contenido lo parseamos o si no definimos initial al valor proovisto por los params
  const initial = stored ? JSON.parse(stored) : initialValue;
  // Nuestro custom hook lleva el registro de su propia propiedad y con el cambio en ella, guardamos en local storage el nuevo valor (gracias al useEffect)
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  // Si el valor cambia gracias al setValue, nuestro useEffect se dispara, sincronizando asi el estado con nuestro local storage.

  return [value, setValue];
}

export default useLocalStorage;
