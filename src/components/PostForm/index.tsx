import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FormEvent, useState } from "react";

function BasicExample() {
  const [description, setDescription] = useState<string>("");
  const [offer, setOffer] = useState<string>("");
  const [want, setWant] = useState<string>("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      description,
      offer,
      want,
    };
    console.log(payload);
  };

  //   try {
  //     const response = await addUser(payload);
  //     if (response.status !== 201) {
  //       alert("Cadastro efetuado com sucesso!");
  //     }
  //   } catch (error) {
  //     alert("Erro ao cadastrar usuário!");
  //   } finally {
  //     setName("");
  //     setEmail("");
  //     setPassword("");
  //     setNickname("");
  //     setCity("");
  //     setState("");
  //     setGender("");
  //     setBirthDate("");
  // }
  // };

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

export default BasicExample;
