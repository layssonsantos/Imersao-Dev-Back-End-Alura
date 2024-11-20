import express from 'express';

// Objetos
const posts = [
    {
        descricao: 'Uma foto teste', 
        imagem: 'https://placecats.com/millie/300/150',
        id: 1
    },
    {
        descricao: 'Paisagem incrível!',
        imagem: 'https://source.unsplash.com/random/300x150/?nature',
        id: 2
    },
    {
        descricao: 'Meu pet de estimação',
        imagem: 'https://placekitten.com/300/200',
        id: 3
    }
];

// Criação do servidor
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

// Criação de requisições
app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    return posts.findIndex((posts) => {
        return posts.id == Number(id)
    })
}

// Get por ID
app.get('/posts/:id', (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});