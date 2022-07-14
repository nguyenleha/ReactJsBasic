import React from "react";
import "./style.scss"

class Show extends React.Component {

    deletetk = (event) => {
        this.props.xoataikhoan(event)
    }


    render() {
        const { tongmang, suataikhoan} = this.props;
        console.log(">>> Check empty object ben show", suataikhoan)
        return (
            <>
                <div className="right">
                    <div className="right-text">
                        <p>Danh sách</p>
                        <table >
                            {
                                tongmang.map((item, index) => {
                                    return (
                                        <tbody key={item.id}>
                                            <tr  >
                                                <th>{item.username}</th>
                                                <th>{item.pw}</th>
                                                <th>
                                                    <button>
                                                        Edit
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
                    <div className="right-inductor">

                    </div>
                </div>
            </>
        )
    }
}
export default Show