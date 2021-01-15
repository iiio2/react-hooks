import { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div className='container'>
      {isToggled && <h3>hello,world</h3>}
      <button className='btn btn-dark' onClick={() => setToggle(!isToggled)}>
        Toggle
      </button>
    </div>
  );
};

export default Toggle;
