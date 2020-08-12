var playlist = {'Sam Smith':'Stay with me'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]:songTitle});
}
