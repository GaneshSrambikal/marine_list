import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import '../App.css'
import img from '../assets/Lighthouse.jpg'

const CardInfo = props => {
  return (
    <div className="card">
      <Card>
        <CardImg top width="100%" src={img} alt="Card image cap" className="card-img" />
        <CardBody>
          <CardTitle>Ganesh Srambikal</CardTitle>
          <CardSubtitle>JavaScript Developer</CardSubtitle>
          <CardText>
            I do projects on JavaScript stacks . Love creating and learn new
            technology . Currently open to jobs . If interested ,please reach
            out to me.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardInfo;
