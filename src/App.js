// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  ListGroup,
  ListGroupItem
} from "shards-react";

function App() {
  return (
    <Card>
      <CardHeader>&amp;TECH test-me</CardHeader>
      <CardBody>
        <ListGroup>
          <ListGroupItem>Katrina was here</ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>    
  );
}

export default App;
