import { useState, useCallback } from 'react';
import ReactFlow, { Controls,Background,   applyNodeChanges,  applyEdgeChanges,  addEdge, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';

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

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    return ( 
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
     );
}
 
export default Flow;