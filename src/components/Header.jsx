import React from "react";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";

// to display the header
function Header() {
  return (
    <header>
      <h1>
        <DynamicFeedIcon />
        BiBiBlog
      </h1>
    </header>
  );
}

export default Header;