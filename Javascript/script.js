// * Imports a function that will retrieve any Playlists made from local storage
import { RetrievePlayList } from "./LocalStorage/DBCHECK.js";

// ! Calls the Retrieve PlayList Function
RetrievePlayList();

// * Input & Button Variables from HTML

const PlayListNameInput = document.getElementById("PlayListNameInput");
const PlayListIconInput = document.getElementById("PlayListIconInput");
const CreateBtn = document.getElementById("CreatePlayBtn");
let PlayListID = 4;

// * The function below executes a function that is located in the DBINIT File to see if the localstorage has any playlists in it

function OnCreateClick() {
  // ! This Function sets the maximum amount of Playlists to THREE!

  switch (PlayListID) {
    case 4:
      PlayListID -= 1;
      CreatePlayList(localStoageSave);
      console.log("Playlist Created!");
      break;

    case 3:
      PlayListID -= 1;
      CreatePlayList(localStoageSave);
      console.log("Playlist Created");
      break;

    case 2:
      PlayListID -= 1;
      CreatePlayList(localStoageSave);
      console.log("Playlist Created");
      break;

    default:
      console.error("Maximum Amount of Playlist Reached!");
      break;
  }
}

function CreatePlayList(CallBack) {
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

  CallBack(TempIconValue, TempNameValue);
}

const localStoageSave = (IconVal, IconName) => {

  switch (PlayListID) {
    case 3:
      var NonJSONPlayList = new Array();
      NonJSONPlayList.push(IconVal, IconName);
      var JSONString = JSON.stringify(NonJSONPlayList);
      localStorage.setItem("PlayListOne", JSONString);
      break;

      case 2:
      var NonJSONPlayList = new Array();
      NonJSONPlayList.push(IconVal, IconName);
      var JSONString = JSON.stringify(NonJSONPlayList);
      localStorage.setItem("PlayListTwo", JSONString);
      break;

      case 1:
      var NonJSONPlayList = new Array();
      NonJSONPlayList.push(IconVal, IconName);
      var JSONString = JSON.stringify(NonJSONPlayList);
      localStorage.setItem("PlayListThree", JSONString);
      break;
  }

};

CreateBtn.addEventListener("click", OnCreateClick);

document.getElementById("str").onclick = function () {
  localStorage.clear();
  console.warn("Cleared!");
};
