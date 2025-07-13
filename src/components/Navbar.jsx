import { useReactFlow } from "@xyflow/react";
import toast from 'react-hot-toast';

export default function Navbar() {
  const { getNodes, getEdges } = useReactFlow();

  // Validate and save flow
  const handleSave = () => {
    const nodes = getNodes();
    const edges = getEdges();

    // console.log(nodes.map((node)=>edges.some((edge)=>edge.target === node.id || edge.source === node.id)))
    // console.log(edges.map(e => e.target))
    
    if (nodes.length > 1) {
      const targetNodeIds = [...new Set(edges.map(e => e.target))]
      const nodesWithoutEdges = nodes.filter(
        (node) => !targetNodeIds.includes(node.id)
      );

      if (nodesWithoutEdges.length > 1) {
        toast.error("Cannot Save Flow")
        return;
      }
    }
    
    // const flowData = { nodes, edges };
    toast.success('Flow saved')
  };

  return (
    <div className="flex justify-between p-4 bg-gray-100 border-b">
      <h1 className="text-lg font-semibold">Chatbot Flow</h1>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
}
