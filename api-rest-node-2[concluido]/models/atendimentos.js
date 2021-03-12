const moment = require('moment')
const conexao = require('../infraestrutura/database/conexao')
const axios = require('axios');
const executaQuery = require('../infraestrutura/database/queries');
const repositorio = require('../repositorios/atendimentos');

class Atendimento {

    constructor() {
        this.dataEhValida = ({ data, dataCriacao }) =>
            moment(data).isSameOrAfter(dataCriacao);
        this.clienteEhValido = ({tamanho}) => {
            console.log('tamanho', tamanho)
            return tamanho >= 5};
    
        this.valida = parametros =>
            this.validacoes.filter(campo => {
                const { nome } = campo;
                const parametro = parametros[nome];
                console.log(parametro[nome])
        
                return !campo.valido(parametros[nome]);
        })
    
        this.validacoes = [
            {
                nome: 'data',
                valido: this.dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: this.clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
    }

    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:ss');
        
        const paramentros = {
            data: {data, dataCriacao},
            cliente: {tamanho: atendimento.cliente.length}
        }
        

        const erros = this.valida(paramentros);
        const existemErros = erros.length;

        if(existemErros) {
            return new Promise((resolve, reject) => {
                reject(erros)
            })
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}

            return repositorio.adiciona(atendimentoDatado)
                .then((resultados) => {
                    const id = resultados.insertId;
                    return {...atendimentoDatado, id}
                })
                .catch(err => err);
        }
       
    }

    lista() {
        return repositorio.lista();
    }

    buscaPorId(id, res) {
        return repositorio
            .buscaPorId(id)
            .then(resultados => {
                const atendimento = resultados[0];
                const cpf = atendimento.cliente;

                return axios.get(`http://localhost:8082/${cpf}`)
                    .then((resultado) => {
                        atendimento.cliente = resultado['data'];
                        return atendimento;
                    })
            })
    
        conexao.query(sql, async (erro, resultados) => {
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            if (erro) {
                res.status(400).json(erro)
            } else {
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
    
                atendimento.cliente = data
    
                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }      
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Atendimento