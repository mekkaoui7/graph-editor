import { useState, useCallback } from 'react';
import ReactFlow, { Controls,Background,   applyNodeChanges,  applyEdgeChanges,  addEdge, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';


import Dropdown from './Dropdown';
import ClickableText from './ClickableText';
import Btn from './Btn';

const initialNodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: '!' },
    position: { x: 100, y: 200 },
  },
];

const initialEdges = [ ];

/*example of differents edges

straight edge:
  {
    id: 'edges-2-3',
    source: '2',
    target: '3',
    type: 'straight',
    label: 'straight edge',
  },

animated edge:
    {
    id: 'edges-2-3',
    source: '2',
    target: '3',
    animated: true,
    label: 'animated styled edge',
    style: { stroke: 'red' },
  },
edge with arrow and label styled

 {
  id: 'edges-2-3',
  source: '2',
  target: '3',
  label: 'styled label',
  labelBgPadding: [8, 4],
  labelBgBorderRadius: 4,
  labelStyle: { fill: 'red', color: 'yellow' , fontWeight: 700 },
  labelBgStyle: { fill:'yellow'},
  markerEnd: {
    type: MarkerType.Arrow,
  },
},
*/


const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeCount, setNodeCount] = useState(initialNodes.length);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


  const addNode = () => {
    const newNode = {
      id: `${nodeCount + 1}`,
      data: { label: `Node ${nodeCount + 1}` },
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setNodeCount(nodeCount + 1);
  };

    return ( 
      
     <div className="grid grid-cols-4 pt-1 h-full">
     <div className='col-start-1 col-end-2'>
      <div className='flex flex-col  h-5/6 '>
      <Dropdown  title='toolbar'> 
        
       <Btn onClick={addNode} text="add node"/> 
        
      </Dropdown>
      <Dropdown  title='properties'>
        <p>not yet</p>
      </Dropdown>
     
      </div>
      <div className='bg-neutral-800  h-1/6'>
        <div className='flex flex-col pl-2'>
        <h1 className='text-white font-bold text-xl pt-1'>Contact us</h1>
        <ClickableText link="https://github.com/mekkaoui7" text="Github" />
        <ClickableText link="https://www.linkedin.com/in/ahmed-mekkaoui-3091391aa/" text="Linkdin" />
        
        </div>
        <p className='text-white  pl-2 '>ahmed mekkaoui — Copyright © 2022 .All right reserved</p>
      </div>

      
     </div>
     <div className='col-start-2 col-span-3'>
     <div className='h-full'>
      <ReactFlow  
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
        >
        <Background className='bg-gray-100' />
        <Controls />
      </ReactFlow>
    </div>
     </div>
   </div> 
     
     );
}
 
export default Flow;