

import "./Table.css"
const Table = () => {

    return (
        <table className="table-estetic">
            <tr>
                <th>Times</th>
                <th>Temporadas</th>
                <th>Jogos</th>
                <th>Gols</th>
                <th>Assistências</th>
                <th>Títulos</th>
            </tr>
            <tr title="Time do Brasil">
                <td>
                    <img src="https://a.imagem.app/oJHXDk.png" alt="Time do Brasil Foto" title="Time do Brasil Foto"/>
                    Brasil
                </td>
                <td>13</td>
                <td>124</td>
                <td>77</td>
                <td>77</td>
                <td>2</td>

            </tr>
            <tr title="Time do Santos">

                <td>
                    <img src="https://a.imagem.app/oJHZTP.png" alt="Time do Santos Foto" title="Time do Santos Foto" />
                    Santos
                </td>
                <td>5</td>
                <td>230</td>
                <td>138</td>
                <td>77</td>
                <td>6</td>
            </tr>
            <tr title="Time do Barcelona">

                <td>
                    <img src="https://a.imagem.app/oJHE9y.png" alt="Time do Barcelona Foto" title="Time do Barcelona Foto"/>
                    Barcelona
                </td>
                <td>4</td>
                <td>186</td>
                <td>105</td>
                <td>77</td>
                <td>8</td>
            </tr>
            <tr title="Time do PSG">

                <td>
                    <img src="https://a.imagem.app/oJHI4r.png" alt="Time do PSG Foto" title="Time do PSG Foto" />
                    PSG
                </td>
                <td>6</td>
                <td>173</td>
                <td>118</td>
                <td>77</td>
                <td>13</td>
            </tr>
            <tr title="Time do Al-Hilal">
                <td>
                    <img src="https://a.imagem.app/oJHv1v.png" alt="Time do Al-Hilal Foto" title="Time do Al-Hilal Foto"/>
                    Al-Hilal
                </td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>77</td>
                <td>0</td>
            </tr>
        </table>
    )
}

export default Table;
