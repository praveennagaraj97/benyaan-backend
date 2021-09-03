import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const LeftMenuHeader = () => (
  <Wrapper>
    <Link to="/" className="leftMenuHeaderLink">
      <h1
        style={{
          color: "white",
          paddingTop: "14px",
          fontStyle: "italic",
          fontSize: "31px",
        }}
      >
        Benyaan
      </h1>
    </Link>
  </Wrapper>
);

export default LeftMenuHeader;
