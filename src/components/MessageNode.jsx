import { memo } from 'react';
import { Handle, Position, useReactFlow } from '@xyflow/react';

const MessageNode = memo(({id,data}) => {

  const { getEdges } = useReactFlow();

  // Only allow 1 outgoing connection per source handle
  const isValidSourceConnection = () => {
    const edges = getEdges();
    const hasOutgoing = edges.some((e) => e.source === id);
    return !hasOutgoing; 
  };

  

  return (
    <div className="p-2 bg-white border rounded shadow text-[14px]">
      <Handle type="target" position={Position.Left} />
      <div>{data.label}</div>
      <Handle
        type="source"
        position={Position.Right}
        isValidConnection={isValidSourceConnection}
      />
    </div>
  )});

export default MessageNode;
