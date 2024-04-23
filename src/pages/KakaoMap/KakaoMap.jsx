/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KakaoMap() {
    const { kakao } = window;
    const [ info, setInfo ] = useState()
    const [ markers, setMarkers ] = useState([])
    const [ map, setMap ] = useState()
    const [ searchInputValue, setSearchInputValue ] = useState("");
    const [ keyword, setKeyword ] = useState("");

    useEffect(() => {
        if (!map) return
        const ps = new kakao.maps.services.Places()

        ps.keywordSearch(`${keyword} 동물병원`, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
            const bounds = new kakao.maps.LatLngBounds()
            let markers = []

            for (var i = 0; i < data.length; i++) {
            markers.push({
                position: {
                lat: data[i].y,
                lng: data[i].x,
                },
                content: data[i].place_name,
                place_url: data[i].place_url,
                phone : data[i].phone,
                road_address_name: data[i].road_address_name

            })
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
            }
            setMarkers(markers)
            map.setBounds(bounds)
            console.log(data)
        }
        })
    }, [map, keyword])

    const handleKeyUp = (e) => {
    if (e.key === "Enter") setKeyword(searchInputValue);
    };

   
    return (
        <>
            <Map
                center={{
                lat: 37.566826,
                lng: 126.9786567,
                }}
                style={{
                width: "800px",
                height: "700px",
                }}
                level={3}
                onCreate={setMap}
            >
                {markers.map((marker) => (
                <MapMarker 
                    style={{height:"15px"}}
                    key={`marker-${marker.content}-marker-${marker.road_address_name}-${marker.position.lat},${marker.position.lng}`}
                    position={marker.position}
                    onClick={() => setInfo(marker)}
                >
                    {info &&info.content === marker.content && (
                    <div style={{color:"#000"}}>
                        <div style={{fontWeight:"700"}}>{marker.content}</div> 
                        <div style={{width:"230px"}}>{marker.road_address_name}</div>
                    </div>
                    )}
                </MapMarker>
                ))}
            </Map>
            <div css={s.container}>
                <input
                    css={s.input}
                    type='text'
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    onKeyUp={(e) => handleKeyUp(e)}
                    value={searchInputValue}
                    placeholder={"주소를 입력해주세요 ex)서면역 or 부산광역시 남구"}
                />
                <button css={s.button} onClick={() => setKeyword(searchInputValue)}>
                검색
                </button>
            </div>
        </>
    );
}

export default KakaoMap;