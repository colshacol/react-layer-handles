import * as React from "react";
import { Portal } from "react-portal";
import { useLayerHandles } from "./store";

const getCornerHandleStyles = store => {
  return {
    width: store.cornerHandleWidth,
    height: store.cornerHandleHeight,
    minWidth: store.cornerHandleWidth,
    minHeight: store.cornerHandleHeight,
    maxWidth: store.cornerHandleWidth,
    maxHeight: store.cornerHandleHeight,
    border: "1px solid black",
    position: "absolute"
  };
};

const getEdgeHandleStyles = (store, which) => {
  if (which === "x") {
    return {
      position: "absolute",
      height: store.layerBounds.height,
      background: "black",
      width: store.borderHandleThickness
    };
  }

  return {
    position: "absolute",
    width: store.layerBounds.width,
    background: "black",
    height: store.borderHandleThickness
  };
};

const getTopLeftHandleStyle = store => {
  return {
    ...getCornerHandleStyles(store),
    top: store.layerBounds.top - store.handleOffset,
    left: store.layerBounds.left - store.handleOffset
  };
};

const getTopRightHandleStyle = store => {
  return {
    ...getCornerHandleStyles(store),
    top: store.layerBounds.top - store.handleOffset,
    left:
      store.layerBounds.left +
      store.layerBounds.width +
      store.handleOffset -
      store.cornerHandleWidth
  };
};

const getBottomRightHandleStyle = store => {
  const baseOffsetX = store.layerBounds.width - store.handleWidth;
  const baseOffsetY = store.layerBounds.height - store.handleHeight;

  return {
    ...getCornerHandleStyles(store),
    top:
      store.layerBounds.top +
      store.layerBounds.height -
      store.cornerHandleHeight +
      store.handleOffset,
    left:
      store.layerBounds.left +
      store.layerBounds.width +
      store.handleOffset -
      store.cornerHandleWidth
  };
};

const getBottomLeftHandleStyle = store => {
  const baseOffsetY = store.layerBounds.height - store.handleHeight;

  return {
    ...getCornerHandleStyles(store),
    top:
      store.layerBounds.top +
      store.layerBounds.height +
      store.handleOffset -
      store.cornerHandleHeight,
    left: store.layerBounds.left - store.handleOffset
  };
};

const getTopHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "y"),
    top: store.layerBounds.top - store.handleOffset / 2,
    left: store.layerBounds.left
  };
};

const getRightHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "x"),
    top: store.layerBounds.top,
    left:
      store.layerBounds.left + store.layerBounds.width + store.handleOffset / 2
  };
};

const getBottomHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "y"),
    top:
      store.layerBounds.top + store.layerBounds.height + store.handleOffset / 2,
    left: store.layerBounds.left
  };
};

const getLeftHandleStyle = store => {
  return {
    ...getEdgeHandleStyles(store, "x"),
    top: store.layerBounds.top,
    left: store.layerBounds.left - store.handleOffset / 2
  };
};

export const LayerHandles = props => {
  const store = useLayerHandles();

  return (
    <Portal>
      <div
        ref={store.topLeftHandleRef}
        className="_reactLayerHandle _topLeftReactLayerHandle"
        style={getTopLeftHandleStyle(store)}
      />
      <div
        ref={store.topRightHandleRef}
        className="_reactLayerHandle _topRightReactLayerHandle"
        style={getTopRightHandleStyle(store)}
      />
      <div
        ref={store.bottomRightHandleRef}
        className="_reactLayerHandle _bottomRightReactLayerHandle"
        style={getBottomRightHandleStyle(store)}
      />
      <div
        ref={store.bottomLeftHandleRef}
        className="_reactLayerHandle _bottomLeftReactLayerHandle"
        style={getBottomLeftHandleStyle(store)}
      />

      <div
        ref={store.topHandleRef}
        className="_reactLayerHandle _topReactLayerHandle"
        style={getTopHandleStyle(store)}
      />
      <div
        ref={store.rightHandleRef}
        className="_reactLayerHandle _rightReactLayerHandle"
        style={getRightHandleStyle(store)}
      />
      <div
        ref={store.bottomHandleRef}
        className="_reactLayerHandle _bottomReactLayerHandle"
        style={getBottomHandleStyle(store)}
      />
      <div
        ref={store.leftHandleRef}
        className="_reactLayerHandle _leftReactLayerHandle"
        style={getLeftHandleStyle(store)}
      />
    </Portal>
  );
};
