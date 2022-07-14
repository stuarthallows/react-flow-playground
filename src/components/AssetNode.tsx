import { FC, Fragment } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";

export type AssetData = {
  label: string;
  type: string;
}

export const AssetNode: FC<NodeProps<AssetData>> = ({ data }: NodeProps<AssetData>) => {
  return (
    <Fragment>
      <Handle type="target" position={Position.Left} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </Fragment>
  );
}
