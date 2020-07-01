// This is your generic reusable hook.
import React from 'react';

export const useHandleChange = (initial) => {
  const [value, setValue] = React.useState(initial);

  const handleChange = React.useCallback(
    (event) => setValue(event ? event.target.value : ''), // This is the meaty part. ***
    []
  );

  return [value, handleChange];
};
