import JsonPre from "./JsonPre";

function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];

    return (
        <div>
            <h3>
                JSON Stringify
            </h3>
            squares = {JSON.stringify(squares)}
            <br />
            <JsonPre json={squares} />  
        </div>
    ) 

}

export default JsonStringify;