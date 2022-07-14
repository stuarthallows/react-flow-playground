import { FC } from 'react';
import { Edge, Node } from 'react-flow-renderer';

import { AssetData } from './AssetNode';
import { AutoLayout } from './AutoLayout';

export const nodes: Node<AssetData>[] = [
  {
    id: 'fd-3021',
    data: { label: 'FD-3021', type: 'fd', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'rb-3021',
    data: { label: 'RB-3021', type: 'rb' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'cr-3021',
    data: { label: 'CR-3021', type: 'cr' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'bn-3121',
    data: { label: 'BN-3121', type: 'bn' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'fd-3031',
    data: { label: 'FD-3031', type: 'fd' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'cv-3021',
    data: { label: 'CV-3021', type: 'cv' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'cv-3025',
    data: { label: 'CV-3025', type: 'cv', input: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  }
];

export const edges: Edge[] = [
  {
    id: '1',
    source: 'fd-3021',
    target: 'rb-3021',
  },
  {
    id: '2',
    source: 'rb-3021',
    target: 'cr-3021',
  },
  {
    id: '3',
    source: 'cr-3021',
    target: 'bn-3121',
  },
  {
    id: '4',
    source: 'bn-3121',
    target: 'fd-3031',
  },
  {
    id: '5',
    source: 'fd-3031',
    target: 'cv-3021',
  },
  {
    id: '6',
    source: 'cv-3021',
    target: 'cv-3025',
  }
];

export const PC1CX: FC = () => <AutoLayout nodes={nodes} edges={edges} />;