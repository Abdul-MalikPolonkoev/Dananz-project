import cls from './Service.module.scss';

import kitchen3 from "../../../../shared/assets/png/kitchen3.png";
import arrow_right from '../../../../shared/assets/svg/arrow_right.svg';
import { Link } from 'react-router-dom';

export const Service = () => {
    return (
        <div>
            <div className={cls.service_block}>
                <div className={cls.block_footer}>
                    <span style={{ fontWeight: "500" }}>SERVICE</span>
                    <hr style={{ width: "516px", border: "1px solid #000", marginLeft: "79px", marginTop: "-12px" }} />
                    <h1 style={{ fontSize: "36px", color: "#333333", marginTop: "33px" }}>attractive furniture with the best quality.</h1>
                    <p style={{ color: "#9C9C9C", marginTop: "30px" }}>Customize your interior design into a dream place <p style={{ display: "block", marginTop: "5px" }}>with the best designers and quality furniture. We try</p> <p style={{ marginTop: "-10px" }}>our best to fulfill your expectations.</p></p>
                </div>
                <div className={cls.service_footer}>
                    <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#333333" }}>01</h3>
                    <h3 style={{ fontSize: "24px", fontWeight: "600", marginLeft: "90px", color: "#333333" }}>Interior Design</h3>
                    <Link to="services">
                        <img style={{ marginLeft: "590px", marginTop: "10px", cursor: "pointer", }} src={arrow_right} alt="" />
                    </Link>
                </div>
                <div className={cls.service_footer}>
                    <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#333333" }}>02</h3>
                    <h3 style={{ fontSize: "24px", fontWeight: "600", marginLeft: "90px", color: "#333333" }}>Consultant</h3>
                    <Link to="/services"><img style={{ marginLeft: "631px", marginTop: "10px", cursor: "pointer", }} src={arrow_right} alt="" /></Link>
                </div>
                <div className={cls.service_footer}>
                    <h3 style={{ fontSize: "24px", fontWeight: "600", color: "#333333" }}>03</h3>
                    <h3 style={{ fontSize: "24px", fontWeight: "600", marginLeft: "90px", color: "#333333" }}>Construction Consultant</h3>
                    <Link to="/services">
                        <img style={{ marginLeft: "485px", marginTop: "10px", cursor: "pointer", }} src={arrow_right} alt="" />
                    </Link>
                </div>
            </div>
            <img className={cls.kitchen3} src={kitchen3} alt="" />
        </div>
    )
};