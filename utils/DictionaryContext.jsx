import { createContext, useContext, useEffect, useState } from 'react';

// Create our theme context using createContext()

export const DictionaryContext = createContext();

const { Provider } = DictionaryContext;

// Create a custom hook that allows easy access to our NameContext values
export const useDictionary = () => useContext(DictionaryContext);



// Creating our theme provider. Accepts an argument of "props"
export default function DictionaryProvider(props) {
  const [active, setActive] = useState(undefined)
  const [state, dispatch] = useState([]);


  useEffect(() => {
     fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/dictionaries')
      .then((response) => response.json())
      .then((data) => {
        dispatch(data)
        setActive(data[0])
      })
  },[])

    ;

  return <Provider value={[state, dispatch, active, setActive]}
    {...props}
  />;
}