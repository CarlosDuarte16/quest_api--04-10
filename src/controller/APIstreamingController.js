import * as db from '../repository/APIstreamingRepository.js';

import { Router } from 'express';
const endpoint = Router();

endpoint.post('/inserirCanal/', async (req, resp) => {
  try {
    let canal = req.body;
    let id = await db.inserirCanal(canal);
    resp.send({
      novoId: id
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

endpoint.post('/inserirPrograma/', async (req, resp) => {
  try {
    let programa = req.body;
    let id = await db.inserirPrograma(programa);
    resp.send({
      novoId: id
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

endpoint.post('/inserirUsuario/', async (req, resp) => {
  try {
    let usuario = req.body;
    let id = await db.inserirUsuario(usuario);
    resp.send({
      novoId: id
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

endpoint.post('/inserirProgramaFavorito/', async (req, resp) => {
  try {
    let favorito = req.body;
    let id = await db.inserirProgramaFavorito(favorito);
    resp.send({
      novoId: id
    });
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

export default endpoint