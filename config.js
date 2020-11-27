
document.getElementById("btnToLink").addEventListener("click", initiateDownloads);

function initiateDownloads() {
  var mediaContent = '{'+
  '"contentObject" : ['+
    '{"mediaFile":"mediaContent/audioTwo.mp3"},'+
    '{"mediaFile":"mediaContent/videoOne.mp4"}'+
  ']'+
'}';

var obj = JSON.parse(mediaContent);

var creatLink = document.getElementById("theDownloadLink");
document.getElementById("para").style="display: none";
document.getElementById("btnToLink").style="display: none";
document.getElementById("displayProgress").style="display: block";
  

var theprogressvalue = 0;
  for (i = 0; i < 3; i++) {
    // creatLink = obj.contentObject[i].mediaFile;
    creatLink.download = obj.contentObject[i].mediaFile;
    creatLink.href= obj.contentObject[i].mediaFile;
    creatLink.click();
    
    theprogressvalue = theprogressvalue + 20;
    document.getElementById("theProgress").style="width: "+theprogressvalue+"%";

  }
  console.log("hello there!!! it is finally working");
}
