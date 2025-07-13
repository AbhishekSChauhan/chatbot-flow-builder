import { memo } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";

const MessageNode = memo(({ id, data }) => {
  const { getEdges } = useReactFlow();

  // Allow only 1 outgoing edge
  const isValidSourceConnection = () => {
    const edges = getEdges();
    return !edges.some((e) => e.source === id);
  };

  return (
    <div className="max-w-36 rounded-lg border text-[14px] border-gray-300 shadow-md bg-white">
      <div className="flex items-center justify-between p-1 rounded-t-lg bg-green-100 border-b border-gray-200">
        <div className="flex items-center space-x-1 font-medium">
          <span>Send Message</span>
        </div>
        
      </div>

      <div className="p-2 text-gray-700 text-sm">
        {data?.label}
      </div>

      <Handle
        type="target"
        position={Position.Left}
      />
      <Handle
        type="source"
        position={Position.Right}
        isValidConnection={isValidSourceConnection}
      />
    </div>
  );
});

export default MessageNode;
