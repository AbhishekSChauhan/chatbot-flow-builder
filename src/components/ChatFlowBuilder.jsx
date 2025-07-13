import { useCallback } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  addEdge,
  useEdgesState,
  useNodesState,
  Panel,
  Position,
  MarkerType, 
  useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import MessageNode from './MessageNode';

const nodeTypes = { messageNode: MessageNode };

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge({...params, markerEnd: { type: MarkerType.ArrowClosed }}, edgesSnapshot)),
    [],
  );

  // Drop Over
  const onDragOver = useCallback(e => e.preventDefault(), []);

  const onDrop = useCallback(e => {
    e.preventDefault();
    const type = e.dataTransfer.getData('application/reactflow');
    
    if(!type) return;

    const position = screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
    });

    // add node on drop
    setNodes(node => [...node, {
      id: crypto.randomUUID(), 
      type,
      position: position,
      data: { label: `Test Message ${node.filter((n) => n.type === 'messageNode').length + 1}` }
    }]);

  }, [screenToFlowPosition,setNodes]);

  return (
    <div className='w-full h-full'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        // edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        panOnScroll
        selectionOnDrag
        onDrop={onDrop}
        onDragOver={onDragOver}
        // onEdgeClick={onEdgeClick}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
