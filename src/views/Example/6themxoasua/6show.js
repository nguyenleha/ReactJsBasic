import React from "react";
import "./style.scss"

class Show extends React.Component {
    
    deletetk = (event) => {
        this.props.xoataikhoan(event)
    }


    render() {
        const { tongmang } = this.props;
        return (
            <>
                <div className="right">
                    <div className="right-text">
                        <p>Danh sách</p>
                        <table >
                            {
                                tongmang.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
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