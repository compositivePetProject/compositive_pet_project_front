/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Select from "react-select";
import { useSelect } from "../../hooks/useSelect";

function KakaoMap() {
    const { kakao } = window;
    const [ info, setInfo ] = useState();
    const [ markers, setMarkers ] = useState([]);
    const [ map, setMap ] = useState();
    const [ searchInputValue, setSearchInputValue ] = useState("");
    const [ keyword, setKeyword ] = useState("동물병원");
    const selectedCategory = useSelect();

    useEffect(() => {
        if (!map) return;
        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(`${searchInputValue} ${selectedCategory.option?.label}`, (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();
                let markers = [];

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
                    });
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                setMarkers(markers);
                map.setBounds(bounds);
            }
        });
    }, [map, keyword, selectedCategory.option]);

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            setKeyword(searchInputValue)
        };
    };

    const handleMarkerClick = (placeUrl) => {
        window.location.href = placeUrl;
    };

    const categorys = [
        {value : 1, label : "동물병원"},
        {value : 2, label : "동물약국"}
    ]

    const selectStyle2 = {
        control: baseStyles => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none"
        })
    }
    console.log(selectedCategory)

    return (
        <div css={s.layout}>
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
                            <div onClick={() => handleMarkerClick(marker.place_url)} style={{color:"#000", cursor:"pointer"}}>
                                <div style={{fontWeight:"700"}}>{marker.content}</div> 
                                <div style={{width:"230px"}}>{marker.road_address_name}</div>
                            </div>
                        )}
                    </MapMarker>
                ))}
            </Map>
            <div css={s.listContainer}>
                {markers.map((marker, index) => (
                    <div key={index} css={s.listItem}>
                        <div>{marker.content}</div>
                        <div>{marker.road_address_name}</div>
                        <div>{marker.phone}</div>
                        <div><a href={marker.place_url}>{marker.place_url}</a></div>
                    </div>
                ))}
            </div>
            <div css={s.container}>
                <Select
                    styles={selectStyle2}
                    options={categorys}
                    value={selectedCategory.option}
                    placeholder={"옵션을 선택해주세요"}
                    onChange={selectedCategory.handleOnChange}
                />
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
        </div>
        
    );
}

export default KakaoMap;