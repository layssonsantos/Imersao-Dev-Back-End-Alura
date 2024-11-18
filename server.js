import express from 'express';

// Criação do servidor
const app = express();
app.listen(3000, () => {
    console.log('Servidor escutando...');
});

// Criação de requisições
app.get('/api', (req, res) => {
    res.status(200).send('Boas vindas à imersão!');
});