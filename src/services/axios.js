import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.meuaprendizadodev.com.br',
  //baseURL: 'http://localhost:3001'
});
