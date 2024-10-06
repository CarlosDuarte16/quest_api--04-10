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

endpoint.get('/consultarCanal/', async (req, resp) => {
  try {
    let registros = await db.consultarCanal();
    resp.send(registros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoint.put('/alterarCanal/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let perfil = req.body;
    let lineaffect = await db.alterarCanal(id, canal);
    if (lineaffect >= 1) {
      resp.send();
    } 
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})



endpoint.delete('/deletarCanal/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let lineaffect = await db.removerCanal(id);
    if (lineaffect >= 1) {
      resp.send();
    }
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

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

endpoint.get('/consultarPrograma/', async (req, resp) => {
  try {
    let registros = await db.consultarPrograma();
    resp.send(registros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoint.put('/alterarPrograma/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let perfil = req.body;
    let lineaffect = await db.alterarPrograma(id, programa);
    if (lineaffect >= 1) {
      resp.send();
    } 
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


endpoint.delete('/deletarPrograma/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let lineaffect = await db.removerPrograma(id);
    if (lineaffect >= 1) {
      resp.send();
    }
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

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

endpoint.get('/consultarUsuario/', async (req, resp) => {
  try {
    let registros = await db.consultarUsuario();
    resp.send(registros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoint.put('/alterarUsuario/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let perfil = req.body;
    let lineaffect = await db.alterarUsuario(id, usuario);
    if (lineaffect >= 1) {
      resp.send();
    } 
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


endpoint.delete('/deletarUsuario/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let lineaffect = await db.removerUsuario(id);
    if (lineaffect >= 1) {
      resp.send();
    }
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})



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

endpoint.get('/consultarProgramaFavorito/', async (req, resp) => {
  try {
    let registros = await db.consultarProgramaFavorito();
    resp.send(registros);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoint.put('/alterarProgramaFavorito/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let perfil = req.body;
    let lineaffect = await db.alterarProgramaFavorito(id, programafavorito);
    if (lineaffect >= 1) {
      resp.send();
    } 
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


endpoint.delete('/deletarProgramaFavorito/:id', async (req, resp) => {
  try {
    let id = req.params.id;

    let lineaffect = await db.removerProgramaFavorito(id);
    if (lineaffect >= 1) {
      resp.send();
    }
    else {
      resp.status(404).send({ erro: 'Nenhum registro encontrado' })
    }

  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})


export default endpoint