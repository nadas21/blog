import "./main.css";

export const Loading = () => {
  return (
    <>
      <header className="loading">
        <div className="container">
          <div className="loading-inner">
            <div className="loading-box">
              <h2 className="loading-text-h2">Yangiliklar</h2>
              <input type="text" placeholder="qidirish..." className="list-input" />
            </div>
            <div className="select-list">
              <h1 className="select-h1">Loading....</h1>
            </div>
              <div className="btn">
              <button className="select-btn">
              <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button className="select-btn">
              <i class="fa-solid fa-arrow-right"></i>
              </button>
              </div>
          </div>
    
        </div>
      </header>
    </>
  );
};
