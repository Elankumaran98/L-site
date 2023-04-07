import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import { storage, db } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  info: "",
  contact: "",
};

const AddEditUser = () => {
  const [data, setData] = useState(initialState);
  const {name,email,info,contact}=data
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState({});

  const handleChange=()=>{

  }

  return (
    <Grid
      centered
      verticalAlign="middle"
      columns="3"
      style={{ height: "88vh" }}
    >
      <Grid.Row>
        <Grid.Column textAlign="center">
          <div>
            {isSubmit ? (
              <Loader active inline="centered" />
            ) : (
              <>
                <h2>Add User</h2>
                <Form>
                  <Form.Input
                    label="Name"
                    placeHolder="Enter Name"
                    name="name"
                    onChange={handleChange}
                    value={name}
                  />
                </Form>
              </>
            )}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default AddEditUser;
