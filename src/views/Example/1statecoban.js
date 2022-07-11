import React from "react";

class Statecoban extends React.Component {
    state = {
        id: "01",
        channle: "namaw"
    }
    doikytu = (event) => {
        this.setState({
            id: event.target.value,
        })
    }
    nutbam = (event) => {
        alert("Hello word")
        console.log("test")
    }
    render() {
        const meme = this.state.id
        return (
            <>
                <div>
                    <input value={meme} type="text"
                        onChange={(event) => this.doikytu(event)}
                    />
                    so id: {meme}
                </div>
                <div>
                    <button onClick={(event) => this.nutbam(event)}>click me</button>
                </div>
            </>
        )
    }
}
export default Statecoban;