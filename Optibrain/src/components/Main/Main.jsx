import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCartClick = (prompt) => {
    setInput(prompt);
    onSent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Optibrain</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Krishnendu</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="carts">
              <div
                className="cart"
                onClick={() =>
                  handleCartClick(
                    "Suggest beautiful place to see on an upcoming road Trip"
                  )
                }
              >
                <p>Suggest beautiful place to see on an upcoming road Trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="cart"
                onClick={() =>
                  handleCartClick(
                    "What’s the reaction to and impact of autonomous vehicles"
                  )
                }
              >
                <p>What’s the reaction to and impact of autonomous vehicles</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="cart"
                onClick={() =>
                  handleCartClick(
                    "Explain the key rules of rugby. Start with the basics and go step-by-step."
                  )
                }
              >
                <p>
                  Explain the key rules of rugby. Start with the basics and go
                  step-by-step.
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="cart"
                onClick={() =>
                  handleCartClick(
                    "Help me get organized with a list of 10 tips"
                  )
                }
              >
                Place
                <p>Help me get organized with a list of 10 tips</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result_title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result_data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="result_data" loader>
                  Loading...
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here ..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
