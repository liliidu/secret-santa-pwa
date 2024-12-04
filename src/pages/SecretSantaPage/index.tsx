import { useState } from "react";

import { Title } from "@/components/Title";
import { Button } from "@/components/Button";

import styles from "./styles.module.css";
import { AddParticipant } from "@/components/AddParticipant";
import { ParticipantList } from "@/components/ParticipantList";

export const SecretSantaPage = () => {
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <div className={styles.container}>
      <Title>Secret Santa Gang 🎅</Title>
      <ParticipantList participants={participants} />
      <AddParticipant
        onAddParticipantClick={(name) =>
          setParticipants([...participants, name])
        }
      />
      <Button color="secondary" onClick={() => {}}>
        Start Secret Santa
      </Button>
    </div>
  );
};
