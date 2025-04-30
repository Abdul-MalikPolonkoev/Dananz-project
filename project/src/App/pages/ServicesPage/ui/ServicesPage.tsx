import { Footer, Navbar } from '../../../widgets/Navbar'
import cls from './ServicesPage.module.scss'
import services_photo from '../../../shared/assets/png/services_photo.png'
import photo1 from '../../../shared/assets/png/photo1.png'
import photo2 from '../../../shared/assets/png/photo2.png'
import photo3 from '../../../shared/assets/png/photo3.png'
import arrow_right from '../../../shared/assets/svg/arrow_right.svg'
import { BlockList } from 'net'
import { Link } from 'react-router-dom'

export const ServicesPage = () => {
    return (
        <div className={cls.services}>
            <div className='container'>
                <div className={cls.services_wrap}>
                  <Navbar/>
                    <div className={cls.services_block}>
                        <h3 className={cls.services_logo}>Services</h3>
                        <span className={cls.services_desc}>It is a long established fact that a reader will be <span className={cls.textdd} style={{display: "block",}}>distracted by the readable content of a page when</span>looking at its layout.</span>
                        <img className={cls.services_img} src={services_photo} alt="" />
                    </div>
                  <div className={cls.achievement_block}>
                    <h1 className={cls.achievement_logo}>ACHIEVEMENT</h1>
                    <hr className={cls.line}/>
                    <div className={cls.block_sections}>
                        <div className={cls.block_item}>
                            <img className={cls.block_img} src={photo1} alt="" />
                            <div className={cls.block_footer}>
                            <h4 className={cls.block_logo}>Interior design</h4>
                            <span className={cls.block_description}>
                            Customize your interior design into a 
                            <span style={{display: "block", marginTop: "5px"}}>dream place with the best designers</span>
                            <span style={{display: "block", marginTop: "5px"}}>and quality furniture. We try our best</span>
                            <span style={{display: "block", marginTop: "5px"}}>to fulfill your expectations.</span>
                            </span>
                            </div>
                        </div>
                        <div className={cls.block_item2}>
                            <img className={cls.block_img2} src={photo2} alt="" />
                            <div className={cls.block_footer2}>
                            <h4 className={cls.block_logo2}>Consultant </h4>
                            <span className={cls.block_description2}>
                            Customize your interior design into a 
                            <span style={{display: "block", marginTop: "5px"}}>dream place with the best designers</span>
                            <span style={{display: "block", marginTop: "5px"}}>and quality furniture. We try our best</span>
                            <span style={{display: "block", marginTop: "5px"}}>to fulfill your expectations.</span>
                            </span>
                            </div>
                        </div>
                        <div className={cls.block_item3}>
                            <img className={cls.block_img3} src={photo3} alt="" />
                            <div className={cls.block_footer3}>
                            <h4 className={cls.block_logo3}>construction consultant</h4>
                            <span className={cls.block_description3}>
                            Customize your interior design into a 
                            <span style={{display: "block", marginTop: "5px"}}>dream place with the best designers</span>
                            <span style={{display: "block", marginTop: "5px"}}>and quality furniture. We try our best</span>
                            <span style={{display: "block", marginTop: "5px"}}>to fulfill your expectations.</span>
                            </span>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className={cls.product_block_footer}>
                    <div className={cls.product_block_logo}>
                        <span className={cls.logo_product}>PRODUCT</span>
                        <hr className={cls.product_line}/>
                        <h3 className={cls.product_block_logo2}>Choose your <span style={{display: "block"}}>product themes.</span></h3>
                        <p className={cls.product_block_desc}>
                        Find the theme you want. If our choice of theme is 
                        <span style={{display: "block", marginTop: "5px"}}>
                        not what you want, you can customize it as you</span> 
                        <span style={{display: "block", marginTop: "5px"}}>want.</span>
                        </p>
                    </div>
                    <div className={cls.product_block_main}>
                        <div className={cls.block_main_item}>
                            <div style={{display: "flex", alignItems: "center"}}>
                            <h2 className={cls.logo_1}>01</h2>
                            <span className={cls.logo_2}>Vintage</span>
                            <Link to="/portofolio">
                            <img style={{marginLeft: "919px"}} className={cls.block_arrow} src={arrow_right} alt="" />
                            </Link>
                            </div>
                            <p className={cls.desc_1}>the use of simple and limited elements to get the <span style={{display: "block"}}>best effect or impression.</span></p>
                        </div>
                        <div style={{marginTop: "-6px",}} className={cls.block_main_item}>
                            <div style={{display: "flex", alignItems: "center"}}>
                            <h2 className={cls.logo_1}>02</h2>
                            <span style={{marginLeft: "82px"}} className={cls.logo_2}>Minimalist</span>
                            <Link to="/portofolio">
                            <img style={{marginLeft: "879px", }} className={cls.block_arrow} src={arrow_right} alt="" />
                            </Link>
                            </div>
                            <p className={cls.desc_1}>the use of simple and limited elements to get the <span style={{display: "block"}}>best effect or impression.</span></p>
                        </div>
                        <div style={{marginTop: "-6px"}} className={cls.block_main_item}>
                            <div style={{display: "flex", alignItems: "center",}}>
                            <h2 className={cls.logo_1}>03</h2>
                            <span style={{marginLeft: "82px"}} className={cls.logo_2}>Modern</span>
                            <Link to="/portofolio">
                            <img style={{marginLeft: "916px", }} className={cls.block_arrow} src={arrow_right} alt="" />
                            </Link>
                            </div>
                            <p className={cls.desc_1}>the use of simple and limited elements to get the <span style={{display: "block"}}>best effect or impression.</span></p>
                        </div>
                        <div style={{marginTop: "-6px"}} className={cls.block_main_item}>
                            <div style={{display: "flex", alignItems: "center"}}>
                            <h2 className={cls.logo_1}>03</h2>
                            <span style={{marginLeft: "82px"}} className={cls.logo_2}>transitional</span>
                            <Link to="/portofolio">
                            <img style={{marginLeft: "867.5px",}} className={cls.block_arrow} src={arrow_right} alt="" />
                            </Link>
                            </div>
                            <p className={cls.desc_1}>the use of simple and limited elements to get the <span style={{display: "block"}}>best effect or impression.</span></p>
                        </div>
                    </div>
                  </div>
                  <Footer/>
                </div>
            </div>
        </div>
    )
}