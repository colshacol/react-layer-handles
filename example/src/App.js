import React from "react";

import { LayerHandlesProvider, useLayerHandles } from "react-layer-handles";

import "./index.css";

const TEXT_LAYER_STYLE = {
  position: "absolute",
  top: 555,
  left: 555,
  background: "rgba(0,0,0,0.1)"
};

const Text = props => {
  // subscribe to the store.
  const layers = useLayerHandles();

  // toggle layerHandles when this component is clicked.
  const onClick = () => {
    if (!layers.isSelected(props.layerId)) {
      layers.setSelectedLayerId(props.layerId);
    }
  };

  return (
    <p onClick={onClick} data-layer-id="01234" style={TEXT_LAYER_STYLE}>
      Foo bar baz.
    </p>
  );
};

export const App = () => {
  return (
    <LayerHandlesProvider
      dataAttribute="data-layer-id"
      handleOffsetX={8}
      handleOffsetY={8}
      handleWidth={8}
      handleHeight={8}
      handleBorderRadius={12}
    >
      <div className="App">
        <Text layerId="01234" />
      </div>
    </LayerHandlesProvider>
  );
};
