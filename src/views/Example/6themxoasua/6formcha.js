import React from "react";
import Show from "./6show";
import Themlist from "./6themlist";
import "./style.scss"
import logo from './logo.svg';

class Themxoasua6 extends React.Component {

    render() {
        return (
            <>
                <div className="formall">
                    <div><img src={logo} className="App-logo" alt="logo" /></div>

                    <p>Bài test Thêm - Xóa - Sửa</p>
                    <div className="trong">
                        <Themlist />
                        <Show />
                    </div>
                </div>
            </>
        )
    }
}
export default Themxoasua6