import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {connect} from 'react-redux'
import {getItems ,deleteItems} from '../actions/itemActions'
import PropTypes from 'prop-types'
import uuid from "uuid";
class MainList extends Component {
  componentDidMount(){
    this.props.getItems();
  }
onDeleteClick = id =>{
  this.props.deleteItems(id);
}
  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Button
          color="info"
          style={{ marginBottom: " 2rem" }}
          onClick={() => {
            const name = prompt("enter name");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid.v4(), name }]
              }));
            }
          }}
        >
          Add Items
        </Button>
        <ListGroup className="list-style">
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {name}

                  <Button
                    className="remove-btn"
                    color="warning"
                    size="sm"
                    style={{ float: "right" }}
                    onClick={this.onDeleteClick.bind(this ,id)}
                  >
                    &times;
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

MainList.propTypes ={
  getItems : PropTypes.func.isRequired,
  item : PropTypes.object.isRequired
}

const mapStateToProps = state =>({
item : state.item
})
export default connect(mapStateToProps , {getItems ,deleteItems})(MainList);