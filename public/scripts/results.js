$(document).ready(function() {
  clickPlayerGameTypeBtn();
  clickPlayerGameBtn();
});

const clickPlayerGameTypeBtn = () => {
  $('#player-game-type').on('click', function() {
    $.ajax({
      type: 'GET',
      url: '/api/rankingsByGame',
      dataType: 'json'
    })
      .done((data) => {
        $('table').val('');
        $('table').html(constructTablePlayerGameType(data));
        $('#data-title').val('');
        $('#data-title').text('Data: Player-Game-Type');
      })
      .fail((err) => console.log(err));
  });
};

const clickPlayerGameBtn = () => {
  $('#player-game').on('click', function() {
    $.ajax({
      type: 'GET',
      url: '/api/archivedGames',
      dataType: 'json'
    })
      .done((data) => {
        $('table').val('');
        $('table').html(constructTablePlayerGame(data));
        $('#data-title').val('');
        $('#data-title').text('Data: Player-Game');
      })
      .fail((err) => console.log(err));
  });
};

const constructTablePlayerGameType = (data) => {
  let newHTML = ``;
  newHTML += `<thead>
              <tr>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">game name</th>
                <th scope="col">total wins</th>
                <th scope="col">total games</th>
                <th scope="col">win ratio</th>
              </tr>
            </thead>
            <tbody>`;
  for (let i = 0; i < data.length; i++) {
    newHTML += `<tr>`;
    for (const prop in data[i]) {
      newHTML += `<td>${data[i][prop]}</td>`;
    }
    newHTML += `<tr>`;
  }
  newHTML += `</tbody>`;

  return newHTML;
};

const constructTablePlayerGame = (data) => {
  let newHTML = ``;
  newHTML += `<thead>
              <tr>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">game name</th>
                <th scope="col">user id</th>
                <th scope="col">win/loss</th>
              </tr>
            </thead>
            <tbody>`;
  for (let i = 0; i < data.length; i++) {
    newHTML += `<tr>`;
    for (const prop in data[i]) {
      newHTML += `<td>${data[i][prop]}</td>`;
    }
    newHTML += `<tr>`;
  }
  newHTML += `</tbody>`;

  return newHTML;
};
