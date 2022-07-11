import React from "react";

class Formhtmlcoban extends React.Component {
    state = {
        FirstName: "",
        LastName: ""
    }
    thaydoiFirstName = (event) => {
        this.setState({
            FirstName: event.target.value
        })
    }
    thaydoiLastName = (event) => {
        this.setState({
            LastName: event.target.value
        })
    }
    bamdangnhap = (event) => {
        event.preventDefault()
        console.log('>>> check data: ',this.state)
    }
    render() {
        const FirstName = this.state.FirstName
        const LastName = this.state.LastName
        return (
            <>
                <form >
                    <label htmlFor="FName">{FirstName}</label>
                    <br />
                    <input
                        type="text"
                        value={FirstName}
                        onChange={(event) => this.thaydoiFirstName(event)}
                    />
                    <br />
                    <label>{LastName}</label>
                    <br />
                    <input
                        type="text"
                        value={LastName}
                        onChange={(event) => this.thaydoiLastName(event)}
                    />
                    <br />
                    <br />
                    <input
                        type="button"
                        value="Submit"
                        onClick={(event) => this.bamdangnhap(event)} />
                </form>
            </>
        )
    }
}
export default Formhtmlcoban