export const getLocationUtil = (callback) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {

          
          callback(null, {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
        },
        error => {
          callback(error);

        }
      );
    } else {
      callback('Geolocation is not supported by this browser.');
    }
}