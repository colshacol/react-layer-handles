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
  const isSelected = layers.isSelected(props.layerId);

  // toggle layerHandles when this component is clicked.
  const onClick = () => {
    if (!isSelected) {
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
      handleOffset={8}
      cornerHandleWidth={8}
      cornerHandleHeight={8}
      borderHandleThickness={1}
    >
      <div className="App">
        <Text layerId="01234" />
      </div>
    </LayerHandlesProvider>
  );
};
