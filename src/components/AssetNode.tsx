import { FC } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import { FaRegMeh, FaRegMoon, FaRegStar, FaYinYang, FaRegLemon, FaRegFlag, FaWaveSquare } from 'react-icons/fa';

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
      {(data.output ?? true) && <Handle type="target" position={Position.Left} />}
      <div>
        <div className="bg-slate-800 rounded flex justify-center p-2">
          {data.type === 'bn' && <FaRegStar />}
          {data.type === 'dp' && <FaRegMoon />}
          {data.type === 'ext' && <FaRegMeh />}
          {data.type === 'cr' && <FaRegFlag />}
          {data.type === 'cv' && <FaWaveSquare />}
          {data.type === 'fd' && <FaYinYang />}
          {data.type === 'rb' && <FaRegLemon />}
        </div>
        <div className="font-semibold">
          {data.label}
        </div>
      </div>
      {(data.input ?? true) && <Handle type="source" position={Position.Right} />}
    </div>
  );
}
