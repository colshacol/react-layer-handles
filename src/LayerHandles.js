import * as React from "react";
import { Portal } from "react-portal";
import { useLayerHandles } from "./store";

const getCornerHandleStyles = store => {
  return {
    width: 8,
    height: 8,
    minWidth: 8,
    minHeight: 8,
    maxWidth: 8,
    maxHeight: 8,
    border: "1px solid blue",
    position: "absolute",
    borderRadius: store.handleBorderRadius
  };
};

const getEdgeHandleStyles = (store, which) => {
  if (which === "x") {
    return {
      position: "absolute",
      height: store.layerBounds.height,
      background: "blue",
      width: 1
    };
  }

  return {
    position: "absolute",
    width: store.layerBounds.width,
    background: "blue",
    height: 1
  };
};

const getTopLeftHandleStyle = store => {
  return {
    ...getCornerHandleStyles(store),
    top: store.layerBounds.top - store.handleOffsetY,
    left: store.layerBounds.left - store.handleOffsetX
  };
};

const getTopRightHandleStyle = store => {
  const baseOffsetX = store.layerBounds.width - store.handleWidth;

  return {
    ...getCornerHandleStyles(store),
    top: store.layerBounds.top - store.handleOffsetY,
    left: store.layerBounds.left + baseOffsetX + store.handleOffsetX
  };
};

const getBottomRightHandleStyle = store => {
  const baseOffsetX = store.layerBounds.width - store.handleWidth;
  const baseOffsetY = store.layerBounds.height - store.handleHeight;

  return {
    ...getCornerHandleStyles(store),
    top: store.layerBounds.top + baseOffsetY + store.handleOffsetY,
    left: store.layerBounds.left + baseOffsetX + store.handleOffsetX
  };
};

const getBottomLeftHandleStyle = store => {
  const baseOffsetY = store.layerBounds.height - store.handleHeight;

  return {
    ...getCornerHandleStyles(store),
    top: store.layerBounds.top + baseOffsetY + store.handleOffsetY,
    left: store.layerBounds.left - store.handleOffsetX
  };
};

const getTopHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "y"),
    top: store.layerBounds.top - store.handleOffsetY / 2,
    left: store.layerBounds.left
  };
};

const getRightHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "x"),
    top: store.layerBounds.top,
    left:
      store.layerBounds.left + store.layerBounds.width + store.handleOffsetX / 2
  };
};

const getBottomHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "y"),
    top:
      store.layerBounds.top +
      store.layerBounds.height +
      store.handleOffsetY / 2,
    left: store.layerBounds.left
  };
};

const getLeftHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "x"),
    top: store.layerBounds.top,
    left: store.layerBounds.left - store.handleOffsetX / 2
  };
};

export const LayerHandles = props => {
  const store = useLayerHandles();

  return (
    <Portal>
      <div style={getTopLeftHandleStyle(store)} />
      <div style={getTopRightHandleStyle(store)} />
      <div style={getBottomRightHandleStyle(store)} />
      <div style={getBottomLeftHandleStyle(store)} />

      <div style={getTopHandleStyle(store)} />
      <div style={getRightHandleStyle(store)} />
      <div style={getBottomHandleStyle(store)} />
      <div style={getLeftHandleStyle(store)} />
    </Portal>
  );
};
