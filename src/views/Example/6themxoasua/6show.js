import React from "react";
import "./style.scss"

class Show extends React.Component {

    deletetk = (event) => {
        this.props.xoataikhoan(event)
    }
    edittk = (event) =>{
        this.props.doitaikhoan(event)
    }

    render() {
        const { tongmang, suataikhoan, dulieusuatk} = this.props;
        console.log(">>> Check empty object ben show", suataikhoan)
        console.log(">>> Check empty object ben show", dulieusuatk)
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
                                                {suataikhoan === true ?
                                                    <>
                                                        <th>{item.username}</th>
                                                        <th>{item.pw}</th>
                                                    </>
                                                    :
                                                    <>
                                                        <th><input value={item.username} onChange={(event) => this.edittk(event)}/></th>
                                                        <th><input/></th>
                                                    </>
                                                }

                                                <th>
                                                    <button >
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