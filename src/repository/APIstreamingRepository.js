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

export async function inserirPrograma(programa) {
  const comando = `
    INSERT INTO tb_canal_programa (id_canal_programa , id_canal, nm_programa, ds_genero, hr_programa )
    VALUES (?, ?, ?, ?, ? );  

    select p.id_canal
    from tb_canal 
    inner join tb_canal_programa p
    on tb_canal.id_canal = p.id_canal;
  `;

  let resposta = await con.query(comando, [
    programa.id,
    programa.id_canal,
    programa.programa,
    programa.genero,
    programa.horario
  ]);

  let info = resposta[0];

  return info.insertId;
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

export async function inserirProgramaFavorito(favorito) {
  const comando = `
    INSERT INTO tb_programa_favorito (id_programa_favorito , id_usuario, id_canal_programa )
    VALUES (?, ?, ?)
  `;

  let resposta = await con.query(comando, [
    favorito.id,
    favorito.usuario,
    favorito.programa
  ]);

  let info = resposta[0];

  return info.insertId;
}