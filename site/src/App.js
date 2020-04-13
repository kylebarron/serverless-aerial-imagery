import React from "react";
import "./App.css";
import ReactMapGL, { Source, Layer } from "react-map-gl";

class App extends React.Component {
  state = {
      viewport: {
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };

  landsatUrl = (pan = false) => {
    const params = {
      bands: "4,3,2",
      color_ops: "gamma RGB 3.5, saturation 1.7, sigmoidal RGB 15 0.35",
    };
    if (pan) {
      params.pan = true;
    }
    const searchParams = new URLSearchParams(params);
    let baseUrl =
      "https://landsat-lambda.kylebarron.dev/tiles/229bc0ed88ac7f39effdb554efa0959766e41bb3948754faba13f74f/{z}/{x}/{y}@2x.jpg?";
    baseUrl += searchParams.toString();
    return baseUrl;

  }

  naipUrl = () => {
    const params = {
      url:
        "dynamodb://us-west-2/7610d6d77fca346802fb21b89668cb12ef3162a31eb71734a8aaf5de",
      color_ops: "sigmoidal RGB 4 0.5, saturation 1.25",
    };
    const searchParams = new URLSearchParams(params);
    let baseUrl = "https://naip-lambda.kylebarron.dev/{z}/{x}/{y}@2x.jpg?";
    baseUrl += searchParams.toString();
    return baseUrl;
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapOptions={{ hash: true }}
        mapStyle="https://raw.githubusercontent.com/kylebarron/fiord-color-gl-style/master/style.json"
        onViewportChange={(viewport) => this.setState({ viewport })}
      >
        <Source
          id="naip-lambda"
          type="raster"
          minzoom={12}
          maxzoom={16}
          tiles={[this.naipUrl()]}
          tileSize={512}
        >
          <Layer id="naip-lambda-layer" type="raster" minzoom={12} />
        </Source>

        <Source
          id="landsat-lambda"
          type="raster"
          tileSize={512}
          tiles={[this.landsatUrl()]}
          minzoom={7}
          maxzoom={11}
        >
          <Layer id="landsat-lambda-layer" type="raster" maxzoom={11} />
        </Source>

        <Source
          id="landsat-lambda-pan"
          type="raster"
          tileSize={512}
          tiles={[this.landsatUrl(true)]}
          minzoom={11}
          maxzoom={12}
        >
          <Layer id="landsat-lambda-layer-pan" type="raster" maxzoom={12} />
        </Source>
      </ReactMapGL>
    );
  }
}

export default App;
