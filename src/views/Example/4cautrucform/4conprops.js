import React from "react";

class Conprops extends React.Component {
    state = {
        hien: false,
    }
    anhien = (event) => {
        this.setState(
            {
                hien: !this.state.hien
            }
        )
    }
    xoajob = (event) => {
        console.log("clsd")
        this.props.xoajob(event)
    }
    render() {
        const { arr } = this.props;
        const { hien } = this.state;
        console.log(">> check props", this.props)
        //dat ten giong ben formhtml
        return (
            <>
                {hien === false ?
                    <div>
                        <button onClick={(event) => this.anhien(event)}>hien</button>
                    </div>
                    :
                    <>
                        <div>
                            {
                                arr.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.id} - {item.title} -{item.tien}
                                            <></><span onClick={() => this.xoajob(item)}>delete</span>
                                            {/* click vào phần tử được chọn (item, dựa vào cái key id) */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={(event) => this.anhien(event)}>an</button></div>
                    </>
                }




            </>
        )
    }
}
export default Conprops