
import React from 'react';
import styled from "styled-components";

/*global kakao*/ 

class Map extends React.Component{

    componentDidMount() {
        const script = document.createElement("script");
        //script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=9b1c8a9338b48f859bf50e0b77ed9708";
        document.head.appendChild(script);

      script.onload = () => {
        kakao.maps.load(() => {
          let container = document.getElementById("map");
          let options = {
            center: new kakao.maps.LatLng(37.48021176026761, 126.97716353816318),
            level: 7
          };
  
          var map = new window.kakao.maps.Map(container, options);
          
        //   new kakao.maps.Marker({
		//     position: new kakao.maps.LatLng(37.48021176026761, 126.97716353816318), // 마커의 좌표
		//     map: map // 마커를 표시할 지도 객체
        //   });
          
        // 마커를 생성
        let marker = new kakao.maps.Marker({
		    position: new kakao.maps.LatLng(37.48021176026761, 126.97716353816318), // 마커의 좌표
        });
    
        // 마커를 지도 위에 표시
        marker.setMap(map);

        let infowindow = new kakao.maps.InfoWindow({
            content : '<div style="padding:5px;text-align:center;width:150px">NoRoomForFake <br> <a style="color:blue" target="_blank">HereisOffice</a></div>' // 인포윈도우에 표시할 내용
		}); 

		// 인포윈도우를 지도에 표시한다
		infowindow.open(map, marker);

        });
     }
    }
    render(){
        return(
            <>
            <Maps id="map">
            </Maps>
            </>
        )
    }
}
const Maps = styled.div`
width: 100%;
height: 650px;
`;

// const Head = styled.h1`
// text-align: center;
// `

export default Map;