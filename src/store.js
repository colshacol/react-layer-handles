import * as React from "react";
import { LayerHandlesPortal } from "./LayerHandlesPortal";

const Context = React.createContext();

const getRectJSON = element => {
  const rect = element.getBoundingClientRect();
  return JSON.parse(JSON.stringify(rect));
};

const getElementBounds = (dataAttribute, layerId) => {
  if (!layerId) return {};

  const selector = `[${dataAttribute}="${layerId}"]`;
  const element = document.querySelector(selector);
  return getRectJSON(element);
};

export const LayerHandlesProvider = props => {
  const [selectedLayerId, setSelectedLayerId] = React.useState("");
  const layerBounds = getElementBounds(props.dataAttribute, selectedLayerId);

  const isSelected = layerId => {
    return selectedLayerId === layerId;
  };

  const value = {
    selectedLayerId,
    setSelectedLayerId,
    layerBounds,
    isSelected,
    ...props
  };

  return (
    <Context.Provider value={value}>
      <React.Fragment>
        {props.children}
        <LayerHandlesPortal />
      </React.Fragment>
    </Context.Provider>
  );
};

LayerHandlesProvider.defaultProps = {
  dataAttribute: "data-layer-id",
  handleBorderRadius: 0,
  handleOffsetX: 8,
  handleOffsetY: 8,
  handleWidth: 8,
  handleHeight: 8
};

export const useLayerHandles = () => {
  return React.useContext(Context);
};
