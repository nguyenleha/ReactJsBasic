import React from "react";
import Show from "./6show";
import Themlist from "./6themlist";
import "./style.scss"
import logo from './logo.svg';

class Themxoasua6 extends React.Component {
    state = {
        tongmang: [
            { id: '01', username: "ha", pw: "123456" },
            { id: '02', username: "le", pw: "123456" },
            { id: '03', username: "nguyen", pw: "123456" }
        ],
        dulieusuatk: {}
    }
    themtaikhoan = (them) => {
        this.setState({
            tongmang: [...this.state.tongmang, them]
        })
    }
    xoataikhoan = (xoa) => {
        let xoataikhoan = this.state.tongmang
        xoataikhoan = xoataikhoan.filter(item => item.id !== xoa.id)
        this.setState({
            tongmang: xoataikhoan
        })
    }
    doitaikhoan = (event) => {
        let nutsua = { ...this.state.dulieusuatk }
        nutsua.username = event.target.value
        this.setState({
            dulieusuatk: nutsua,

        })
    }
    doimatkhau = (event) => {
        let nutsua = { ...this.state.dulieusuatk }
        nutsua.pw = event.target.value
        this.setState({
            dulieusuatk: nutsua,

        })
    }
    suataikhoan = (sua) => {
        
        const { dulieusuatk, tongmang } = this.state
        const suataikhoan = Object.keys(dulieusuatk).length === 0
        if (suataikhoan === false && dulieusuatk.id === sua.id) {
            const taikhoanao = [...tongmang]
            const truytimid = taikhoanao.findIndex((item => item.id === sua.id))
            taikhoanao[truytimid].username = dulieusuatk.username
            taikhoanao[truytimid].pw = dulieusuatk.pw
            this.setState({
                tongmang: taikhoanao,
                dulieusuatk: {}
            })
            return
        }
        this.setState({
            dulieusuatk: sua
        })
    }

    render() {
        const { dulieusuatk } = this.state
        const dodaitaikhoan = Object.keys(dulieusuatk).length === 0 //tra ra true, neu Length (L viet hoa) tra ra false
        // console.log(">>> Check empty object", suataikhoan)
        return (
            <>
                <div className="login">
                    <div><img src={logo} className="App-logo" alt="logo" /></div>
                    <p>Bài test Thêm - Xóa - Sửa</p>
                    <div className="login_box">
                        <Themlist themtaikhoan={this.themtaikhoan} />
                        <Show
                            dodaitaikhoan={dodaitaikhoan}
                            suataikhoan={this.suataikhoan}
                            dulieusuatk={dulieusuatk}
                            tongmang={this.state.tongmang}
                            xoataikhoan={this.xoataikhoan}
                            doitaikhoan={this.doitaikhoan}
                            doimatkhau={this.doimatkhau}
                             />
                    </div>
                </div>
            </>
        )
    }
}
export default Themxoasua6