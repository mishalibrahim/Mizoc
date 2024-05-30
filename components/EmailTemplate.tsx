import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  body: string;
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#333",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  header: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "8px 8px 0 0",
    borderBottom: "1px solid #ddd",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
  email: {
    fontSize: "14px",
    color: "#555",
  },
  body: {
    marginTop: "20px",
    fontSize: "16px",
  },
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  body,
}) => (
  <div style={styles.container}>
    <div style={styles.header}>
      <h1 style={styles.title}>{name}</h1>
      <p style={styles.email}>{email}</p>
    </div>
    <div style={styles.body}>{body}</div>
  </div>
);
