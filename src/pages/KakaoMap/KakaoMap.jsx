/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Select from "react-select";
import { useSelect } from "../../hooks/useSelect";
import { label } from "../../components/admin/TopInput/style";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function KakaoMap() {
    const { kakao } = window;
    const [ info, setInfo ] = useState();
    const [ markers, setMarkers ] = useState([]);
    const [ map, setMap ] = useState();
    const [ searchInputValue, setSearchInputValue ] = useState("");
    const [ keyword, setKeyword ] = useState();
    const selectedCategory = useSelect({value : 1, label : "반려동물"});
    const [ selectedState, setSelectedState ] = useState({
        value : 1,
        label : "반려동물"
    });
    const ref = useRef();


    useEffect(() => {
        if (!map) return;
        const ps = new kakao.maps.services.Places();
  
        ps.keywordSearch(`${searchInputValue} ${selectedState.label}`, (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();
                let markers = [];
                for (let i = 0; i < data.length; i++) { 
                    markers.push({
                        position: {
                            lat: data[i].y,
                            lng: data[i].x,
                        },
                        content: data[i].place_name,
                        place_url: data[i].place_url,
                        phone : data[i].phone,
                        road_address_name: data[i].road_address_name,
                        address_name: data[i].address_name
                    });
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                console.log(data)
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
        // window.location.href = placeUrl;
        window.open(placeUrl);
    };

    const handleMarkeronMouseOver = (marker, index) => {
        setInfo(() => marker)
        console.log(marker)
        console.log(index)

    }

    const categorys = [
        {value : 1, label : "반려동물"},
        {value : 2, label : "동물병원"},
        {value : 3, label : "반려동물용품"},
        {value : 4, label : "반려동물미용"},
        {value : 5, label : "반려동물분양"},
    ]

    const selectStyle2 = {
        control: baseStyles => ({
            ...baseStyles,
            // borderRadius: "0px",
            // border: "none",
            // outline: "none",
            // boxShadow: "none",
            boxSizing: "border-box",
            border: "none",
            outline: "none",
            padding: "0px 10px",
            width: "110px",
            height: "100%",
            fontSize: "16px",
        })
    }

    const handleOnChange = (e) => {
        setSelectedState({
            value: parseInt(e.target.value),
            label: e.target.options[e.target.selectedIndex].text
        })
    }

    useEffect(() => {
        console.log(selectedState)
    }, [selectedState])

    return (
        <div css={s.layout}>
            <div css={s.layoutContainer}>
                <div css={s.container}>
                    <div css={s.selectContainer}>
                        <div css={s.selectLabel}>
                            장소 범주
                        </div>
                        <select css={s.select} onChange={handleOnChange} value={handleOnChange.value}>
                            {categorys.map(option => {
                                return <option key={option.value} value={option.value}>{option.label}</option>
                            })}
                        </select>
                    </div>
                    <div css={s.selectContainer}>
                        <div css={s.selectLabel}>
                            검색어
                        </div>
                        <input
                            css={s.input}
                            type='text'
                            onChange={(e) => setSearchInputValue(e.target.value)}
                            onKeyUp={(e) => handleKeyUp(e)}
                            value={searchInputValue}
                            placeholder={"주소를 입력해주세요 ex)서면역 or 부산광역시 남구"}
                        />
                    </div>
                    <button css={s.button} onClick={() => setKeyword(searchInputValue)}>
                    <FaSearch />
                    </button>
                </div>
                <Map
                    center={{
                        lat: 37.566826,
                        lng: 126.9786567,
                    }}
                    style={{
                        width: "100%",
                        height: "700px",
                    }}
                    level={3}
                    onCreate={setMap}
                >
                    {markers.map((marker, index) => (
                        <MapMarker 
                            style={{height:"15px"}}
                            key={index}
                            position={marker.position}
                            onMouseOver={() => handleMarkeronMouseOver(marker)}
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
                
            </div>
            <div css={s.listContainer}>
                {markers.map((marker, index) => (
                    <div key={index} css={s.listItem} onMouseOver={() => handleMarkeronMouseOver(marker, index)} onClick={() => handleMarkerClick(marker.place_url)}>
                        <div>{marker.content}</div>
                        <div>{marker.road_address_name}</div>
                        <div> 
                            <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png" alt="" />
                            {marker.address_name}
                        </div>
                        <div>{marker.phone}</div>
                        <div><a href={marker.place_url} target="_blank" ref={ref}></a></div>
                    </div>
                ))} 
            </div>
        </div>
        
    );
}

export default KakaoMap;