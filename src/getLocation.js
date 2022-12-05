export const locationOptions = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
}

export function success(pos) {
  const crd = pos.coords;
  console.log(`Your current position is: ${crd.latitude}(LAT) and ${crd.longitude}(LONG).`);
}

export function error(err) {
  console.warn(`Error(${err.code}): ${err.message}`);
}