var mediaContent = '{'+
  '"contentObject" : ['+
    //'{"mediaFile":"mediaContent/videoOne.mp4"},'+
    '{"mediaFile":"mediaContent/audioTwo.mp3"}'+
  
  ']'+
'}';

var obj = JSON.parse(mediaContent);

function loadTheContent() {
    //this line is for accessing a single object
    // document.getElementById("demo").innerHTML =
    // obj.contentObject[1].mediaFile;
    // console.log(obj.contentObject[1].mediaFile);

    // and this one is for looping
    var thevalue = 0;
    var readContent = "";
    for (i = 0; i < 2; i++) {
       document.getElementById("demo").innerHTML = "download in progress";
        console.log(obj.contentObject[i].mediaFile);
        readContent = obj.contentObject[i].mediaFile;

        // setting a standby timer
        // setTimeout(procedure, 1000);

      
        // document.getElementById("demo").innerHTML = "download in progress";
        //this is what we are going to apply using our method

        var link = document.createElement("a");
        link.download = obj.contentObject[i].mediaFile;
        link.href= obj.contentObject[i].mediaFile;
        link.click();
        link.remove();
        //then here we will update the progress bar, updating the value is the idea here
        thevalue  = thevalue + 50; 
        document.getElementById("theProgress").style = "width:"+thevalue+"%;";
        document.getElementById("theValue").innerText = thevalue;
    }
     document.getElementById("demo").innerHTML = "download complete";
}
