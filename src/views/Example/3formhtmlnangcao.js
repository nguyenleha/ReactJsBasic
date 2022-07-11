import React from "react";
import Conprops from "./3conprops";

class Formhtmlnangcao extends React.Component {
    state = {
        FirstName: "",
        LastName: "",
        arrJobs: [
            { id: "01", title: "nguyen", tien: "100" },
            { id: "02", title: "le", tien: "200" },
            { id: "03", title: "ha", tien: "300" },
        ],
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
        console.log('>>> check data: ', this.state)
    }
    render() {
        const { FirstName, LastName, arrJobs } = this.state;
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

                    <Conprops
                        Name={FirstName}
                        Lname={LastName}
                        arr={arrJobs}
                    />
                </form>
            </>
        )
    }
}
export default Formhtmlnangcao