import React from "react";

class Conprops extends React.Component {
    state = {
        hien: false,
    }
    anhien = (event) =>{
        this.setState(
            {
                hien: !this.state.hien
            }
        )
    }
    render() {

        const { Name, Lname, arr } = this.props;
        const { hien } = this.state;
        console.log(">> check props", this.props)
        //dat ten giong ben formhtml
        return (
            <>
                <div>Child Conprops: {Name} {Lname}</div>
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