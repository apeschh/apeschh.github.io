document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.gif", actionRadius: 100, timeBetweenNPCs: 3200, npcCollisionRadius: 100, actionDuration:1000, jumpHeight: 300, npcSpeed:100, maxSimultaneousNPCs:1, timeBetweenNPCs:1000, removeNPCAfterInteractedDelay:500, playUntilScore: 2, postGameScreenImageURLs: ["./img/endscreen.gif"]});
});