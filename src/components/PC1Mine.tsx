import { FC } from 'react';
import { Edge, MarkerType, Node } from 'react-flow-renderer';

import { AssetData } from './AssetNode';
import { AutoLayout } from './AutoLayout';

export const nodes: Node<AssetData>[] = [
  {
    id: 'ext-106',
    data: { label: 'EXT-106', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset',
  },
  {
    id: 'ext-108',
    data: { label: 'EXT-108', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-110',
    data: { label: 'EXT-110', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-112',
    data: { label: 'EXT-112', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-114',
    data: { label: 'EXT-114', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },  
  {
    id: 'ext-116',
    data: { label: 'EXT-116', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'ext-118',
    data: { label: 'EXT-118', type: 'ext', output: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-101',
    data: { label: 'DP-101', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-102',
    data: { label: 'DP-102', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-103',
    data: { label: 'DP-103', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'dp-104',
    data: { label: 'DP-104', type: 'dp' },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
  {
    id: 'bn-3001',
    data: { label: 'BN-3001', type: 'bn', input: false },
    position: { x: 0, y: 0 },
    type: 'asset'
  },
];

export const edges: Edge[] = [
  {
    id: '1',
    source: 'ext-106',
    target: 'dp-101'
  },
  {
    id: '2',
    source: 'ext-108',
    target: 'dp-102'
  },
  {
    id: '3',
    source: 'ext-110',
    target: 'dp-102',
  },
  {
    id: '4',
    source: 'ext-112',
    target: 'dp-103',
  },
  {
    id: '5',
    source: 'ext-114',
    target: 'dp-103',
  },
  {
    id: '6',
    source: 'ext-116',
    target: 'dp-104',
  },
  {
    id: '7',
    source: 'ext-118',
    target: 'dp-104',
  },
  {
    id: '8',
    source: 'dp-101',
    target: 'bn-3001',
  },
  {
    id: '9',
    source: 'dp-102',
    target: 'bn-3001',
  },
  {
    id: '10',
    source: 'dp-103',
    target: 'bn-3001',
  },
  {
    id: '11',
    source: 'dp-104',
    target: 'bn-3001',
  },
];

export const PC1Mine: FC = () => <AutoLayout nodes={nodes} edges={edges} />;
