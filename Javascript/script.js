//  * Imports the Local Database File
import { CheckDataBase } from "./LocalStorage/DBCHECK.js";


// * Input & Button Variables from HTML

const PlayListNameInput = document.getElementById("PlayListNameInput");
const PlayListIconInput = document.getElementById("PlayListIconInput");
const CreateBtn = document.getElementById("CreatePlayBtn");
let PlayListID = 4;

let NonJSONPlayListArrayOne = [];
let NonJSONPlayListArrayTwo = [];
let NonJSONPlayListArrayThree = [];

let JSONStringPlayListArrayOne = [];
let JSONStringPlayListArrayTwo = [];
let JSONStringPlayListArrayThree = [];

// * The function below executes a function that is located in the DBINIT File to see if the localstorage has any playlists in it
CheckDataBase();

function OnCreateClick() {
  // ! This Function sets the maximum amount of Playlists to THREE!

  switch (PlayListID) {
    case 4:
      PlayListID -= 1;
      CreatePlayList();
      console.log("Playlist Created");
      break;

    case 3:
      PlayListID -= 1;
      CreatePlayList();
      console.log("Playlist Created");
      break;

    case 2:
      PlayListID -= 1;
      CreatePlayList();
      console.log("Playlist Created");
      break;

    default:
      console.error("Maximum Amount of Playlist Reached!");
      break;
  }
}

function CreatePlayList() {
  let TempIconValue = PlayListIconInput.value;
  let TempNameValue = PlayListNameInput.value;

  // ! CONST VARIABLES CREATE ELEMENTS FOR DOM / PLAYLIST

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * MODIFIES PLAYLIST VALUES

  NewPlayListIcon.src = TempIconValue;
  NewPlayListName.innerHTML = TempNameValue;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");
  NewPlayListContainer.className = "Container";

  // * DISPLAYS TO DOM

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);

  // * SAVE TO DATABASE (This Code Begins the process of saving data to Database & Moving it onto Global Scope)

  switch (PlayListID) {
    case 3:
      NewPlayListContainer.className = "PlayListOne";
      NonJSONPlayListArrayOne.push(TempIconValue);
      NonJSONPlayListArrayOne.push(TempNameValue);
      JSONStringPlayListArrayOne = JSON.stringify(NonJSONPlayListArrayOne);
      localStorage.setItem("PlayListOne", JSONStringPlayListArrayOne);
      break;

    case 2:
      NewPlayListContainer.className = "PlayListTwo";
      NonJSONPlayListArrayTwo.push(TempIconValue);
      NonJSONPlayListArrayTwo.push(TempNameValue);
      JSONStringPlayListArrayTwo = JSON.stringify(NonJSONPlayListArrayTwo);
      localStorage.setItem("PlayListTwo", JSONStringPlayListArrayTwo);
      break;

    case 1:
      NewPlayListContainer.className = "PlayListThree";
      NonJSONPlayListArrayThree.push(TempIconValue);
      NonJSONPlayListArrayThree.push(TempNameValue);
      JSONStringPlayListArrayThree = JSON.stringify(NonJSONPlayListArrayThree);
      localStorage.setItem("PlayListThree", JSONStringPlayListArrayThree);
      break;
  }
}

// * This Exported the JSON String Arrays to move to Local Database Processing

export {
  JSONStringPlayListArrayOne,
  JSONStringPlayListArrayTwo,
  JSONStringPlayListArrayThree,
};

CreateBtn.addEventListener("click", OnCreateClick);

document.getElementById("str").onclick = function () {
  localStorage.clear();
  console.warn("Cleared!");
};
