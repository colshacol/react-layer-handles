import * as React from "react";
import { LayerHandles } from "./LayerHandles";
import { useLayerHandles } from "./store";

export const LayerHandlesPortal = props => {
  const layerHandles = useLayerHandles();
  return layerHandles.selectedLayerId ? <LayerHandles /> : null;
};

LayerHandlesPortal.defaultProps = {
  selector: ""
};
