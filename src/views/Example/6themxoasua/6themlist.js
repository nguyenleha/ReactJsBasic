import React from "react";
import "./style.scss"


class Themlist extends React.Component {
    state = {
        username: "",
        pw: ""
    }
    nhapusername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    nhappw = (event) => {
        this.setState({
            pw: event.target.value
        })
    }
    Bamtao = (event) => {
        event.preventDefault()
        if(!this.state.username || !this.state.pw){
            alert('vui long dang nhap')
            return
        }
        this.props.themtaikhoan({
            id: Math.floor(Math.random() * 100),
            username: this.state.username,
            pw: this.state.pw
        })
        this.setState({
            username: "",
            pw: ""
        })
    }
    render() {
        const { username, pw } = this.state
        return (
            <>
                <div className="left">
                    <div className="contact">
                        <form >
                            <h3>SIGN IN</h3>
                            <input type="text" placeholder="Username"
                                value={username}
                                onChange={(event) => this.nhapusername(event)}
                            />
                            <input type="text" placeholder="Password"
                                value={pw}
                                onChange={(event) => this.nhappw(event)}
                            />
                            <button className="submit" 
                                onClick={(event) => this.Bamtao(event)}
                            >
                                LET'S GO
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default Themlist