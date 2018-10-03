import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  collection: [],
  usersById: [],
};
const propTypes = {
  collection: PropTypes.array,
  usersById: PropTypes.array,
};
const FeatureTable = ({ collection, usersById }) => (
  <table>
    <thead>
      <th>Id</th>
      <th>Description</th>
      <th>Size</th>
      <th>Author</th>
    </thead>
    <tbody>
      {collection.map(el => (
        <tr>
          <td>{el.id}</td>
          <td>{el.desc}</td>
          <td>{el.size}</td>
          <td>{usersById && ((usersById[el.author_id] && usersById[el.author_id].name) || `Usuário: ${el.author_id}`)}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

FeatureTable.defaultProps = defaultProps;

FeatureTable.propTypes = propTypes;

export default FeatureTable;
