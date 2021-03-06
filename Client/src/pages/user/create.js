import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Create = () => {
  return (
    <div className="row">
      <div className="offset-md-3 col-md-6 col-sm-12 mt-3">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Create;
