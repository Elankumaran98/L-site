import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Button, Card, Grid, Container, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import ModelComp from "../components/ModelComp";
import { Spinner } from "../components/Spinner";

const HHome = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "myusers"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <Spinner/>
  }

  const handleModel = (item) => {
    setOpen(true);
    setUser(item);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        setOpen(false);
        await deleteDoc(doc(db, "myusers", id));
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <Grid columns={3} stackable>
        {users &&
          users.map((item) => (
            <Grid.Column key={item.id}>
              <Card>
                <Card.Content>
                  <Image
                    src={item.img}
                    size="medium"
                    style={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "50%",
                    }}
                  />
                  <Card.Header style={{ marginTop: "10px" }}>
                    {item.name}
                  </Card.Header>
                  <Card.Description>{item.info}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <Button
                      color="green"
                      onClick={() => navigate(`/update/${item.id}`)}
                    >
                      Update
                    </Button>
                    <Button color="purple" onClick={() => handleModel(item)}>
                      View
                    </Button>
                    {open && (
                      <ModelComp
                        open={open}
                        setOpen={setOpen}
                        handleDelete={handleDelete}
                        {...user}
                      />
                    )}
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
};

export default HHome;
