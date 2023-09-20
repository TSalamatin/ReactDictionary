import { Chip, Stack} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDictionary } from '../utils/DictionaryContext';

export default function DictionarySelect() {

  const [state , dispatch, active, setActive] = useDictionary()




  return (
    <div>
      <Stack direction='column' spacing={1}>
        {state &&
          state.map((d, index) => (
            <Chip
            color={d._id === active._id ? "primary" : "secondary"}
             label={d.title}
              key={index}
              onClick={() => {
                
               setActive(d)
              }}
            />
          ))}
      </Stack>
    </div>
  )
}