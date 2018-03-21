  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLTt-mR_khO9a96D-z2zRAcoMNJgW5Njs",
    authDomain: "trainsrunningontime.firebaseapp.com",
    databaseURL: "https://trainsrunningontime.firebaseio.com",
    projectId: "trainsrunningontime",
    storageBucket: "trainsrunningontime.appspot.com",
    messagingSenderId: "741959202769"
  };
  firebase.initializeApp(config);

var allTrains = [];
var database = firebase.database();

  function makeTrain(name, destination, firstTime, intervalBetween) {
    this.guid = moment();
    this.name = name;
    this.destination = destination;
    this.firstTime = firstTime;
    console.log("this.firstTime is"+this.firstTime);
    this.interval = intervalBetween;
    console.log("this.interval is"+this.interval)
    // need to add errror checking
    return this;
  }

  function displayTrain(aTrain) {
    var trainNum = allTrains.length + 1;
    if (trainNum < 10) {
      numStr = '00' + trainNum.toString();
    } else if (trainNum < 100) {
      numStr = '0' + trainNum.toString();
    } else if (tranNum < 1000) {
      numStr = trainNum.toString();
    } else if (trainNum >= 1000) {
      // ERROR CONDITION
    }

    var nextTrain = 'temp';
    var name = aTrain.name;
    var destination = aTrain.destination;
    var firstTime = aTrain.firstTime;
    var interval = aTrain.interval;

    var line1 = '<tr id="row' + numStr + '" class="r' + numStr + '">'
    var line2 = '<td id="A' + numStr + '" class="cA r' + numStr + 'tableCell">' + name + '</td>'
    var line3 = '<td id="B' + numStr + '" class="cB r' + numStr + 'tableCell">' + destination + '</td>'
    var line4 = '<td id="C' + numStr + '" class="cC r' + numStr + 'tableCell">' + firstTime + '</td>'
    var line5 = '<td id="D' + numStr + '" class="cD r' + numStr + 'tableCell">' + interval + '</td>'
    var line6 = '<td id="E' + numStr + '" class="cE r' + numStr + 'tableCell">' + nextTrain + '</td>'
    var line7 = '</tr>'
    var theHTML = line1 + line2 + line3 + line4 + line5 + line6 + line7;

    $("#train-board").append(theHTML);
  }

  function validateTime(inString) {
    switch (inString.length) {
      case 3:
        var minutes = inString.slice(1,3);
        if ((inString[0] == ":")
          && (Number.isInteger(parseInt(minutes)))
          && (parseInt(minutes) > 0)
          && (parseInt(minutes) <= 59)
        ) {
          return "00:" + inString;
        } else {
          return -1
        }
        break;
      case 4:
        hours = inString.slice(0,1);
        minutes = inString.slice(2,4);
        if (
          (inString[1] == ":") 
          && (Number.isInteger(parseInt(hours)))
          && (Number.isInteger(parseInt(minutes)))
          && (parseInt(minutes) > 0)
          && (parseInt(minutes) <= 59)
          && (parseInt(hours) >= 0)
          && (parseInt(hours) <= 9)
        ) {
            return "0" + inString;
        } else { 
          return -1
        }
        break;
      case 5:
        hours = inString.slice(0,2);
        minutes = inString.slice(3,5);
        if (
          (inString.slice(2,3) == ":") 
          && (Number.isInteger(parseInt(hours)))
          && (Number.isInteger(parseInt(minutes)))
          && (parseInt(minutes) > 0)
          && (parseInt(minutes) <= 59)
          && (parseInt(hours) >= 0)
          && (parseInt(hours) <= 24)
        ) {
            return inString;
        } else { 
          return -1
        }
        break;
      default:
        return -1
    }

  }

  function validateInterval(inString) {
     // swich(inString.length)
  }

