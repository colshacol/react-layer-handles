# react-layer-handles

![Example GIF](/sample.gif)

## Usage

```js
import { LayerHandlesProvider, useLayerHandles } from "react-layer-handles";
```

```js
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
```

```js
const TEXT_LAYER_STYLE = {
  position: "absolute",
  top: 222,
  left: 222,
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
```

## Props

### LayerHandlesProvider Props

<table>
  <thead>
    <tr>
      <th>Prop Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        dataAttribute
      </td>
      <td>
        string
      </td>
      <td>
        false
      </td>
      <td>
        'data-layer-id'
      </td>
    </tr>
    <tr>
      <td>
        handleBorderRadius
      </td>
      <td>
        number
      </td>
      <td>
        false
      </td>
      <td>
        0
      </td>
    </tr>
    <tr>
      <td>
        handleOffsetX
      </td>
      <td>
        number
      </td>
      <td>
        false
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td>
        handleOffsetY
      </td>
      <td>
        number
      </td>
      <td>
        false
      </td>
      <td>
        8
      </td>
    </tr>
    <tr>
      <td>
        handleWidth
      </td>
      <td>
        number
      </td>
      <td>
        false
      </td>
      <td>
        8
      </td>
    </tr>
        <tr>
      <td>
        handleHeight
      </td>
      <td>
        number
      </td>
      <td>
        false
      </td>
      <td>
        8
      </td>
    </tr>
  </tbody>
</table>

## TODO

- [ ] Mutation observer to keep handles intact if a layer resizes.
- [ ] More styling options / classNames.
- [ ] Tests... of course.
- [ ] Publish to npm.
