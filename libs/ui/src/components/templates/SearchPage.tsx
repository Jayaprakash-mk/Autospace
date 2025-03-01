// import { useCallback } from 'react'
// import { Map } from '../organisms/map/Map'
// import { initialViewState } from '@autospace/util/constants'
// import { ViewStateChangeEvent } from 'react-map-gl'
// import React from 'react'
// import { Panel } from '../organisms/map/Panel'
// import { SearchPlaceBox } from '../organisms/map/SearchPlacesBox'
// import { DefaultZoomControls } from '../organisms/map/ZoomControls'

// export const SearchPage = () => {
//   const handleMapChange = useCallback(
//     (target: ViewStateChangeEvent['target']) => {
//       const bounds = target.getBounds()
//       const locationFilter = {
//         ne_lat: bounds?.getNorthEast().lat || 0,
//         ne_lng: bounds?.getNorthEast().lng || 0,
//         sw_lat: bounds?.getSouthWest().lat || 0,
//         sw_lng: bounds?.getSouthWest().lng || 0,
//       }
//       console.log('locationFilter', locationFilter)
//     },
//     [],
//   )
//   return (
//     <Map
//       onLoad={(e: { target: any }) => handleMapChange(e.target)}
//       onDragEnd={(e: { target: any }) => handleMapChange(e.target)}
//       onZoomEnd={(e: { target: any }) => handleMapChange(e.target)}
//       initialViewState={initialViewState}
//     >
//       <Panel position="left-top">
//         <SearchPlaceBox />
//       </Panel>
//       <Panel position="right-center">
//         <DefaultZoomControls />
//       </Panel>
//     </Map>
//   )
// }
