const SongIconDOM = document.getElementById("PlayListSongIconInput");
const SongNameDOM = document.getElementById("PlayListSongNameInput");
const ArtistNameDOM = document.getElementById("PlayListArtistInput");
const SongURLDOM = document.getElementById("PlayListURLInput");
const AddSongDOM = document.getElementById("AddSongDOM");
const ButtonFromDOM = document.getElementById("PlayButton");
const iFrameFromDOM = document.getElementById("iframeDOM");

console.log(ButtonFromDOM);

function CreateSong() {
  // * Temporary Values

  let TempValueSongIcon = SongIconDOM.value;
  let TempValueSongName = SongNameDOM.value;
  let TempValueArtistName = ArtistNameDOM.value;
  let TempURLValue = SongURLDOM.value;

  // ! Creates New Element for each song

  const NewSongContainer = document.createElement("div");
  const NewSongIconContainer = document.createElement("div");
  const NewSongIcon = document.createElement("img");
  const NewSongName = document.createElement("h5");
  const NewSongArtistName = document.createElement("h5");
  const NewPlayButtonLink = document.createElement("a");
  const PlayButton = document.createElement("button");
  const NewSongDivider = document.createElement("div");

  // * Update Inner HTML

  NewSongIcon.src = TempValueSongIcon;
  NewSongName.innerHTML = TempValueSongName;
  NewSongArtistName.innerHTML = TempValueArtistName;
  PlayButton.innerHTML = "Click to Play";
  // NewPlayButtonLink.href = TempURLValue

  // * Assigns Classes & IDs

  NewSongIconContainer.className = "SongIconContainer";
  NewSongIcon.id = "SongIconID";
  NewSongName.id = "SongNameID";
  NewSongArtistName.id = "ArtistNameID";
  NewSongDivider.className = "songDivider";
  PlayButton.id = "PlayButton";
  NewPlayButtonLink.id = "LinkSRC";

  // * Container Appendiction

  document.body.appendChild(NewSongContainer);
  NewSongContainer.appendChild(NewSongIconContainer);
  NewSongIconContainer.appendChild(NewSongIcon);
  NewSongContainer.appendChild(NewSongName);
  NewSongContainer.appendChild(NewSongArtistName);
  document.body.appendChild(NewSongDivider);
  NewSongContainer.appendChild(NewPlayButtonLink);
  NewPlayButtonLink.appendChild(PlayButton);

  const GetElement = document.getElementById("PlayButton");

  GetElement.onclick = function () {
    iFrameFromDOM.src = "httpsss-1je-1w";
  };
}

AddSongDOM.addEventListener("click", CreateSong);
