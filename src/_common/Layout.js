import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  title: 'My App',
  subtitle: null,
  children: null,
};
const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};
const Layout = ({ title, subtitle, children }) => (
  <div>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <div className="content">{children}</div>
  </div>
);

Layout.defaultProps = defaultProps;

Layout.propTypes = propTypes;

export default Layout;
