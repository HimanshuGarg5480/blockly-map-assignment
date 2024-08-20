const path = [
    {"latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z"},
    {"latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z"},
    {"latitude": 17.385050, "longitude": 78.486675, "timestamp": "2024-07-20T10:00:10Z"},
    {"latitude": 17.385060, "longitude": 78.486680, "timestamp": "2024-07-20T10:00:15Z"},
    {"latitude": 17.385070, "longitude": 78.486685, "timestamp": "2024-07-20T10:00:20Z"},
    {"latitude": 17.385080, "longitude": 78.486690, "timestamp": "2024-07-20T10:00:25Z"},
    {"latitude": 17.385090, "longitude": 78.486695, "timestamp": "2024-07-20T10:00:30Z"},
    {"latitude": 17.385100, "longitude": 78.486700, "timestamp": "2024-07-20T10:00:35Z"},
    {"latitude": 17.385110, "longitude": 78.486705, "timestamp": "2024-07-20T10:00:40Z"},
    {"latitude": 17.385120, "longitude": 78.486710, "timestamp": "2024-07-20T10:00:45Z"},
    {"latitude": 17.385130, "longitude": 78.486715, "timestamp": "2024-07-20T10:00:50Z"},
    {"latitude": 17.385140, "longitude": 78.486720, "timestamp": "2024-07-20T10:00:55Z"},
    {"latitude": 17.385150, "longitude": 78.486725, "timestamp": "2024-07-20T10:01:00Z"},
    {"latitude": 17.385160, "longitude": 78.486730, "timestamp": "2024-07-20T10:01:05Z"},
    {"latitude": 17.385170, "longitude": 78.486735, "timestamp": "2024-07-20T10:01:10Z"},
    {"latitude": 17.385180, "longitude": 78.486740, "timestamp": "2024-07-20T10:01:15Z"},
    {"latitude": 17.385190, "longitude": 78.486745, "timestamp": "2024-07-20T10:01:20Z"},
    {"latitude": 17.385200, "longitude": 78.486750, "timestamp": "2024-07-20T10:01:25Z"},
    {"latitude": 17.385210, "longitude": 78.486755, "timestamp": "2024-07-20T10:01:30Z"},
    {"latitude": 17.385220, "longitude": 78.486760, "timestamp": "2024-07-20T10:01:35Z"},
    {"latitude": 17.385230, "longitude": 78.486765, "timestamp": "2024-07-20T10:01:40Z"},
    {"latitude": 17.385240, "longitude": 78.486770, "timestamp": "2024-07-20T10:01:45Z"},
    {"latitude": 17.385250, "longitude": 78.486775, "timestamp": "2024-07-20T10:01:50Z"},
    {"latitude": 17.385260, "longitude": 78.486780, "timestamp": "2024-07-20T10:01:55Z"},
    {"latitude": 17.385270, "longitude": 78.486785, "timestamp": "2024-07-20T10:02:00Z"}
];

export const highlightedPath = path.slice(0,path.length).map(point => ({
    lat: point.latitude,
    lng: point.longitude,
  }));

export default path;