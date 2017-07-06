//============================================================================
// Name        : showMaps
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This function loads the google maps api and calls loadMaps()
//               function to display the maps into a given HTML div element.
//============================================================================
function showMaps()
{
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB0B6uzuNB9zlLaa2urYpBN6Vdgb5BmL7g&callback=loadMaps";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    window.google = {}; //attempt to fix Google Maps API multiple times error 
}

//============================================================================
// Name        : showMaps
// Author      : Hai Nguyen
// Version     :
// Copyright   : 2017
// Description : This function displays the maps into a given HTML div element.
//============================================================================
function loadMaps() 
{
    console.log("conInfo: ", conInfo);
    var infowindow = new google.maps.InfoWindow();
    var map;
    var uluru;
    for (var i = 0; i < conInfo.length; i++)
    {
        uluru = {
            lat: conInfo[i]["lat"], 
            lng: conInfo[i]["lng"]
        };
        console.log("uluru: ", uluru);
        if (i === 0)
        {
            map = new google.maps.Map(document.getElementById("gMap"), {
                zoom: 8,
                center: uluru,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        }
        marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
        google.maps.event.addListener(marker, "click", (function(marker, i) {
            return function() {
                infowindow.setContent(conInfo[i]["venNm"]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    // var map = new google.maps.Map(document.getElementById("gMap"), {
    //     zoom: 10,
    //     center: new google.maps.LatLng(-33.92, 151.25),
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // });
    // var infowindow = new google.maps.InfoWindow();
    // var marker, i;

    // for (i = 0; i < locations.length; i++) { 
    //     marker = new google.maps.Marker({
    //         position: new google.maps.LatLng(locations[i]["lat"], locations[i]["lng"]),
    //         map: map
    //     });

    //     google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //         return function() {
    //             infowindow.setContent(locations[i]["name"]);
    //             infowindow.open(map, marker);
    //         }
    //     })(marker, i));
    // }
}