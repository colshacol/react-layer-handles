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
  const topHandleRef = React.useRef();
  const rightHandleRef = React.useRef();
  const bottomHandleRef = React.useRef();
  const leftHandleRef = React.useRef();
  const topRightHandleRef = React.useRef();
  const topLeftHandleRef = React.useRef();
  const bottomRightHandleRef = React.useRef();
  const bottomLeftHandleRef = React.useRef();

  const isSelected = layerId => {
    return selectedLayerId === layerId;
  };

  const value = {
    selectedLayerId,
    setSelectedLayerId,
    layerBounds,
    isSelected,
    topHandleRef,
    rightHandleRef,
    bottomHandleRef,
    leftHandleRef,
    topRightHandleRef,
    topLeftHandleRef,
    bottomRightHandleRef,
    bottomLeftHandleRef,
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
  handleOffset: 8,
  cornerHandleWidth: 8,
  cornerHandleHeight: 8,
  borderHandleThickness: 1
};

export const useLayerHandles = () => {
  return React.useContext(Context);
};
