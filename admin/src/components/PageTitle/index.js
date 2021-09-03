import PropTypes from "prop-types";
import React, { memo } from "react";
import { Helmet } from "react-helmet";
import favicon from "../../favicon.png";

const PageTitle = ({ title }) => (
  <Helmet
    title={"Benyaan Admin Panel"}
    link={[{ rel: "icon", type: "image/png", href: favicon }]}
  />
);

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(PageTitle);
