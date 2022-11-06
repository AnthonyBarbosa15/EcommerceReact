import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import api from "../../services/api"
import './formularioCadastro.css'

function FormularioCadastro() {
    const { state } = useLocation()
    const [item, setItem] = useState(state)
    const [veiculo, setVeiculo] = useState("")
    const [modelo, setModelo] = useState("")
    const [fabricante, setFabricante] = useState("")
    const [valor, setValor] = useState("")
    const [ano, setAno] = useState("")
    const [foto, setFoto] = useState("https://i.pinimg.com/originals/5b/ac/0a/5bac0a81ff4f4e5fc957c3c468b72a6f.png")

    useEffect(() => {
    }, [])


    const cadastrarItem = async () => {
        const itemAtualizado = {
            veiculo: veiculo,
            modelo: modelo,
            fabricante: fabricante,
            ano: ano,
            valor: valor,
            foto: foto
        }
        await api.post(`/carros/`, itemAtualizado)
    }

    return (
        <>
            <div className="container">
                <form>
                    <div className="form-row">
                        <img src={foto} className="card-img-top" alt="Imagem do carro" />
                        <div className="form-group col-md-9">
                            <label htmlFor="veiculo">Veículo</label>
                            <input type="text" className="form-control" id="veiculo" placeholder="Veiculo" onChange={e => setVeiculo(e.target.value)} required/>
                        </div>
                        <div className="form-group col-md-9">
                            <label htmlFor="modelo">Modelo</label>
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" onChange={e => setModelo(e.target.value)} required/>
                        </div>
                        <div className="form-group col-md-9">
                            <label htmlFor="fabricante">Fabricante</label>
                            <input type="text" className="form-control" id="fabricante" placeholder="Fabricante" onChange={e => setFabricante(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="ano">Ano</label>
                            <input type="text" className="form-control" id="ano" placeholder="Ano" onChange={e => setAno(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="valor">Valor</label>
                            <input type="text" className="form-control" id="valor" placeholder="Valor" onChange={e => setValor(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="ano">Foto</label>
                            <input type="text" className="form-control" id="foto" placeholder="Url da foto" onChange={e => setFoto(e.target.value)} />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={cadastrarItem}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default FormularioCadastro