import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Layout from '_common/Layout';
import FeatureTable from '_common/FeatureTable';
import { list } from '_state/featB/actions';
import { list as listUsers } from '_state/user/actions';
import { getUsersById } from '../_state/_selectors';

class FeatureBList extends Component {
  componentDidMount() {
    console.log('calling list');
    this.props.list();
    this.props.listUsers();
  }

  render() {
    return (
      <Layout title="FEATURE B">
        {this.props.collection && <FeatureTable collection={this.props.collection} usersById={this.props.usersById} />}
      </Layout>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.featB,
    usersById: getUsersById(state),
    // id: ownProps.id || ownProps.match.params.id,
    onAdd: ownProps.onAdd,
  };
}

export default connect(
  mapStateToProps,
  {
    changePage: route => push(`${route}`),
    list,
    listUsers,
  }
)(FeatureBList);
