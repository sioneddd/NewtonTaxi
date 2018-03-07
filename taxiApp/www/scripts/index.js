// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {

        var addresses = ["The Jolly Abbot, East Street", "Alexandra Cinema, Market Street", "Trago Mills", "Wetherspoons, Queen Street", "Newton Abbot College", "Newton Abbot Hospital", "Teign Cellars, East Street", "Ye Olde Cider Bar, East Street", "Tesco, Kingsteignton",];
        var i = Math.floor((Math.random() * addresses.length - 1));
        document.getElementById("address").placeholder = "E.g " + addresses[i];

        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        var addresses = ["The Jolly Abbot, East Street", "Alexandra Cinema, Market Street", "Trago Mills", "Wetherspoons, Queen Street", "Newton Abbot College", "Newton Abbot Hospital", "Teign Cellars, East Street", "Ye Olde Cider Bar, East Street", "Tesco, Kingsteignton",];
        var i = Math.floor((Math.random() * addresses.length - 1));
        document.getElementById("address").placeholder = "E.g " + addresses[i];
    };

    $('#orderBtn').click(function () {
        window.location.href = "car.html";
    })
    $('.carNext').click(function () {
        window.location.href = "from.html";
    })

    $('.fromNext').click(function () {
        window.location.href = "to.html";
    })
        / $('.selectCar').flickity({
        freeScroll: true,
        wrapAround: true,
        prevNextButtons: false,
        setGallerysize: false
    })
    


} )();