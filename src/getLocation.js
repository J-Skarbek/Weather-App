export const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
}

export function success(pos) {
  const crd = pos.coords;
  let userLat = crd.latitude;
  let userLong = crd.longitude;
  console.log(crd);
  return {
    userLat,
    userLong
  }
  // console.log(crd.latitude);
  // console.log(crd.longitude);
  // console.log(`Your current position is: ${crd.latitude}(LAT) and ${crd.longitude}(LONG).`);
}

export function error(err) {
  console.warn(`Error(${err.code}): ${err.message}`);
}

export function getCoords() {
  const coords = navigator.geolocation.getCurrentPosition(success, error, options);
  // console.log(coords.userLat);
  return coords;
}