// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };

  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 14
  });
  // The marker, positioned at locatiion
  const marker = new google.maps.Marker({ position: loc, map: map });
}
