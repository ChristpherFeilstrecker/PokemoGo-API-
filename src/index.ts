import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { pokemonsRouter } from "./routes/pokemonsRouter";


dotenv.config();
const app = express();

app.use(express.json());

app.use("/pokemons", pokemonsRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});

