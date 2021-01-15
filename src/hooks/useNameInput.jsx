import { useState } from 'react';

export const useNameInput = (initialValue) => {
  const [name, setName] = useState(initialValue);

  return [name, setName];
};
