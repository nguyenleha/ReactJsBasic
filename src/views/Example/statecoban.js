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
            </>
        )
    }
}
export default Statecoban;