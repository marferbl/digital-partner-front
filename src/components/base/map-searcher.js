import React, { useState, useRef, useEffect } from 'react';
import { Box, Input, Center } from '@chakra-ui/react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const MapSearcher = () => {
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: 40.416775, lng: -3.703790 });
    const autocompleteRef = useRef(null);
    const inputRef = useRef(null);

    const handleApiLoad = () => {
        // Check if the Places library is available
        if (!window.google || !window.google.maps || !window.google.maps.places) {
            console.error('Google Maps Places API is not available.');
            return;
        }

        console.log('Google Places API loaded.');

        // Initialize Google Places Autocomplete with restrictions
        autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current);

        // Listen for place selection
        autocompleteRef.current.addListener('place_changed', () => {
            const place = autocompleteRef.current.getPlace();


            // Check if the selected place has geometry
            if (place.geometry) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                setCoordinates({ lat, lng });
                setAddress(place.formatted_address);
                console.log('Place selected:', place.formatted_address);
            } else {
                console.log('No geometry available for the selected place.');
                alert('Selected place has no location information. Please select a valid address.');
            }
        });
    };

    return (
        <Box>
            <Input
                placeholder="Dirección del evento"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                ref={inputRef}
                mb={4}
            />
            {/* <Center>
                <Box w={400} height={400}>
                    <APIProvider
                        apiKey={process.env.REACT_APP_GOOGLE_MAPS}
                        libraries={['places']}  // Ensure the 'places' library is loaded
                        onLoad={handleApiLoad}  // Ensure we initialize autocomplete only after the API is loaded
                    >
                        <Map
                            defaultZoom={13}
                            defaultCenter={coordinates}
                            onCameraChanged={(ev) =>
                                console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                            }
                        >
                            <Marker position={coordinates} />
                        </Map>
                    </APIProvider>
                </Box>
            </Center> */}
        </Box>
    );
};

export default MapSearcher;
