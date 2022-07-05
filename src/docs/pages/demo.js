import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import Storage from '../../lib/index';

const Demo = () => {
  const [data, setData] = useState({});
  const [storage, setStorage] = useState('');
  const [decode, setDecode] = useState('');

  useEffect(() => {
    const profile = Storage.get('profile');
    setStorage(profile);
  }, []);

  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          required
          id='outlined-required'
          label='name'
          onChange={(e) => {
            const { value } = e.target;
            setData((c) => ({ ...c, name: value }));
          }}
        />
        <TextField
          required
          id='outlined-required'
          label='age'
          onChange={(e) => {
            const { value } = e.target;
            setData((c) => ({ ...c, age: value }));
          }}
          type='number'
        />
      </Box>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        autoComplete='off'
        onChange={(e) => {
          const { value } = e.target;
          setData((c) => ({ ...c, address: value }));
        }}
      >
        <TextField fullWidth label='address' id='outlined-required' />
      </Box>
      <h4>original data</h4>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>

      <h4>data decoded</h4>
      <pre>
        <code>{JSON.stringify(decode)}</code>
      </pre>

      <h4>data in storage</h4>
      <pre>
        <code>{JSON.stringify(storage)}</code>
      </pre>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            Storage.set('profile', data);
            const profile = Storage.get('profile');
            setStorage(profile);
            setDecode(localStorage.getItem('profile'));
          }}
        >
          save
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
