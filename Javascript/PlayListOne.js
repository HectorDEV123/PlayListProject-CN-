// ! DOM Variable from HTML

let songIconInput = document.getElementById("SongIconInput");
let songNameInput = document.getElementById("SongNameInput");
let songArtistInput = document.getElementById("SongArtistInput");
let songURLInput = document.getElementById("SongURLInput");
let AddSongBtn = document.getElementById("CreatePlayBtn");

// * The code below makes the new array to be in the global scope and pushes null to the indexOf zero


const AddSongToList = (CallBack) => {
  // * Temp Value

  let TempSongIcon = songIconInput.value;
  let TempNameInput = songNameInput.value;
  let TempArtistInput = songArtistInput.value;
  let TempSongURL = songURLInput.value;

  // ! DOM Elements

  const NewSongContainer = document.createElement("div");
  const NewSongIconContainer = document.createElement("div");
  const NewSongIcon = document.createElement("img");
  const NewSongArtistName = document.createElement("h5");
  const NewSongName = document.createElement("h5");
  const SongDivider = document.createElement("div");
  const newSongHypherLink = document.createElement("a");
  const newSongLinkBtn = document.createElement("button")

  // * Updates IDs & Classes

  NewSongContainer.className = "Song-Container";
  NewSongIconContainer.className = "ImageContainer";
  NewSongIcon.className = "SongIcon";
  NewSongArtistName.className = "ArtistName";
  NewSongName.className = "SongName";
  SongDivider.className = "divider";
  newSongLinkBtn.className = "PlayBtn"

  // * Update INNER HTML, SRC & HREF

  NewSongIcon.src = TempSongIcon;
  NewSongName.innerHTML = TempNameInput;
  NewSongArtistName.innerHTML = TempArtistInput;
  newSongHypherLink.href = TempSongURL;
  newSongLinkBtn.innerHTML = "Click to Play Song"
  newSongHypherLink.setAttribute("target", "blank")

  // Append to DOM

  document.body.appendChild(NewSongContainer);
  NewSongContainer.appendChild(NewSongIconContainer);
  NewSongIconContainer.appendChild(NewSongIcon);
  NewSongContainer.appendChild(NewSongArtistName);
  NewSongContainer.appendChild(NewSongName);
  document.body.appendChild(SongDivider);
  NewSongContainer.appendChild(newSongHypherLink);
  newSongHypherLink.appendChild(newSongLinkBtn)


};



AddSongBtn.addEventListener("click", AddSongToList);
