import { useRef } from "react";
import useFileDZN from "./UseFileDZN";

export default function App() {
    const formElement = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = Array.from(formElement.current.elements)
            .filter((input) => input.name)
            .reduce(
                (obj, input) => Object.assign(obj, { [input.name]: input.value }),
                {}
            );
        useFileDZN({ data })
    }

    return <>
        <div className="d-flex justify-content-center">
            <h3>Newspaper Problem</h3>
        </div>
        <form
            onSubmit={handleSubmit}
            target="_blank"
            ref={formElement}
        >
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Min nb of pages</th>
                        <th>Max nb of pages</th>
                        <th>Potential Readers -per page-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Internacional</td>
                        <td>
                            <input
                                name="inter-min"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="inter-max"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="inter-pot"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Nacional</td>
                        <td>
                            <input
                                name="nat-min"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="nat-max"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="nat-pot"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Local</td>
                        <td>
                            <input
                                name="loc-min"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="loc-max"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="loc-pot"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Deporte</td>
                        <td>
                            <input
                                name="spo-min"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="spo-max"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="spo-pot"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Cultura</td>
                        <td>
                            <input
                                name="cul-min"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="cul-max"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="cul-pot"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Entretenimiento</td>
                        <td>
                            <input
                                name="ent-min"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="ent-max"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                        <td>
                            <input
                                name="ent-pot"
                                className="form-control"
                                type="number"
                                min="0"
                                step="1"
                                defaultValue="0"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Solve Problem</button>
            </div>
        </form>
    </>
}