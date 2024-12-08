import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState(false);

  useEffect(() => {
    const proximoId = Math.max(...tarefas.map(tarefa => tarefa.idTarefa), 0) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => {
    setRecursoTarefa(event.target.value);
  };

  const handleStatus = (event) => {
    setStatusTarefa(event.target.value);
  };

  const handleSalvar = () => {
    setTarefas([
      ...tarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);

    // Exibe a mensagem de sucesso
    setMensagemSucesso(true);

    // Limpa os campos após salvar
    setTituloTarefa('');
    setDescricaoTarefa('');
    setInicioTarefa('');
    setFimTarefa('');
    setRecursoTarefa('');
    setStatusTarefa('');

    // Esconde a mensagem após 2 segundos
    setTimeout(() => setMensagemSucesso(false), 2000);
  };

  return (
    <Grid container spacing={2}>
      <Card sx={style}>
        <CardHeader title="Tarefas" subheader="Cadastro de Tarefas" />
        <CardContent>
          {mensagemSucesso && (
            <Alert variant="filled" severity="success" sx={{ mb: 2 }}>
              Tarefa criada com sucesso!
            </Alert>
          )}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="tarefa_titulo"
                aria-describedby="tarefa_titulo_helper_text"
                value={tituloTarefa}
                onChange={(e) => setTituloTarefa(e.target.value)}
              />
              <FormHelperText id="tarefa_titulo_helper_text">
                Título da Tarefa.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="tarefa_descricao"
                aria-describedby="tarefa_descricao_helper_text"
                value={descricaoTarefa}
                onChange={(e) => setDescricaoTarefa(e.target.value)}
              />
              <FormHelperText id="tarefa_descricao_helper_text">
                Descrição da Tarefa.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={3}>
              <FormControl>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  aria-describedby="tarefa_inicio_helper_text"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                />
                <FormHelperText id="tarefa_inicio_helper_text">
                  Início da Tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <Input
                  id="tarefa_fim"
                  type="date"
                  aria-describedby="tarefa_fim_helper_text"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                />
                <FormHelperText id="tarefa_fim_helper_text">
                  Fim da Tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  label="Recurso"
                  onChange={handleRecurso}
                  size="small"
                >
                  <MenuItem value="Recurso 1">Recurso 1</MenuItem>
                  <MenuItem value="Recurso 2">Recurso 2</MenuItem>
                  <MenuItem value="Recurso 3">Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  label="Status"
                  onChange={handleStatus}
                  size="small"
                >
                  <MenuItem value="Aguardando">Aguardando</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={1}>
              <Button size="small" variant="contained" onClick={handleSalvar}>
                Salvar
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button size="small" variant="outlined" onClick={handleClose}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};

export default CriarTarefa;
