import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Layout from '../_common/Layout';

class FeatureA extends Component {
  componentDidMount() {
    console.log('calling listEmployees');
    // this.props.list();
  }

  render() {
    return (
      <Layout title="FEATURE A">
        {this.props.collection.map(el => (
          <div>{JSON.stringify(el)}</div>
        ))}
      </Layout>
    );
  }
}

function mapStateToProps({ featureA }, ownProps) {
  return {
    ...featureA,
    // id: ownProps.id || ownProps.match.params.id,
    onAdd: ownProps.onAdd,
  };
}

export default connect(
  mapStateToProps,
  {
    changePage: route => push(`${route}`),
  }
)(FeatureA);
