var playlist = {'Sam Smith':'Stay with me'};

function updatePlaylist(playlist, artist, song) {
  return Objects.assign(playlist, {artist:song});
}