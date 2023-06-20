import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const isMenuOpen=useSelector(store=>store.app);

    if(!isMenuOpen.isMenuOpen){
        return ;
    }

  return (
    <div className="p-5 m-2 shadow-lg w-48">
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <li className="pt-2">Shorts</li>
        <li className="pt-2">Videos</li>
      </ul>
      <h3 className="font-bold pt-5"> Subscription</h3>
      <ul>
        <li className="pt-2">Music</li>
        <li className="pt-2">Sports</li>
        <li className="pt-2">Gaminng</li>
      </ul>
      <h3 className="font-bold pt-5"> Watch later</h3>
      <ul>
        <li className="pt-2">Music</li>
        <li className="pt-2">Sports</li>
        <li className="pt-2">Gaminng</li>
      </ul>
    </div>
  );
};

export default Sidebar;
