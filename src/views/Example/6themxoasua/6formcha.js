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
        suatk: {}
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
    doitaikhoan = (doi)=> {
        
    }
    suataikhoan = (sua) => {
        const { suatk, tongmang } = this.state
        const suataikhoan = Object.keys(suatk).Length === 0
        if (suataikhoan === false && suatk.id === sua.id) {
            const taikhoanao = [...tongmang]
            const truytimid = taikhoanao.findIndex((item) => item.id === sua.id)
            taikhoanao[truytimid].username=suatk.username
            taikhoanao[truytimid].pw=suatk.username
            this.setState({
                tongmang: taikhoanao,
                suatk: {}
            })
        }
    }

    render() {
        const { suatk } = this.state
        const suataikhoan = Object.keys(suatk).Length === 0
        console.log(">>> Check empty object", suataikhoan)
        return (
            <>
                <div className="login">
                    <div><img src={logo} className="App-logo" alt="logo" /></div>
                    <p>Bài test Thêm - Xóa - Sửa</p>
                    <div className="login_box">
                        <Themlist themtaikhoan={this.themtaikhoan} />
                        <Show tongmang={this.state.tongmang} xoataikhoan={this.xoataikhoan} />
                    </div>
                </div>
            </>
        )
    }
}
export default Themxoasua6