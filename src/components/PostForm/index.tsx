import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormEvent, useState } from "react";
import { novoPost } from "../../services/Post";

function NewPost() {
  const [description, setDescription] = useState<string>("");
  const [offer, setOffer] = useState<string>("");
  const [want, setWant] = useState<string>("");
  const token = window.localStorage.getItem("token");
  


  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    
    
    const payload = {
      description,
      assets: {
        offer,
        want,
      },
      token
    };
    console.log(payload);

    try {
      const response = await novoPost(payload);

      if (response.status !== 201) {
        return alert("Deu algo errado");
      }

      alert("Post efetuado com sucesso");
    } catch (error) {
      console.log(error);
      alert("Operação falhou");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="description">
        <Form.Control
          type="text"
          placeholder="Insira uma legenda"
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDescription(event.target.value)
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="offer">
        <Form.Label>Repetidas</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira os códigos e presione enter"
          value={offer}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setOffer(event.target.value)
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="want">
        <Form.Label>Preciso</Form.Label>
        <Form.Control
          type="text"
          placeholder="Insira os códigos e presione enter"
          value={want}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setWant(event.target.value)
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewPost;
