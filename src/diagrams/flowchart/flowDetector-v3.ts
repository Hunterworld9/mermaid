import type { DiagramDetector } from '../../diagram-api/detectType';

export const flowDetectorV3: DiagramDetector = (txt, config) => {
  // If we have confgured to use dagre-wrapper then we should return true in this function for graph code thus making it use the new flowchart diagram
  if (config?.flowchart?.defaultRenderer === 'cytoscape' && txt.match(/^\s*graph/) !== null)
    return true;
  return txt.match(/^\s*flowchart/) !== null;
};
