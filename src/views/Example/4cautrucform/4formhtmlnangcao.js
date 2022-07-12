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

    taomoijob = (moi) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, moi]
            // vi dụ js6, coppy toàn bộ phần tử arrjobs + với phần tử mới
            // var arr = [1, 2, 3, 4, 5];
            // var arr2 = [6, 7, 8, 9, 10];
            // arr.push(...arr2);
            // console.log(arr); 1 2 3 4 5 6 7 8 9 10
        })

    }
    xoajob = (xoa) => {
        let tamxoajob = this.state.arrJobs;
        tamxoajob = tamxoajob.filter(item => item.id !== xoa.id)
        // filter là hàm lọc, lọc đi phần tử khác nút xóa và hiện
        this.setState({
            arrJobs: tamxoajob
        })
    }

    render() {
        const { arrJobs } = this.state;
        return (
            <>
                <Taolistmoi
                    taomoijob={this.taomoijob}
                />
                <Conprops
                    arr={arrJobs}
                    xoajob={this.xoajob}
                />

            </>
        )
    }
}
export default Formhtmlnangcao4