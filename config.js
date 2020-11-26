// var mediaContent = '{'+
//   '"contentObject" : ['+
//     '{"mediaFile":"mediaContent/videoOne.mp4"},'+
//     '{"mediaFile":"mediaContent/audioTwo.mp3"}'+
  
//   ']'+
// '}';

// var obj = JSON.parse(mediaContent);

// function loadTheContent() {
   
//     // and this one is for looping
//     var thevalue = 0;
//     var readContent = "";
//     for (i = 0; i < 2; i++) {
//        document.getElementById("demo").innerHTML = "download in progress";
// //         console.log(obj.contentObject[i].mediaFile);
//         readContent = obj.contentObject[i].mediaFile;
        
// //      starting the download process here
//         var link = document.createElement("a");
//         link.download = obj.contentObject[i].mediaFile;
//         link.href= obj.contentObject[i].mediaFile;
//         link.click();
//         link.remove();
      
//         //then here we will update the progress bar, updating the value is the idea here
//         thevalue  = thevalue + 50; 
//         document.getElementById("theProgress").style = "width:"+thevalue+"%;";
//         document.getElementById("theValue").innerText = thevalue;
//     }
//      document.getElementById("demo").innerHTML = "download complete";


//debugging the code

var mediaContent = '{'+
  '"contentObject" : ['+
    '{"mediaFile":"mediaContent/videoOne.mp4"}'+
   
  
  ']'+
'}';

var obj = JSON.parse(mediaContent);

function loadTheContent() {
   
    // and this one is for looping
    var thevalue = 0;
    var readContent = "";
    for (i = 0; i < 2; i++) {
       
//      console.log(obj.contentObject[i].mediaFile);
        readContent = obj.contentObject[i].mediaFile;
        document.getElementById("demo").innerHTML = readContent;
      
     }
     //document.getElementById("demo").innerHTML = "download complete";
}











