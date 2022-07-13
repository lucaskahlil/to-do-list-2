import { billApi } from "../utils/Tarefas.api";

function ListaTarefa () {

return(
    <div className="global-container">
        <div className="lista-tarefa-container">
            <div className="cadastro-container">
                <input 
                type="text"
                className="input"
                id="criar_tarefa"
                placeholder="Adicionar tarefa"
                name="text"
                />
                <button
                type="button"
                className="button-adicionar"
                >
                    Adicionar
                </button>
            </div>

            <div className="pesquisar-container">
                <input 
                type="text"
                className="input"
                id="criar_tarefa"
                placeholder="Pesquisar por ID"
                name="text"
                />
                <button
                type="button"
                className="button-adicionar"
                >
                    Pesquisar
                </button>
            </div>

            <div className="map-container">

            </div>
        </div>
    </div>
)



}

export default ListaTarefa