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
        if (!this.state.title || !this.state.tien) {
            alert("vui long dien ten")
            return;
        }
        console.log('>>> check data: ', this.state)
        this.props.taomoijob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            tien: this.state.tien
        })
        this.setState({
            title: '',
            tien: ''
        })
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