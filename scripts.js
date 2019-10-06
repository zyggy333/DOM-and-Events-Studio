// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeOffBtn=null;
let landBtn=null;
let abortMissionBtn=null;
let shuttleHeight=0;
let newHeight=0;
let upBtn=null;
let downBtn=null;
let leftBtn=null;
let rightBtn=null;
let movement=0;
let currentPosition=null;
let positionNum=0;
let newPosition=null;


function init () {
    takeOffBtn=document.getElementById("takeoff");
    landBtn=document.getElementById("landing");
    abortMissionBtn=document.getElementById("missionAbort");
    upBtn=document.getElementById("upButton");
    downBtn=document.getElementById("downButton");
    takeOffBtn.addEventListener("click", function(event){
        let takeoffResponse=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeoffResponse===true){
            document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
            document.getElementById("shuttleBackground").style.background ="blue";
            shuttleHeight=Number(spaceShuttleHeight.innerHTML);
            newHeight=shuttleHeight+10000;
            document.getElementById("spaceShuttleHeight").innerHTML=newHeight;
        }
    })
    landBtn.addEventListener("click", function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background ="green";
        document.getElementById("spaceShuttleHeight").innerHTML=0;
    });
    abortMissionBtn.addEventListener("click", function(event){
        let abortResponse=window.confirm("Confirm that you want to abort the mission.");
        if(abortResponse===true){
            document.getElementById("flightStatus").innerHTML="Mission aborted.";
            document.getElementById("shuttleBackground").style.background ="green";
            document.getElementById("spaceShuttleHeight").innerHTML=0;
        }
    })
    upBtn.addEventListener("click", function(event){
        shuttleHeight=Number(spaceShuttleHeight.innerHTML);
        newHeight=shuttleHeight+10000;
        document.getElementById("spaceShuttleHeight").innerHTML=newHeight;
        movement=0;
        currentPosition=rocket.style.bottom;
        positionNum = Number(currentPosition.slice(0, currentPosition.length - 2));
        movement+=10;
        newPosition=(positionNum+=Number(movement))+"px"
        rocket.style.bottom=newPosition;
    });
    upBtn.addEventListener("click", function(event){
        shuttleHeight=Number(spaceShuttleHeight.innerHTML);
        if(shuttleHeight<==0);{
            newHeight=shuttleHeight+10000;
            document.getElementById("spaceShuttleHeight").innerHTML=newHeight;
            movement=0;
            currentPosition=rocket.style.bottom;
             ositionNum = Number(currentPosition.slice(0, currentPosition.length - 2));
            movement+=10;
            newPosition=(positionNum+=Number(movement))+"px"
            rocket.style.bottom=newPosition;
        }
        
    });
    downBtn.addEventListener("click", function(event){
        shuttleHeight=Number(spaceShuttleHeight.innerHTML);
        if(shuttleHeight>-250000)
            newHeight=shuttleHeight-10000;
            document.getElementById("spaceShuttleHeight").innerHTML=newHeight;
            movement=0;
            currentPosition=rocket.style.bottom;
            positionNum = Number(currentPosition.slice(0, currentPosition.length - 2));
            movement-=10;
            newPosition=(positionNum+=Number(movement))+"px"
            rocket.style.bottom=newPosition;
    });
}



window.onload = init;