import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, Input, FormHelperText, Grid, Button, Box, Alert } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    const [showAlert, setShowAlert] = useState(false); // Para controlar a exibição do alerta
    const navigate = useNavigate();

    const handleLogin = () => {
        if (login) {
            // Armazenar o nome do usuário no localStorage
            localStorage.setItem('usuarioLogado', login);

            // Mostrar o alerta de boas-vindas
            setShowAlert(true);

            // Redirecionar para a página de tarefas após o alerta
            setTimeout(() => {
                navigate('./pages/tarefa/ListarTarefa');
            }, 2000); // Espera 2 segundos antes de redirecionar
        } else {
            alert('Por favor, insira um login válido.');
        }
    };

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }} // Centraliza verticalmente
        >
            <Box
                component="div"
                sx={{
                    display: 'table',
                    border: '1px solid #ccc',
                    padding: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                {/* Exibe o alerta de boas-vindas */}
                {showAlert && (
                    <Alert severity="success">
                        Bem-vindo, {login}!
                    </Alert>
                )}

                {/* Campo de Login */}
                <FormControl fullWidth>
                    <Input
                        id="login_nome"
                        aria-describedby="login_nome_helper_text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Digite seu login"
                    />
                    <FormHelperText id="login_nome_helper_text">
                        Insira seu login.
                    </FormHelperText>
                </FormControl>

                {/* Botão de Login com cor laranja */}
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#FF5733' }} // Cor laranja
                    onClick={handleLogin}
                    size="small"
                    sx={{ marginTop: 2 }}
                >
                    Login
                </Button>
            </Box>
        </Grid>
    );
};

export default Login;
