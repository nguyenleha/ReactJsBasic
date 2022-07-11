import React from "react";
import Conprops from "./4conprops";
import Taolistmoi from "./4taolistmoi"

class Formhtmlnangcao4 extends React.Component {
    state = {
        arrJobs: [
            { id: "01", title: "nguyen", tien: "100" },
            { id: "02", title: "le", tien: "200" },
            { id: "03", title: "ha", tien: "300" },
        ],
    }

    render() {
        const { title, tien, arrJobs } = this.state;
        return (
            <>
                <Taolistmoi />
                <Conprops
                    arr={arrJobs}
                />

            </>
        )
    }
}
export default Formhtmlnangcao4