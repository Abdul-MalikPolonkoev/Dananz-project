import cls from "./Product.module.scss";
import { Link } from "react-router-dom";

import arrow_right from '../../../../shared/assets/svg/arrow_right.svg';

export const Product = () => {
    return (
        <div className={cls.product_block}>
            <div className={cls.product_block_footer}>
                <span style={{ fontWeight: "500" }}>PRODUCT</span>
                <hr className={cls.line_3} />
                <h1 style={{ color: "#333333", fontSize: "36px", fontWeight: "600", marginTop: "30px", position: "relative" }}>Choose your <span style={{ display: "block", marginLeft: "-1px", marginTop: "10px" }}>product themes.</span></h1>
                <p style={{ color: "#9C9C9C", fontSize: "18px", marginLeft: "840px", marginTop: "-115px" }}>Find the theme you want. If our choice of theme is <p style={{ marginTop: "4px" }}>not what you want, you can customize it as you</p> <p style={{ marginTop: "-14px" }}>want.</p></p>
            </div>
            <div className={cls.product_footer}>
                <span style={{ fontSize: "32px", fontWeight: "600", color: "#333333" }}>01</span>
                <h3 style={{ fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "87px" }}>Vintage</h3>
                <h3 className={cls.product_text_footer} style={{ fontSize: "18px", fontWeight: "400", color: "#333333", }}>the use of simple and limited elements to get the <span style={{ display: "block" }}>best effect or impression.</span></h3>
                <Link to="/portofolio">
                    <img style={{ marginLeft: "1000px" }} className={cls.product_arrow_right} src={arrow_right} alt="" />
                </Link>
            </div>
            <div className={cls.product_footer}>
                <span style={{ fontSize: "32px", fontWeight: "600", color: "#333333" }}>02</span>
                <h3 style={{ fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "80px" }}>Minimalist</h3>
                <h3 className={cls.product_text_footer} style={{ fontSize: "18px", fontWeight: "400", color: "#333333", }}>the use of simple and limited elements to get the <span style={{ display: "block" }}> best effect or impression.</span></h3>
                <Link to="/portofolio">
                    <img style={{ marginLeft: "962px", }} className={cls.product_arrow_right} src={arrow_right} alt="" />
                </Link>
            </div>
            <div className={cls.product_footer}>
                <span style={{ fontSize: "32px", fontWeight: "600", color: "#333333" }}>03</span>
                <h3 style={{ fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "80px" }}>Modern</h3>
                <h3 className={cls.product_text_footer} style={{ fontSize: "18px", fontWeight: "400", color: "#333333", }}>the use of simple and limited elements to get the <span style={{ display: "block" }}> best effect or impression.</span></h3>
                <Link to="/portofolio">
                    <img style={{ marginLeft: "998px", }} className={cls.product_arrow_right} src={arrow_right} alt="" />
                </Link>
            </div>
            <div className={cls.product_footer}>
                <span style={{ fontSize: "32px", fontWeight: "600", color: "#333333" }}>03</span>
                <h3 style={{ fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "80px" }}>transitional</h3>
                <h3 className={cls.product_text_footer} style={{ fontSize: "18px", fontWeight: "400", color: "#333333", }}>the use of simple and limited elements to get the <span style={{ display: "block" }}> best effect or impression.</span> </h3>
                <Link to="/portofolio">
                    <img style={{ marginLeft: "949px", }} className={cls.product_arrow_right} src={arrow_right} alt="" />
                </Link>
            </div>
        </div>
    )
};