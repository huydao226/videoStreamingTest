import "../HistoryPage/HistoryPage.css";
import { VideoCard, Sidebar } from "../../components";
import { useServices, useAuth } from "../../context";
import { clearCompleteHistoryOfUserService } from "../../services";
import { useToast } from "../../custom-hooks/useToast";

const HistoryPage = () => {
  const { state, dispatch } = useServices();
  const { showToast } = useToast();
  const { authToken } = useAuth();

  const clearAllHistory = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { history },
      } = await clearCompleteHistoryOfUserService(authToken);
      showToast("History cleared successfully", "success");
      dispatch({ type: "MANAGE_HISTORY", payload: history });
    } catch (error) {
      showToast("Unable to clear history", "error");
      console.error("Unable to clear all history", error);
    }
  };

  return (
    <div className="library-home-page">
        <Sidebar />
      <div className="main-content-page">
        <div className="menu-bar">
          <h2 className="page-title">My History</h2>
          <div>
            <button
              className="btn btn-primary-solid"
              onClick={(e) => clearAllHistory(e)}
              disabled={state.history.length === 0}
            >
              Clear Full History
            </button>
          </div>
        </div>
        <div className="container-videos">
          {state.history.length > 0 ? (
            state.history.map(({ id, title }) => {
              return (
                <VideoCard
                  key={id}
                  id={id}
                  title={title}
                  location={"history"}
                />
              );
            })
          ) : (
            <div className="logout-content">
              <h2 className="h2">No videos added to watch history</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { HistoryPage };