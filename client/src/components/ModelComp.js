import React from "react";
import { Modal, Header, Image, Button } from "semantic-ui-react";

const ModelComp = ({
  open,
  setOpen,
  img,
  name,
  email,
  contact,
  info,
  id,
  handleDelete,
}) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>User Detail</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src={img} wrapped />
        <Modal.Description>
          <Header>{name}</Header>
          <p>{email}</p>
          <p>{info}</p>
          <p>{contact}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          color="red"
          Content="Delete"
          labelPosition="right"
          icon="checkmark"
          onClick={() => handleDelete(id)}
        >Delete</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModelComp;
