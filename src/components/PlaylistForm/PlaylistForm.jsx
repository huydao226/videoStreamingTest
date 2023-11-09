import { useState } from "react";
import "../PlaylistForm/PlaylistForm.css";
import { useServices } from "../../context";

const PlaylistForm = ({ show, onClose }) => {
  const { handleCreateNewPlaylist, newPlaylistName, setNewPlaylistName } =
    useServices();

  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <article className="container-playlist-form modal">
        <button className="playlist-modal-close-icon" onClick={onClose}>
          <span className="material-icons">close</span>
        </button>
        <form className="form-playlist" action="">
          <h3 className="h3">Create New Playlist</h3>
          <label htmlFor="playlist" className="input-label ">
            Playlist Name
          </label>
          <div className="input-icon">
            <input
              className="input"
              type="text"
              id="playlist"
              name="playlist"
              placeholder="My Playlist"
              onChange={(e) => setNewPlaylistName(e.target.value)}
              value={newPlaylistName}
            />
          </div>
          <button
            className="btn btn-primary-solid"
            onClick={handleCreateNewPlaylist}
          >
            Create Playlist
          </button>
        </form>
      </article>
    </div>
  );
};

export { PlaylistForm };