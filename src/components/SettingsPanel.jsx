import { memo, useEffect, useState } from "react";

export default memo(function SettingsPanel({ node, updateLabel, setSelectedNodes }) {
  const [updateMessage, setUpdateMessage] = useState(node?.data?.label);

  useEffect(() => {
    setUpdateMessage(node?.data?.label);
  }, [node]);

  return (
    <div>
      <div className="flex justify-around p-2 border-b ">
        <div>
          <button
            onClick={() => setSelectedNodes([])}
            className="flex items-center text-blue-500 -ml-8"
          >
            ← 
          </button>
        </div>

        <div className="flex justify-center">
          <h3 className="flex items-center font-semibold">Message</h3>
        </div>

        <div></div>
      </div>
      

      <div className="p-2 bg-white border-b w-full">
        
        <label className="block mb-1 text-sm">Text</label>
        <textarea
          value={updateMessage}
          onChange={(e) => {
            setUpdateMessage(e.target.value);
            updateLabel(node.id, e.target.value);
          }}
          className="w-full h-24 p-2 border rounded resize-none"
        />
      </div>
    </div>
  );
});
