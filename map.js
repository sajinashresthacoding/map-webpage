var map = L.map('map').setView([41.6, -72.7], 9);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Disable map interactions
map.dragging.disable();
map.scrollWheelZoom.disable();
map.doubleClickZoom.disable();
map.touchZoom.disable();
map.keyboard.disable();

// Define coordinates and popup content
var coordinates = [
    {lat: 41.86366508, lng: -72.64096552, name: 'Vintage Radio & Communications Museum of CT', website: ''},
    {lat: 41.31613604, lng: -72.92119272, name: 'Yale Peabody Museum', website: 'https://www.ctpublic.org/show/where-we-live/2023-12-04/mohamad-hafez-installs-eternal-cities-at-the-new-yale-peabody-museum'},
    {lat: 41.34654105, lng: -72.98214985, name: 'Palestine Museum', website: 'https://www.ctpublic.org/show/where-we-live/2023-11-09/healing-and-humanizing-through-art-visiting-palestine-museum-us-in-woodbridge'},
    {lat: 41.80066574, lng: -72.72450243, name:'Jewish Historical Society of Greater Hartford', website: 'https://www.ctpublic.org/show/where-we-live/2023-11-16/healing-and-humanizing-through-artifact-visiting-the-museum-of-jewish-civilization'},
    {lat: 41.94789352, lng: -72.69151882, name: 'New England Air Museum', website: 'https://www.ctpublic.org/show/where-we-live/2024-02-02/connecticuts-aerospace-alley-celebrates-the-states-aviation-past-and-future'},
    {lat: 41.31294674, lng: -72.92038576, name: 'Ely Center of Contemporary Art', website: 'https://www.ctpublic.org/show/where-we-live/2024-03-18/avant-colony-celebrating-the-history-of-avant-garde-art-making-in-connecticut'},
    {lat: 41.37385162, lng: -72.10329289, name: 'Lyman Allyn Art Museum' , website: 'https://www.ctpublic.org/show/where-we-live/2024-03-18/avant-colony-celebrating-the-history-of-avant-garde-art-making-in-connecticut'},
    {lat: 41.3259006, lng: -72.32680343, name: 'Florence Griswold Museum', website: 'https://www.ctpublic.org/show/where-we-live/2024-03-18/avant-colony-celebrating-the-history-of-avant-garde-art-making-in-connecticut'},
    {lat: 41.35163117, lng: -73.54348403, name: 'Maurice Sendak Foundation', website: 'https://www.ctpublic.org/show/where-we-live/2024-03-14/the-wild-rumpus-continues-maurice-sendaks-legacy-lives-on-at-ridgefield-foundation'},
    {lat: 41.1435328, lng: -73.25224896, name: 'Irish Hunger Museum (new location)', website: 'https://www.ctpublic.org/show/where-we-live/2022-03-17/irelands-great-hunger-museum-sets-course-for-fairfield'}
    // Add more coordinates as needed
];

// Open side page and embed website dynamically
function openSidePage(url) {
    var sidePage = document.getElementById("sidePage");
    var embeddedWebsite = document.getElementById("embeddedWebsite");
    embeddedWebsite.src = url;
    sidePage.style.width = "500px"; // Adjust width as needed
}

// Close side page
function closeSidePage() {
    document.getElementById("sidePage").style.width = "0";
}

// Add markers and popups
coordinates.forEach(function(coord) {
    var marker = L.marker([coord.lat, coord.lng]).addTo(map);
    marker.bindPopup('<b>' + coord.name + '</b>').on('click', function(e) {
        openSidePage(coord.website); // 'website' is assumed to be a property in your 'coordinates' data
    });
});

// Disable dragging
map.dragging.disable();

// Disable scroll wheel zoom
map.scrollWheelZoom.disable();

// Disable double click zoom
map.doubleClickZoom.disable();

// Disable tap zoom on mobile devices
map.touchZoom.disable();

// Disable keyboard navigation
map.keyboard.disable();

// Disable all map interactions (optional)
// map.boxZoom.disable();
// map.keyboard.disable();
// map.zoomControl.remove();


