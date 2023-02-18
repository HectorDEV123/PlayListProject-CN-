const SongIconDOM = document.getElementById("PlayListSongIconInput");
const SongNameDOM = document.getElementById("PlayListSongNameInput");
const ArtistNameDOM = document.getElementById("PlayListArtistInput");
const SongURLDOM = document.getElementById("PlayListURLInput");
const AddSongDOM = document.getElementById("AddSongDOM");

import Localbase from "../";
let db = new Localbase(db)

function CreateSong(){

  // * Temporary Values

  let TempValueSongIcon = SongIconDOM.value; 
  let TempValueSongName = SongNameDOM.value; 
  let TempValueArtistName = ArtistNameDOM.value; 



  // ! Creates New Element for each song


  const NewSongContainer = document.createElement("div");
  const NewSongIconContainer = document.createElement("div");
  const NewSongIcon = document.createElement("img");
  const NewSongName = document.createElement("h5");
  const NewSongArtistName = document.createElement("h5");
  const NewSongURL = null;
  const NewSongDivider = document.createElement("div");


  // * Update Inner HTML

  NewSongIcon.src = TempValueSongIcon;
  NewSongName.innerHTML = TempValueSongName;
  NewSongArtistName.innerHTML = TempValueArtistName;

  // * Assigns Classes & IDs

  NewSongIconContainer.className = "SongIconContainer"
  NewSongIcon.id = "SongIconID";
  NewSongName.id = "SongNameID";
  NewSongArtistName.id = "ArtistNameID"
  NewSongDivider.className = "songDivider"


  // * Container Appendiction 

  document.body.appendChild(NewSongContainer);
  NewSongContainer.appendChild(NewSongIconContainer);
  NewSongIconContainer.appendChild(NewSongIcon);
  NewSongContainer.appendChild(NewSongName);
  NewSongContainer.appendChild(NewSongArtistName);
  document.body.appendChild(NewSongDivider)

  let RandomNumber = Math.floor(Math.random() * 10);
  console.log(RandomNumber)

  // * Sets to Map

  let myArray = new Array();
  myArray.push(TempValueSongIcon, TempValueSongName, TempValueArtistName);
  NewSongMap.set(RandomNumber, myArray);

 
  console.log(NewSongMap)
  LocalStoragePush();


  function LocalStoragePush(){

    db.collection("users").add({

      id: 1,
      name: "Bill",
      age: 47,
    })

  }


}

let NewSongMap = new Map([

 
])


AddSongDOM.addEventListener("click", CreateSong);