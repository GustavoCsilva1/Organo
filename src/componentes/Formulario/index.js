import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'



const Formulario = (props) => {


const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')

}


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Prencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="nome" placeholder="digite seu Nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
            <CampoTexto obrigatorio={true}   label="Cargo" placeholder="digite seu Cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
            <CampoTexto  label="imagem" placeholder="digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
            <ListaSuspensa obrigatorio={true}  label="time" itens={props.times} valor={time} aoAlterado= {valor => setTime(valor)}/>
            <Botao>
                criar card
            </Botao>
            </form>
        </section>
    )
}


export default Formulario