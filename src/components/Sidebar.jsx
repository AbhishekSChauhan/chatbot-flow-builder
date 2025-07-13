import { useNodes, useOnSelectionChange, useReactFlow } from "@xyflow/react";
import SettingsPanel from "./SettingsPanel";
import { useCallback, useState } from "react";

const availableNodeTypes = [
  { type: 'messageNode', label: 'Message Node' },
];

export default function Sidebar() {
  const nodes = useNodes();
  const {setNodes} = useReactFlow();
  const [selectedNodes, setSelectedNodes] = useState([]);

  const onChange = useCallback(({ nodes }) => {
    if (nodes.length > 0) {
      setSelectedNodes([nodes[0].id]);
    } else {
      setSelectedNodes([]);
    }
    // setSelectedNodes(nodes.map((node) => node.id));
    // setSelectedEdges(edges.map((edge) => edge.id));
  }, [setSelectedNodes]);

  // This hook lets us listen for changes to both node and edge selection.
  useOnSelectionChange({ onChange });

  // Drag Start
  const onDragStart = (e, type) => {
    e.dataTransfer.setData('application/reactflow', type);
  };

  // Updated message text on Nodes
  const updateLabel = useCallback((id, value) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, label: value } }
          : node
      )
    );
  }, [setNodes]);

  return (
    <aside className="w-full h-full bg-white border-l">
      {selectedNodes?.length > 0 ? (
        <SettingsPanel 
          node={nodes.find((node)=>node.id === selectedNodes[0])}
          updateLabel={updateLabel}
          setSelectedNodes={setSelectedNodes}
        />
      ) : (        
        <div className="p-2 mt-2">
          {availableNodeTypes.map(({ type, label }) => (
            <button
              key={type}
              onDragStart={(e) => onDragStart(e, type)}
              draggable
              className="block w-full p-2 mb-2 border shadow rounded-md border-blue-500 text-blue-500"
            >
              {label}
            </button>
          ))}
        </div>

      )}      
    </aside>
  );
}
