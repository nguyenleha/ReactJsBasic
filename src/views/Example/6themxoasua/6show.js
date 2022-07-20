import React from "react";
import "./style.scss"

class Show extends React.Component {

    deletetk = (event) => {
        this.props.xoataikhoan(event)
    }
    edittk = (event) => {
        this.props.doitaikhoan(event)
    }
    editpw = (event) => {
        this.props.doimatkhau(event)
    }
    nutsuataikhoan = (event) => {
        this.props.suataikhoan(event)
    }
    render() {
        const { tongmang, dodaitaikhoan, dulieusuatk } = this.props;
        return (
            <>
                <div className="right">
                    <div className="right-text">
                        <p>Danh sách</p>
                        <table >
                            {
                                tongmang && tongmang.length > 0 &&
                                tongmang.map((item, index) => {
                                    return (
                                        <tbody key={item.id}>
                                            <tr  >
                                                {dodaitaikhoan === true ?
                                                    <>
                                                        <th>{item.username}</th>
                                                        <th>{item.pw}</th>
                                                    </>
                                                    :
                                                    <>{dulieusuatk.id === item.id ?
                                                        <>
                                                            <th><input value={dulieusuatk.username}
                                                                onChange={(event) => this.edittk(event)} /></th>
                                                            <th>
                                                                <input value={dulieusuatk.pw}
                                                                    onChange={(event) => this.editpw(event)} />
                                                            </th>
                                                        </>
                                                        :
                                                        <>
                                                            <th>{item.username}</th>
                                                            <th>{item.pw}</th>
                                                        </>
                                                    }
                                                    </>
                                                }
                                                <th>
                                                    <button onClick={() => this.nutsuataikhoan(item)}>
                                                        {dodaitaikhoan === false && dulieusuatk.id === item.id ? "Save" : "Edit"}
                                                    </button>
                                                </th>
                                                <th>
                                                    <button
                                                        onClick={() => this.deletetk(item)}>
                                                        Delete
                                                    </button>
                                                </th>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
export default Show