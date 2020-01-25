import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
export default class MainList extends Component {
  state = {
    items: [
      { id: uuid.v4(), name: "Eggs" },
      { id: uuid.v4(), name: "Milk" },
      { id: uuid.v4(), name: "Bread" },
      { id: uuid.v4(), name: "Water" }
    ]
  };

  render() {
    const { items } = this.state;

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
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
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
