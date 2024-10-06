import con from './connection.js';

export async function inserirCanal(canal) {
  const comando = `
    INSERT INTO tb_canal (id_canal , nm_canal, nr_canal, bt_aberto )
    VALUES (?, ?, ?, ? )    
  `;

  let resposta = await con.query(comando, [
    canal.id,
    canal.nome,
    canal.canal,
    canal.publico
  ]);

  let info = resposta[0];

  return info.insertId;
}

export async function consultarCanal() {
  const comando = `
    select id_canal           as id,
          nm_canal            as nome,
          nr_canal            as canal,
          bt_aberto           as publico
    from tb_canal;
  `;
  let resposta = await con.query(comando);
  let registro = resposta[0];

  return registro;
}

export async function alterarCanal(id, canal) {
  const comando = `
    update tb_canal
    set nm_canal = ?,
        nr_canal = ?,
        bt_aberto = ?
    where id_canal = ?;
  `;
  let resposta = await con.query(comando, [
    canal.nome,
    canal.canal,
    canal.publico,
    id,
  ]);
  let info = resposta[0];

  return info.affectedRows;

};

export async function removerCanal(id) {
  const comando = `
    delete from tb_canal
    where id_canal = ?;
  `;
  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  return info.affectedRows;
}


export async function inserirPrograma(programa) {
  const comando = `
    INSERT INTO tb_canal_programa (id_canal_programa , id_canal, nm_programa, ds_genero, hr_programa )
    VALUES (?, ?, ?, ?, ?);
  `;

  let resposta = await con.query(comando, [
    programa.id,
    programa.id_canal,
    programa.nome,  
    programa.genero,
    programa.horario
  ]);

  let info = resposta[0];

  return info.insertId;
  };

  export async function consultarPrograma() {
    const comando = `
      SELECT 
        id_canal_programa   AS id,
        id_canal            AS id_canal,
        nm_programa         AS nome,
        ds_genero           AS genero,
        hr_programa         AS tempo
      FROM tb_canal_programa;
    `;
  
    let resposta = await con.query(comando);
    let registros = resposta[0];
  
    return registros;
  }

  export async function alterarPrograma(id, programa) {
    const comando = `
      update tb_canal_programa
      set id_canal = ?,
          nm_programa = ?,
          ds_genero = ?,
          hr_programa = ?
      where id_canal_programa = ?;
    `;
    let resposta = await con.query(comando, [
      programa.id_canal,
      programa.nome,
      programa.genero,
      programa.horario,
      id,
    ]);
    let info = resposta[0];
  
    return info.affectedRows;
  
  };
  

  export async function removerPrograma(id) {
    const comando = `
      delete from tb_canal_programa
      where id_canal_programa = ?;
    `;
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
  
    return info.affectedRows;
  }
  
  



export async function inserirUsuario(usuario) {
  const comando = `
    INSERT INTO tb_usuario (id_usuario , nm_usuario )
    VALUES (?, ? )
  `;

  let resposta = await con.query(comando, [
    usuario.id,
    usuario.nome,
  ]);

  let info = resposta[0];

  return info.insertId;
}

export async function consultarUsuario() {
  const comando = `
    select id_usuario           as id,
           nm_usuario          as nome
    from tb_usuario;
  `;
  let resposta = await con.query(comando);
  let registro = resposta[0];

  return registro;
}

export async function alterarUsuario(id, usuario) {
  const comando = `
    update tb_usuario
      set nm_usuario = ?
    where id_usuario = ?;
  `;
  let resposta = await con.query(comando, [
    usuario.nome,
    id,
  ]);
  let info = resposta[0];

  return info.affectedRows;

};


export async function removerUsuario(id) {
  const comando = `
    delete from tb_usuario
    where id_usuario = ?;
  `;
  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  return info.affectedRows;
}


export async function inserirProgramaFavorito(favorito) {
  const comando = `
    INSERT INTO tb_programa_favorito (id_programa_favorito , id_usuario, id_canal_programa )
    VALUES (?, ?, ?);
    `;

  let resposta = await con.query(comando, [
    favorito.id,
    favorito.usuario,
    favorito.programa
  ]);

  let info = resposta[0];

  return info.insertId;
  
}

export async function consultarProgramaFavorito() {
  const comando = `
    select id_programa_favorito    as id,
           id_usuario              as id_usuario,
           id_canal_programa       as id_programa
    from tb_programa_favorito;

  `;
  let resposta = await con.query(comando);
  let registro = resposta[0];

  return registro;
};

export async function alterarProgramaFavorito(id, programafavorito) {
  const comando = `
    update tb_produto
    set id_usuario = ?,
        id_canal_programa = ?
    where id_programa_favorito = ?;
  `;
  let resposta = await con.query(comando, [
    programafavorito.id_usuario,
    programafavorito.id_programa,
    id,
  ]);
  let info = resposta[0];

  return info.affectedRows;

};



export async function removerProgramaFavorito(id) {
  const comando = `
    delete from tb_programa_favorito
    where id_programa_favorito = ?;
  `;
  let resposta = await con.query(comando, [id]);
  let info = resposta[0];

  return info.affectedRows;
}
