import styles from "./styles.module.css";

export const ParticipantList = ({
  participants,
}: {
  participants: string[];
}) => {
  return (
    <div className={styles.container}>
      {participants.map((name, index) => (
        <p key={index} className={styles.participant}>
          {name}
        </p>
      ))}
    </div>
  );
};
