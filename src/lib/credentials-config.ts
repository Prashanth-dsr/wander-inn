import { CredentialsConfig } from "next-auth/providers/credentials";

const credentialsConfig: CredentialsConfig = {
  name: "Credentials",
  credentials: {
    name: {
      label: "Name",
      type: "text",
      placeholder: "your display name",
    },
    username: {
      label: "Username",
      type: "email",
      placeholder: "your email id",
    },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    if (credentials) {
      const { name, username } = credentials;
      const user = { id: "1", name, username };
      return user;
    }
    return null;
  },
  type: "credentials",
  id: "",
};

export default credentialsConfig;
