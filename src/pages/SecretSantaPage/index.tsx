import { useState } from "react";

import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

import styles from "./styles.module.css";
import { AddParticipant } from "@/components/AddParticipant";

export const SecretSantaPage = () => {
  const [participants, setParticipants] = useState<
    { name: string; email: string }[]
  >([]);

  return (
    <div className={styles.container}>
      <Title>Secret Santa Gang 🎅</Title>
      <AddParticipant
        onAddParticipantClick={(name, email) =>
          setParticipants([...participants, { name, email }])
        }
      />
      <Button color="secondary" onClick={() => {}}>
        Start Secret Santa
      </Button>
    </div>
  );
};
