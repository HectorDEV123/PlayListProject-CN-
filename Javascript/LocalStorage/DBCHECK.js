
import {
  JSONStringPlayListArrayOne,
  JSONStringPlayListArrayTwo,
  JSONStringPlayListArrayThree,
} from "../script.js";

export function CheckDataBase() {
  // * This IF Statements checks if the Local Database is Empty.

  if (localStorage.length == 0) {
    console.error("Local-Storage was checked and retrived nothing.");
    localStorage.clear();
  }

  // * This ELSE IF Statement Checks if Local Database has 1 or more values. If any values have been detected this means that the LocalStorage has Playlist Data that can be restored
  else if (localStorage.length >= 1 ) {
    console.log("Poetential Playlists have been found.");
    PlaylistOneRestore();
    PlaylistTwoRestore();
    PlaylistThreeRestore();
  }
}

function PlaylistOneRestore() {
  const LocalStorageGET = localStorage.getItem("PlayListOne");
  let ParsedArray = JSON.parse(LocalStorageGET);

  let PlayListImg = ParsedArray[0];
  let PlayListName = ParsedArray[1];

  console.log(JSONStringPlayListArrayOne);

  // * The Constant Variables create the Playlist Container and its content.

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * Once Playlist Container has been made the code belows starts modifiying its Data.

  NewPlayListIcon.src = PlayListImg;
  NewPlayListName.innerHTML = PlayListName;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // * The Code Below Displays the PlayList to the Document Model

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);
}

function PlaylistTwoRestore() {
  const LocalStorageGET = localStorage.getItem("PlayListTwo");
  const ParsedArray = JSON.parse(LocalStorageGET);

  let PlayListImg = ParsedArray[0];
  let PlayListName = ParsedArray[1];

  console.log(JSONStringPlayListArrayOne);

  // * The Constant Variables create the Playlist Container and its content.

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * Once Playlist Container has been made the code belows starts modifiying its Data.

  NewPlayListIcon.src = PlayListImg;
  NewPlayListName.innerHTML = PlayListName;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // * The Code Below Displays the PlayList to the Document Model

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);
}

function PlaylistThreeRestore() {
  const LocalStorageGET = localStorage.getItem("PlayListThree");
  const ParsedArray = JSON.parse(LocalStorageGET);

  let PlayListImg = ParsedArray[0];
  let PlayListName = ParsedArray[1];

  console.log(JSONStringPlayListArrayOne);

  // * The Constant Variables create the Playlist Container and its content.

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * Once Playlist Container has been made the code belows starts modifiying its Data.

  NewPlayListIcon.src = PlayListImg;
  NewPlayListName.innerHTML = PlayListName;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // * The Code Below Displays the PlayList to the Document Model

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);
}
  