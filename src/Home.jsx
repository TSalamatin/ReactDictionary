import { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Home = () => {
  const [dictionaries, setDictionaries] = useState([]);

  useEffect(() => {
    fetch('https://1rnoszgn46.execute-api.us-east-1.amazonaws.com/dictionaries')
      .then((data) => data.json())
      .then((data) => setDictionaries(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Stack direction='row' spacing={1}>
      {dictionaries &&
        dictionaries.map((d, index) => <Chip label={d.title} key={index} />)}
    </Stack>
  );
};

export default Home;
