// import "./App.css";
import { useState, useEffect } from "react";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

import { supabase } from "../Components/client";
import dashboard_img from "../assets/dashboard-img.png";
import ludo from "../assets/ludo.png";
import cards from "../assets/playing-cards.png";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);

  async function checkUser() {
    const user = supabase.auth.user();
    console.log(user);
    setUser(user);

    localStorage.setItem("userData", JSON.stringify(user));
  }

  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }

  async function signOut() {
    await supabase.auth.signOut();
    localStorage.removeItem("userData");
    setUser(null);
  }

  const navigatehandler = () => {
    navigate("/rules");
  };

  return (
    <>
      <div className="home">
        <div className="home_container_left">
          <img className="star_img" src={ludo}></img>
          <img className="star_img2" src={cards}></img>
          <h1>Buy and sell digital art nft</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolore ducimus maxime veniam explicabo ea quidem, et nihil deserunt
            sequi!
          </p>
          <div className="home_container_button">
            {/* {user === null ? (
              <button className="button_github" onClick={signInWithGithub}>
                Connect with github
              </button>
            ) : (
              <button className="button_github">Sign out</button>
            )} */}
            <button className="button_github">Play match</button>
            <button className="button_claim" onClick={navigatehandler}>
              <span>Rules &#x21AA;</span>
            </button>
          </div>
        </div>
        {/* <h1>Hello, {user.email}</h1> */}
        {/* <ConnectKitButton /> */}
        <div className="home_container_right">
          <img src={dashboard_img}></img>
        </div>
      </div>
    </>
  );

  //   if (user) {
  //     return (
  //       <div className="App">
  //         <h1>Hello, {user.email}</h1>
  //         {/* <ConnectKitButton /> */}
  //         <button onClick={signOut}>Sign out</button>
  //       </div>
  //     );
  //   }
  //   return (
  //     <div className="App">
  //       <h1>Hello, please sign in!</h1>
  //       {/* <ConnectKitButton /> */}
  //       <button onClick={signInWithGithub}>Sign In</button>
  //     </div>
  //   );
}

export default Home;
