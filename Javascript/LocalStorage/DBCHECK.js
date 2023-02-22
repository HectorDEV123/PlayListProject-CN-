export const RetrievePlayList = () => {

  const RestorePlayListOne = () => {
    let LocalStorageGET = localStorage.getItem("PlayListOne");
    let parsedArray = JSON.parse(LocalStorageGET);

    const NewPlayListContainer = document.createElement("div");
    const NewPlayListIcon = document.createElement("img");
    const NewPlayListName = document.createElement("h5");
    const ViewPlaylistText = document.createElement("h6");
    const ViewPlayListLink = document.createElement("a");

    // * MODIFIES PLAYLIST VALUES

    NewPlayListIcon.src = parsedArray[0];
    NewPlayListName.innerHTML = parsedArray[1];
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
  };

  const RestorePlayListTwo = () => {
    let LocalStorageGET = localStorage.getItem("PlayListTwo");
    let parsedArray = JSON.parse(LocalStorageGET);

    const NewPlayListContainer = document.createElement("div");
    const NewPlayListIcon = document.createElement("img");
    const NewPlayListName = document.createElement("h5");
    const ViewPlaylistText = document.createElement("h6");
    const ViewPlayListLink = document.createElement("a");

    // * MODIFIES PLAYLIST VALUES

    NewPlayListIcon.src = parsedArray[0];
    NewPlayListName.innerHTML = parsedArray[1];
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
  };

  const RestorePlayListThree = () => {
    let LocalStorageGET = localStorage.getItem("PlayListThree");
    let parsedArray = JSON.parse(LocalStorageGET);

    const NewPlayListContainer = document.createElement("div");
    const NewPlayListIcon = document.createElement("img");
    const NewPlayListName = document.createElement("h5");
    const ViewPlaylistText = document.createElement("h6");
    const ViewPlayListLink = document.createElement("a");

    // * MODIFIES PLAYLIST VALUES

    NewPlayListIcon.src = parsedArray[0];
    NewPlayListName.innerHTML = parsedArray[1];
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
  };

  
  if (performance.navigation.type === 1) {
    console.log("Attemping to recover Playlist");

    if (localStorage.getItem("PlayListOne") === null) {
      console.log("Could Not Retrive");
    } else {
      RestorePlayListOne();
    }

    if (localStorage.getItem("PlayListTwo") === null) {
      console.log("Could Not Retrive");
    } else {
      RestorePlayListTwo();
    }

    if (localStorage.getItem("PlayListThree") === null) {
      console.log("Could Not Retrive");
    } else {
      RestorePlayListThree();
    }
  }
};

export const RetrieveSongs = () => {

  
}
