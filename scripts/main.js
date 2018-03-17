  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCMw3ZMN5hu39Gz2m20Jk8mOB_08RasG6g",
  //   authDomain: "mymehproject.firebaseapp.com",
  //   databaseURL: "https://mymehproject.firebaseio.com",
  //   projectId: "mymehproject",
  //   storageBucket: "mymehproject.appspot.com",
  //   messagingSenderId: "700669945958"
  // };
  // firebase.initializeApp(config);

  function makeTrain(name, destination, firstTime, intervalBetween) {
    q = new Object();
    console.log(q);
    q.name = name;
    q.destination = destination;
    q.firstTime = firstTime;
    q.interval = intervalBetween;
    console.log(q)
    return q;
    // need to add errror checking
  }

  function displayTrain(aTrain) {
    
    var trainNum = allTrains.length + 1;
    console.log("in add train")
    console.log("and aTrain is " + aTrain)
    if (trainNum < 10) {
      console.log("num train under 10")
      numStr = '00' + trainNum.toString();
    } else if (trainNum < 100) {
      numStr = '0' + trainNum.toString();
    } else if (tranNum < 1000) {
      numStr = trainNum.toString();
    } else if (trainNum >= 1000) {
      // ERROR CONDITION
    }

    var nextTrain = 'temp'
    var name = aTrain.name;
    var destination = aTrain.destination;
    var firstTime = aTrain.firstTime;
    var interval = aTrain.interval;

    console.log("numstr is "+numStr);debugger
    var line1 = '<tr id="row'+numStr+'" class="r'+numStr+'">'
    console.log("line 1 is "+line1);debugger
    var line2 = '<td id="A'+numStr+'" class="cA r'+numStr+'tableCell">'+name+'</td>'
    console.log("line 2 is "+line2);debugger
    var line3 = '<td id="B' + numStr + '" class="cB r' + numStr + 'tableCell">' + destination + '</td>'
    console.log("line 3 is "+line3);debugger
    var line4 = '<td id="C'+numStr+'" class="cC r'+numStr+'tableCell">'+firstTime+'</td>'
    var line5 = '<td id="D'+numStr+'" class="cD r'+numStr+'tableCell">'+interval+'</td>'
    var line6 = '<td id="E'+numStr+'" class="cE r'+numStr+'tableCell">'+nextTrain+'</td>'
    var line7 = '</tr>'
    var theHTML = line1+line2+line3+line4+line5+line6+line7;
    // debugger;
    // var theHTML = 'Hi!!!!!!!!!';
    debugger;

    console.log("the HTML should be here: " + theHTML);

    $("#trainBoard").append(theHTML);
  }