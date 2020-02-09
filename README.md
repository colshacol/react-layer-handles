# react-layer-handles [WIP]

![Example GIF](/sample.gif)

## Overview

`react-layer-handles` is a simple utility that allows you to add handles to your React components. It is meant to provide just the basic functionality of showing handles and to be extended with the `userLayerHandles` hook to provide more features.

## Install

```sh
yarn add react-layer-handles
```

## Usage

```js
import { LayerHandlesProvider, useLayerHandles } from "react-layer-handles";
```

```js
export const App = () => {
  return (
    <LayerHandlesProvider
      // default props show here
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
```

```js
// just to show the component can have layer handles
// attached no matter where it is positioned.
const TEXT_LAYER_STYLE = {
  position: "absolute",
  top: 222,
  left: 222,
  background: "rgba(0,0,0,0.1)"
};

const Text = props => {
  // subscribe to the store.
  const layers = useLayerHandles();
  const isSelected = layers.isSelected(props.layerId);

  // toggle layerHandles on when this component is clicked.
  const onClick = () => {
    if (!isSelected) {
      layers.setSelectedLayerId(props.layerId);
    }
  };

  // react-layer-handles uses the data-layer-id attribute by default.
  // be sure to give this attribute to your elements or it will not work.
  return (
    <p onClick={onClick} data-layer-id={props.layerId} style={TEXT_LAYER_STYLE}>
      Foo bar baz.
    </p>
  );
};
```

## Props

### LayerHandlesProvider Props

#### dataAttribute

**Type**: string  
**Required**: false  
**Default**: `'data-layer-id'`

Used to select elements from the DOM to create handles around.

#### handleOffset

**Type**: number  
**Required**: false  
**Default**: `8`

Pushes the handles away from the content they are related to. For example, with the default value of `8`, the top left handle will be 8px above and 8px left of the top/left coordinates of the content it is attached to. The bottom right handle will be pushed to the right 8px and down 8px from the bottom right corner of the content it is attached to.

#### cornerHandleWidth

**Type**: number  
**Required**: false  
**Default**: `8`

Controls the width of the topLeft, topRight, bottomRight, and bottomLeft corner handles.

#### cornerHandleHeight

**Type**: number  
**Required**: false  
**Default**: `8`

Controls the height of the topLeft, topRight, bottomRight, and bottomLeft corner handles.

#### borderHandleThickness

**Type**: number  
**Required**: false  
**Default**: `1`

Controls the thickness of the top, right, bottom, and left handles.

## Styling

Each handle has a shared className, `_reactLayerHandle` that can be used to style the handles yourself. In addition to this shared className, the following classNames are given to the corresponding handles and can also be manipulated with global CSS or JS.

`_topLeftReactLayerHandle`  
`_topRightReactLayerHandle`  
`_bottomRightReactLayerHandle`  
`_bottomLeftReactLayerHandle`  
`_topReactLayerHandle`  
`_rightReactLayerHandle`  
`_bottomReactLayerHandle`  
`_leftReactLayerHandle`
