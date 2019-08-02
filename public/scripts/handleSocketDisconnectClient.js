// ocket.on('kingsCupGoBackToLobby', (data) => {
//   $('#gameForkingsCup').hide(100);
//   $('#lobby').toggle(1000);
//   logs.innerHTML = '<h1>Welcome to room ' + data[1] + '<h1>';
//   for (let id of data[0]) {
//     logs.innerHTML += `<p>${id}</p>`
//   }
//   $('#waitingMsg').css('display', 'none');
//   $('#joinGameBtn').css('display', 'block');
// });

socket.on('forceDisplayReset', (data) => {
  // data = gameId
  $(`#gameFor${data}`).hide(500);
  $('#lobby').css('display', 'block');
  logs.innerHTML = '<h1><br><br><h1>';
  // for (let id of data[2]) {
  //   logs.innerHTML += `<p>${id}</p>`
  // }
  $('#waitingMsg').css('display', 'none');
  $('#joinGameBtn').css('display', 'none');
});