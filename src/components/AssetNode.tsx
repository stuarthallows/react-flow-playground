import { FC } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";

export type AssetData = {
  label: string;
  type: string;
  /** True if the asset acts as the input into another asset. */
  input?: boolean;
  /** True if the asset acts as the output from another asset. */
  output?: boolean;
}

export const AssetNode: FC<NodeProps<AssetData>> = ({ data }: NodeProps<AssetData>) => {
  return (
    <div className="bg-slate-600 text-stone-50 rounded px-2 py-1 border-gray-500 border-2">
      {data.output && <Handle type="target" position={Position.Left} />}
      <div>
        <div className="bg-slate-800 rounded text-center">
          {data.type}
        </div>
        {data.label}
      </div>
      {data.input && <Handle type="source" position={Position.Right} />}
    </div>
  );
}
