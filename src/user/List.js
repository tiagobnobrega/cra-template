import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Layout from '../_common/Layout';
import {list} from '../_state/user/actions'

class FeatureAList extends Component {
  componentDidMount() {
    console.log('calling list');
    this.props.list();
  }

  render() {
    return (
      <Layout title="FEATURE A">
        {this.props.collection && this.props.collection.map(el => (
          <div>{JSON.stringify(el)}</div>
        ))}
      </Layout>
    );
  }
}

function mapStateToProps({ featA }, ownProps) {
  return {
    ...featA,
    // id: ownProps.id || ownProps.match.params.id,
    onAdd: ownProps.onAdd,
  };
}

export default connect(
  mapStateToProps,
  {
    changePage: route => push(`${route}`),
    list,
  }
)(FeatureAList);
