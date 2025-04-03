import { Button } from '../../../../shared'
import cls from './Footer.module.scss'
import logo from '../../../../shared/assets/png/logo.png'
import facebook from '../../../../shared/assets/svg/facebook.svg'
import instagram from '../../../../shared/assets/svg/instagram.svg'
import tiktok from '../../../../shared/assets/svg/tiktok.svg'
import youtube from '../../../../shared/assets/svg/youtube.svg'
import arrow_footer from '../../../../shared/assets/svg/arrow_footer.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className={cls.footer}>
            <div className='container'>
                <div className={cls.footer_wrap}>
                   <div className={cls.block_footer_body}>
                   <label className={cls.footer_label}>
                        <h3 className={cls.text_footer}>let's discuss making your interior <span style={{display: "block", marginTop: "5px"}}>like a dream place!</span></h3>
                        <div className={cls.footer_block}>
                            <p className={cls.text_block}>Contact us below to work together to build your <span style={{display: "block"}}>amazing interior</span></p>
                            <Link to="/contactus">
                                <Button variant='primary_white' size='medium' className={cls.footer_block_btn}>Contact Us</Button>
                            </Link>
                        </div>
                    </label>
                  <div className={cls.logo_desc}>
                        <img className={cls.logo_footer} src={logo} alt="" />
                        <h3 className={cls.text_logo_footer}>One of the best furniture <span style={{display: "block"}}>agency.</span></h3>
                    </div>
                    <div className={cls.text_1}>
                        <div className={cls.circle}></div>
                        <span className={cls.txt_email} style={{marginTop: "-100px"}}>Enter your email to get the laterst news</span>
                        <img style={{position: "absolute", left: "", top: "", marginLeft: "28px", marginTop: "24px"}} src={arrow_footer} alt="" />
                        <p style={{color: "#D9D9D9", marginLeft: "-22px",}}>Email Address</p>
                        <hr style={{width: "440px", border: "1px solid #141414", marginLeft: "-21px", }}/>
                    </div>
                        <span className={cls.latest_txt} style={{color: "#333333",}}>Follow us On</span>
                        <div className={cls.block_icons}>
                           <img src={facebook} alt="" />
                           <img style={{marginLeft: "33px"}} src={instagram} alt="" />
                           <img style={{marginLeft: "33px"}} src={tiktok} alt="" />
                           <img style={{marginLeft: "33px"}} src={youtube} alt="" />
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
} 