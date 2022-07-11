import React from "react";

class taolistmoi extends React.Component {
    state = {
        title: "",
        tien: ""
    }
    thaydoititle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    thaydoitien = (event) => {
        this.setState({
            tien: event.target.value
        })
    }
    bamdangnhap = (event) => {
        event.preventDefault()
        console.log('>>> check data: ', this.state)
        
    }
    render() {
        const { title, tien } = this.state;
        return (
            <>
                <form >
                    <label htmlFor="FName">Title: {title}</label>
                    <br />
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => this.thaydoititle(event)}
                    />
                    <br />
                    <label>Salary: {tien}</label>
                    <br />
                    <input
                        type="text"
                        value={tien}
                        onChange={(event) => this.thaydoitien(event)}
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
export default taolistmoi