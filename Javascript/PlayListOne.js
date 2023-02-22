// ! DOM Variable from HTML

let songIconInput = document.getElementById("SongIconInput");
let songNameInput = document.getElementById("SongNameInput");
let songArtistInput = document.getElementById("SongArtistInput");
let songURLInput = document.getElementById("SongURLInput");
let AddSongBtn = document.getElementById("CreatePlayBtn");

// * The code below makes the new array to be in the global scope and pushes null to the indexOf zero

let NumberID = 0;
let newArr = new Array();
newArr.push("Null");


const AddSongToList = (CallBack) => {
  // * Temp Value

  let TempSongIcon = songIconInput.value;
  let TempNameInput = songNameInput.value;
  let TempArtistInput = songArtistInput.value;

  // ! DOM Elements

  const NewSongContainer = document.createElement("div");
  const NewSongIconContainer = document.createElement("div");
  const NewSongIcon = document.createElement("img");
  const NewSongArtistName = document.createElement("h5");
  const NewSongName = document.createElement("h5");
  const SongDivider = document.createElement("div");

  // * Updates IDs & Classes

  NewSongContainer.className = "Song-Container";
  NewSongIconContainer.className = "ImageContainer";
  NewSongIcon.className = "SongIcon";
  NewSongArtistName.className = "ArtistName";
  NewSongName.className = "SongName";
  SongDivider.className = "divider";

  // * Update INNER HTML, SRC & HREF

  NewSongIcon.src = TempSongIcon;
  NewSongName.innerHTML = TempNameInput;
  NewSongArtistName.innerHTML = TempArtistInput;

  // Append to DOM

  document.body.appendChild(NewSongContainer);
  NewSongContainer.appendChild(NewSongIconContainer);
  NewSongIconContainer.appendChild(NewSongIcon);
  NewSongContainer.appendChild(NewSongArtistName);
  NewSongContainer.appendChild(NewSongName);
  document.body.appendChild(SongDivider);

  LocalStorageAdd(TempSongIcon, TempNameInput, TempArtistInput);
};

const LocalStorageAdd = (IconVal, IconName, ArtistName) => {
  NumberID += 1;

  class AddSong {
    constructor(IconVal, IconName, ArtistName) {
      this.iconUrl = IconVal;
      this.iconName = IconName;
      this.artistName = ArtistName;
    }
  }

  newArr.push(NumberID);

  newArr[NumberID] = new AddSong(IconVal, IconName, ArtistName);

  console.log(newArr[NumberID]);
  console.log(NumberID);
  console.log(newArr);

  let JSONArray = JSON.stringify(newArr);

  localStorage.setItem("SavedSongs", JSONArray);
};


AddSongBtn.addEventListener("click", AddSongToList);
