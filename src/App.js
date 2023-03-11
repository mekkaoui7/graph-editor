import { useRef, useEffect, useState } from 'react';
import Flow  from './Flow'



function App() {

  //height function
  const elementRef = useRef(null);
  const [remainingHeight, setRemainingHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      const elementHeight = elementRef.current.getBoundingClientRect().height;
      setRemainingHeight(window.innerHeight - elementHeight);
    }
  }, []);
  return (
    <div>
      <div className='flex bg-neutral-800 px-3 py-4 ' ref={elementRef}>
        <p className='text-3xl font-climate text-slate-100'>graph editor</p>
      </div>
      <div  style={{ height: remainingHeight }}>
      <Flow/>
      </div>
      
    </div>
  );
}

export default App;
