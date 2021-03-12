// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');


    const takeOffButton = document.getElementById('takeoff');
    takeOffButton.addEventListener("click", function(event) {
        let takeoffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffConfirmation) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });


    const landingButton = document.getElementById('landing');
    landingButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
    });


    const missionAbort = document.getElementById('missionAbort');
    missionAbort.addEventListener("click", function(event) {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.left = '0px';
            rocket.style.bottom = '0px';
        }
    });


    const rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';


    const upButton = document.getElementById('upButton');
    upButton.addEventListener("click", function() {
        if (Number(shuttleHeight.innerHTML) < 250000) {
            let movement = parseInt(rocket.style.bottom) + 10 + 'px';
            rocket.style.bottom = movement;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    });

    const downButton = document.getElementById('downButton');
    downButton.addEventListener("click", function() {
        if (parseInt(rocket.style.bottom) > 0) {
            let movement = parseInt(rocket.style.bottom) - 10 + 'px';
            rocket.style.bottom = movement;
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        }
        
    });

    const leftButton = document.getElementById('leftButton');
    leftButton.addEventListener("click", function(event) {
        // console.log('left');
        let movement = parseInt(rocket.style.left) - 10 + 'px';
        rocket.style.left = movement;
        // rocket.style.marginLeft = `${movementLeft}px`;
    });

    const rightButton = document.getElementById('rightButton');
    rightButton.addEventListener("click", function(event) {
        // console.log('right');
        let movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;
    });
    
}

window.addEventListener("load", init);