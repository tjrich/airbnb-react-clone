import { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import getCenter from "geolib/es/getCenter"

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState()
    
    // Transform searchResults object into the:
    //  {   latitude: 37.7577, 
    //      longitude: -122.4376
    //  }   object
    
    const coordinates = searchResults.map(result => ({ //direct return object {}
        longitude: result.long,
        latitude: result.lat
    }))
    
    const center = getCenter(coordinates)
    
    const [viewport, setViewPort] = useState({
        width: "100%", 
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })

    return (
        <ReactMapGL
            mapboxStyle="mapbox://styles/t-rich/ckuzc3nu10og414p8k75xllm9"
            mapboxApiAccessToken={process.env.mapbox_key}
            // {/* Spread operator, expands variable/object */}
            {...viewport}
            onViewportChange={(viewport) => setViewPort(viewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p  onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"
                        >
                            📍 {/* Location Pin on map*/}
                        </p>
                    </Marker>

                    {/* Show popup if we click on a Marker*/}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            className="z-20"
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ):(
                        false
                    )}
                </div>
            ))}

        </ReactMapGL>
    )
}

export default Map
