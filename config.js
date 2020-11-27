
// function loadTheContent() {
//     //this line is for accessing a single object
//     // document.getElementById("demo").innerHTML =
//     // obj.contentObject[1].mediaFile;
//     // console.log(obj.contentObject[1].mediaFile);

//     // and this one is for looping
//     var thevalue = 0;
//     var readContent = "";
//     for (i = 1; i < 2; i++) {
//        document.getElementById("demo").innerHTML = "download in progress";
//         console.log(obj.contentObject[i].mediaFile);
//         readContent = obj.contentObject[i].mediaFile;

//         // setting a standby timer
//         // setTimeout(procedure, 1000);

//         thevalue  = thevalue + 50; 
//         document.getElementById("theProgress").style = "width:"+thevalue+"%;";
//         // document.getElementById("demo").innerHTML = "download in progress";
//         //this is what we are going to apply using our method

//         var link = document.createElement("a");
//         link.download = obj.contentObject[i].mediaFile;
//         link.href= obj.contentObject[i].mediaFile;
//         link.click();
//         //then here we will update the progress bar, updating the value is the idea here
//     }
//     document.getElementById("demo").innerHTML = "download complete";
// }



document.getElementById("btnToLink").addEventListener("click", initiateDownloads);
// function displayDate() {
//   document.getElementById("para").innerHTML = "download now in progress";
// }

function initiateDownloads() {
  // var creatLink = document.getElementById("theDownloadLink");
  // creatLink.href="mediaContent/audioTwo.mp3";
  // creatLink.download = "mediaContent/audioTwo.mp3";
  // creatLink.click();
  var mediaContent = '{'+
  '"contentObject" : ['+
    '{"mediaFile":"mediaContent/audioTwo.mp3"},'+
    '{"mediaFile":"mediaContent/videoOne.mp4"}'+
  ']'+
'}';

var obj = JSON.parse(mediaContent);

var creatLink = document.getElementById("theDownloadLink");

var theprogressvalue = 0;
  for (i = 0; i < 3; i++) {
    // creatLink = obj.contentObject[i].mediaFile;
    creatLink.download = obj.contentObject[i].mediaFile;
    creatLink.href= obj.contentObject[i].mediaFile;
    creatLink.click();
    
    //theprogressvalue = theprogressvalue + 20;
    //document.getElementById("theProgress").style="width: "+theprogressvalue+"%";

  }
  console.log("hello there!!! it is finally working");
}
