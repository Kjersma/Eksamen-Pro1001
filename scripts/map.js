    function initMap() {
      // 1) Opprett geocoder for senere bruk av adresse
      const geocoder = new google.maps.Geocoder();

      // 2) Lag et midlertidig kart, sentrert på samme sted som infoboksen skal være
      const defaultLocation = { lat: 60.3037505, lng: 10.6358221 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: defaultLocation
      });

      // 3) Adresse du vil vise: endre gjerne strengen til annen adresse
      const adresse = "Braastad Gaard, Roa, Norge";

      // 4) Kjøre geokoding på adressen
      geocoder.geocode({ address: adresse }, (results, status) => {
        if (status === "OK" && results[0]) {
          const location = results[0].geometry.location;

          // 5) Flytt kartet til riktig sted
          map.setCenter(location);

          // 6) Opprett markør på adressen
          const marker = new google.maps.Marker({
            map: map,
            position: location,
            title: "Braastad Gaard"  // tekst som vises når du holder mus over markøren
          });

          // 7) Lag InfoWindow‐innhold (kan være hvilken som helst HTML)
          const infowindow = new google.maps.InfoWindow({
            content: `
              <div style="font-family: 'Arimo', sans-serif;">
                <h3>Braastad Gaard</h3>
                <p>Oppdalslinna 242, 2740 Roa, Norway</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Braastad+Gaard,+Roa,+Norge"
                   target="_blank">Veibeskrivelse</a>
              </div>
            `
          });

          // 8a) Åpne InfoWindow automatisk når kartet lastes
          infowindow.open(map, marker);

          // 8b) Eller: åpne InfoWindow når brukeren klikker på markøren
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });

        } else {
          console.error("Geokoding mislyktes:", status);
          alert("Fant ikke lokasjonen: " + status);
        }
      });
    }