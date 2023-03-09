var map;

function Initialization(_map){
    map = _map;
}

function DrawPolygon() {

let testData = JSON.parse(JSON.stringify(TestFile));   

var data = testData.features;   

$.each(data, function(index, val) {

    coordinates = val.geometry.coordinates;
    // console.log(coordinates)

    if(val.geometry.type == "MultiPolygon") {
        displayArea(coordinates, name, true);
        // console.log(coordinates.length)
    
    }
    else {
        displayArea(coordinates, name, false);   
        // console.log(coordinates.length)     
    }
    })
}

function DrawPolygon_pop() {
    let testData = JSON.parse(JSON.stringify(data_pop));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        coordinates = val.geometry.coordinates;   
        displayArea_pop(coordinates);     
        })
    }

function DrawPolygon1() {
let testData1 = JSON.parse(JSON.stringify(sgg));   
var data = testData1.features;   

$.each(data, function(index, val) {

    coordinates = val.geometry.coordinates;   
    displayArea1(coordinates, name, true);     
    })
}

function DrawPolygon2() {
let testData2 = JSON.parse(JSON.stringify(emd));   
var data = testData2.features;   

$.each(data, function(index, val) {

    coordinates = val.geometry.coordinates;   
    displayArea2(coordinates, name, true);     
    })
}


function makePolygon(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 3,
        strokeColor: '#0007FF', // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0  // 채우기 불투명도 입니다 
    });
}


function makePolygon_pop(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {
    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 3,
        strokeColor: '#FE0707', // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0  // 채우기 불투명도 입니다 
    });
}

function makePolygon1(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 3,
        strokeColor: '#A1FF42', // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#EBEBEB', // 채우기 색깔입니다
        fillOpacity: 0  // 채우기 불투명도 입니다 
    });
}

function makePolygon2(coordinates){
    var path = [];

    $.each(coordinates[0], function(index, coordinate) {    
        path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));

    });
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#A1FF42', // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#EBEBEB', // 채우기 색깔입니다
        fillOpacity: 0  // 채우기 불투명도 입니다 
    });
}

function makeMultiPolygon(coordinates){
    var path = [];
    $.each(coordinates, function(index, val2) {
        var coordinates2 = [];
        $.each(val2[0], function(index2, coordinate) {
            coordinates2.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
    })
        path.push(coordinates2);
        // console.log(path);
        
    });
    // console.log(path)
    // console.log(path.length)
    return new kakao.maps.Polygon({
        path: path,
        strokeWeight: 1,
        strokeColor: '#75B8FA', // 선의 색깔입니다
        strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0.8  // 채우기 불투명도 입니다 
    }); 
}


function displayArea(coordinates, name, multi){
    var polygon;
    if(multi) {
        polygon = makeMultiPolygon(coordinates);
       
    }
    
    else {
        polygon = makePolygon(coordinates);
    }

    polygon.setMap(map);
    
}

function displayArea_pop(coordinates, name, multi){
    var polygon2;
    polygon2 = makePolygon_pop(coordinates);
    polygon2.setMap(map);
}

function displayArea1(coordinates, name, multi){
    var polygon1;
    polygon1 = makePolygon1(coordinates);
    polygon1.setMap(map);
}

function displayArea2(coordinates, name, multi){
    var polygon2;
    polygon2 = makePolygon2(coordinates);
    polygon2.setMap(map);
}

markers = []
function DrawPoint() {
    let testData = JSON.parse(JSON.stringify(poi_center));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        latlng = val.geometry.coordinates;
        names = val.properties.기관명;
    
    //var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png"; 

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(13, 16); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(latlng[1], latlng[0]), // 마커를 표시할 위치
        title : names, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
})}

function DrawPoint_elem() {
    let testData = JSON.parse(JSON.stringify(poi_elem));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        latlng = val.geometry.coordinates;
        names = val.properties.POI_NM;
    
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    //var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/2018/pc/img/marker_spot.png"; 

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(12, 17); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(latlng[1], latlng[0]), // 마커를 표시할 위치
        title : names, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
})}

function DrawPoint_hosp() {
    let testData = JSON.parse(JSON.stringify(poi_hosp));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        latlng = val.geometry.coordinates;
        names = val.properties.POI_NM;
    
    var imageSrc = "https://pbs.twimg.com/media/Fqy-DTIaEAAOtr8?format=png&name=360x360"; 

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(12, 13); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(latlng[1], latlng[0]), // 마커를 표시할 위치
        title : names, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
})}

function DrawPoint_poli() {
    let testData = JSON.parse(JSON.stringify(poi_poli));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        latlng = val.geometry.coordinates;
        names = val.properties.POI_NM;
    
    var imageSrc = "https://pbs.twimg.com/media/Fqy-nN5aUAAg3zl?format=png&name=small"; 

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(12, 13); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(latlng[1], latlng[0]), // 마커를 표시할 위치
        title : names, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
})}

function DrawPoint_sandan() {
    let testData = JSON.parse(JSON.stringify(poi_sandan));   
    var data = testData.features;   
    
    $.each(data, function(index, val) {
    
        latlng = val.geometry.coordinates;
        names = val.properties.DAN_NAME;
    
    var imageSrc = "https://pbs.twimg.com/media/FqzAQW6agAA8sL2?format=png&name=small"; 

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(12, 13); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(latlng[1], latlng[0]), // 마커를 표시할 위치
        title : names, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 생성된 마커를 배열에 추가합니다
    markers.push(marker);
})}

// 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }            
}

// "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
function showMarkers() {
    setMarkers(map)    
}

// "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
function hideMarkers() {
    setMarkers(null);    
}