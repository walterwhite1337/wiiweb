var IsWii = navigator.userAgent.toLowerCase().indexOf("wii") > -1; // returns "true" if internet channel is being used
var IsNotWii = navigator.userAgent.toLowerCase().indexOf("wii") <= -1; // returns "true" if other browser is being used
if (IsWii) {
  void(0); // do nothing
}
else if (IsNotWii) {
  window.location.replace("https://nsc.ftolnks.xyz/#wiiredirect"); // redirect to nsc.ftolnks.xyz
}
