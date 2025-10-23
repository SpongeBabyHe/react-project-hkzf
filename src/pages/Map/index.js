import React from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default class MapPage extends React.Component {
  render() {
    return (
      <div id="map" style={{ width: '100%', height: '100vh' }}>
        <APIProvider
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'AIzaSyDxLIQf8VYoMAweP8WYW3HNKLPY2RhFgJc'}
          onLoad={() => console.log('Maps API has loaded.')}
        >
          <Map
            defaultZoom={13}
            defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
            onCameraChanged={(ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }
          />
        </APIProvider>
      </div>
    );
  }
}