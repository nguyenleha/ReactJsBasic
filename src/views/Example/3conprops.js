import React from "react";

class Conprops extends React.Component {

    render() {

        const { Name, Lname, arr } = this.props;
        console.log(">> check props", this.props)
        //dat ten giong ben formhtml
        return (
            <>
                <div>Child Conprops: {Name} - {Lname}</div>
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
            </>
        )
    }
}
export default Conprops