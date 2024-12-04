import { useState } from "react";
import { Button } from "../Button";
import styles from "./styles.module.css";

export const AddParticipant = ({
  onAddParticipantClick,
}: {
  onAddParticipantClick: (name: string, email: string) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <div className={styles.inputWrapper}>
          <input
            id="name"
            type="text"
            className={styles.input}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            onAddParticipantClick(name, email);
            setName("");
            setEmail("");
          }}
        >
          Add participant
        </Button>
      </div>
    </div>
  );
};
