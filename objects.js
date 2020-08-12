var playlist = {'Sam Smith':'Stay with me'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Objects.assign(playlist, {artistName:songTitle});
}
