import { Link } from "react-router-dom"

function Modal() {
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Dados atualizados com sucesso</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>O carro foi atualizado :P</p>
                        </div>
                        <div className="modal-footer">
                            <Link className="btn btn-lg btn-primary" to={`/consulta`}>Voltar para consulta</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal