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

**Type**: `string`
**Required**: false  
**Default**: `'data-layer-id'`

Used to select elements from the DOM to create handles around.

#### handleOffset

**Type**: `number`
**Required**: false  
**Default**: `8`

Pushes the handles away from the content they are related to. For example, with the default value of `8`, the top left handle will be 8px above and 8px left of the top/left coordinates of the content it is attached to. The bottom right handle will be pushed to the right 8px and down 8px from the bottom right corner of the content it is attached to.

#### cornerHandleWidth

**Type**: `number`
**Required**: false  
**Default**: `8`

Controls the width of the topLeft, topRight, bottomRight, and bottomLeft corner handles.

#### cornerHandleHeight

**Type**: `number`
**Required**: false  
**Default**: `8`

Controls the height of the topLeft, topRight, bottomRight, and bottomLeft corner handles.

#### borderHandleThickness

**Type**: `number`
**Required**: false  
**Default**: `1`

Controls the thickness of the top, right, bottom, and left handles.

---

## Values

### useLayerHandles (hook)

The `useLayerHandles` hook gives you access to the main store that powers `react-layer-handles`. The following descriptions are what values/methods you can access when using this hook.

#### selectedLayerId

**Type**: `string`

The id of the currently selected layer. If there is no selected layer, `undefined`.

#### setSelectedLayerId

**Type**: `function(id: string): undefined`

A method to set the currently selected layer id. Returns nothing.

#### isSelected

**Type**: `function(id: string): boolean`

A method to check if a specific id is currently selected. Returns a `boolean`, true or false.

#### layerBounds

**Type**: `Object`

The currently selected element's `getBoundingRectClient` values with some additional values as helpers. (`top`, `left`, `right`, `bottom`, `height`, `width`, etc.)

#### topHandleRef

**Type**: `ref`

A React `ref` for the top handle. Can be used to add event listeners, etc.

#### rightHandleRef

**Type**: `ref`

A React `ref` for the right handle. Can be used to add event listeners, etc.

#### bottomHandleRef

**Type**: `ref`

A React `ref` for the bottom handle. Can be used to add event listeners, etc.

#### leftHandleRef

**Type**: `ref`

A React `ref` for the left handle. Can be used to add event listeners, etc.

#### topRightHandleRef

**Type**: `ref`

A React `ref` for the top right handle. Can be used to add event listeners, etc.

#### topLeftHandleRef

**Type**: `ref`

A React `ref` for the top left handle. Can be used to add event listeners, etc.

#### bottomRightHandleRef

**Type**: `ref`

A React `ref` for the bottom right handle. Can be used to add event listeners, etc.

#### bottomLeftHandleRef

**Type**: `ref`

A React `ref` for the bottom left handle. Can be used to add event listeners, etc.

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
