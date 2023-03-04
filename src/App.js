import { useRef, useEffect, useState } from 'react';
import Flow  from './Flow'
import Dropdown from './Dropdown';
import ClickableText from './ClickableText';


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

     <div className="grid grid-cols-4 pt-1" style={{ height: remainingHeight }}>
       <div className='col-start-1 col-end-2'>
        <div className='flex flex-col  h-5/6 '>
        <Dropdown className='' title='toolbar'> 
          <p >not prepared yet</p>
          
        </Dropdown>
        <Dropdown className='' title='properties'>
          <p>not yet</p>
        </Dropdown>
       
        </div>
        <div className='bg-neutral-800  h-1/6'>
          <div className='flex flex-col pl-2'>
          <h1 className='text-white font-bold text-xl pt-1'>Contact us</h1>
          <ClickableText link="https://github.com/mekkaoui7" text="Github" />
          <ClickableText link="https://www.linkedin.com/in/ahmed-mekkaoui-3091391aa/" text="Linkdin" />
          
          </div>
          <p className='text-white  pl-2 pt-3'>ahmed mekkaoui — Copyright © 2022 .All right reserved</p>
        </div>

        
       </div>
       <div className='col-start-2 col-span-3'>
         <Flow/>
       </div>
     </div>  
    </div>
  );
}

export default App;
