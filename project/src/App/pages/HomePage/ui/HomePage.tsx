import { Footer, Navbar } from '../../../widgets/Navbar'
import cls from './HomePage.module.scss'
import kitchen from '../../../shared/assets/png/kitchen.png'
import kitchen2 from '../../../shared/assets/png/kitchen2.png'
import avatar_user from '../../../shared/assets/svg/avatar_user.svg'
import { Button } from '../../../shared'
import kitchen3 from "../../../shared/assets/png/kitchen3.png"
import arrow_right from '../../../shared/assets/svg/arrow_right.svg'
import material_1 from '../../../shared/assets/png/material_1.png'
import material_2 from '../../../shared/assets/png/material_2.png'
import material3 from '../../../shared/assets/png/material3.png'
import { Link } from 'react-router-dom'
import { memo } from 'react'
export const HomePage = memo(() => {

    return (
        <div className={cls.home}>
            <div className="container">
                <div className={cls.home_wrap}>
                    <Navbar/>
                    <div>
                        <h1 className={cls.text_logotype}>
                          <div>Design your</div>
                          <div>interor with high</div>
                          <div>quality.</div>
                        </h1>
                    </div>
                    <hr className={cls.line}/> 
                </div>
                <img style={{position: "absolute", left: "0", top: "0", width: "1277px", marginLeft: "120px", marginTop: "540px"}} src={kitchen} alt="" />
                <div className={cls.text_sections}>
                   <div className={cls.text_body}>
                   <div className={cls.text_section}>
                        <span className={cls.number_item}>350 +</span>
                        <p className={cls.p_text_item}>Project Completed</p>
                    </div>
                    <div style={{marginTop: "57px"}} className={cls.text_section}>
                        <span className={cls.number_item}>23 +</span>
                        <p className={cls.p_text_item}>Professional Teams</p>
                    </div>
                    <div style={{marginTop: "57px"}} className={cls.text_section}>
                        <span className={cls.number_item}>15 +</span>
                        <p className={cls.p_text_item}>Years Experience</p>
                    </div>
                   </div>
                </div>
                <div>
                    <div className={cls.about_section}>
                        <div>
                        <span style={{fontWeight: "500"}}>ABOUT</span>
                        <hr className={cls.line_2}/>
                        </div>
                        <div className={cls.about_text_section}>
                        <h4>“We're one of the best furniture agency. Prioritizing customers <span style={{display: "block"}}>and making purchases easy are the hallmarks of our agency.”</span></h4>
                        </div>
                        <img style={{width: "940px", marginTop: "40px"}} src={kitchen2} alt="" />
                    </div>
                    <div className={cls.user_card}>
                        <img className={cls.avatar_user} src={avatar_user} alt="" />
                        <div style={{marginLeft: "91px", marginTop: "-76px"}}>
                        <h3 style={{fontSize: "18px", fontWeight: "600", }}>Arga Danaan <span style={{display: "block", fontWeight: "400", color: "#9C9C9C", }}>CEO of Dananz</span></h3>
                    </div>
                    </div>
                    <div className={cls.content_btn}>
                        <span className={cls.text_content_btn}>Online learning with us <span style={{display: "block"}}>does not interfere with</span> your daily life. because <span style={{display: "block"}}>learning can be done</span> anytime and anywhere.</span>
                        <Link to="/about" style={{textDecoration: "none"}}>
                            <Button className={cls.btn} variant='default'>Learn More</Button>
                        </Link>
                    </div>
                    <div>
                    <div className={cls.service_block}>
                        <div className={cls.block_footer}>
                            <span style={{fontWeight: "500"}}>SERVICE</span>
                            <hr style={{width: "516px", border: "1px solid #000", marginLeft: "79px", marginTop: "-12px"}}/>
                            <h1 style={{fontSize: "36px", color: "#333333", marginTop: "33px"}}>attractive furniture with the best quality.</h1>
                            <p style={{color: "#9C9C9C", marginTop: "30px"}}>Customize your interior design into a dream place <p style={{display: "block", marginTop: "5px"}}>with the best designers and quality furniture. We try</p> <p style={{marginTop: "-10px"}}>our best to fulfill your expectations.</p></p>
                        </div>
                        <div className={cls.service_footer}>
                           <h3 style={{fontSize: "24px", fontWeight: "600", color: "#333333"}}>01</h3>
                           <h3 style={{fontSize: "24px", fontWeight: "600", marginLeft: "90px", color: "#333333"}}>Interior Design</h3>
                           <Link to="services">
                           <img style={{ marginLeft: "590px", marginTop: "10px", cursor: "pointer",}} src={arrow_right} alt="" />
                           </Link>
                        </div>
                        <div className={cls.service_footer}>
                           <h3 style={{fontSize: "24px", fontWeight: "600", color: "#333333"}}>02</h3>
                           <h3 style={{fontSize: "24px", fontWeight: "600", marginLeft: "90px", color: "#333333"}}>Consultant</h3>
                           <Link to="/services"><img style={{marginLeft: "631px", marginTop: "10px", cursor: "pointer", }} src={arrow_right} alt="" /></Link>
                        </div>
                           <div className={cls.service_footer}>
                           <h3 style={{fontSize: "24px", fontWeight: "600", color: "#333333"}}>03</h3>
                           <h3 style={{fontSize: "24px", fontWeight: "600", marginLeft: "90px", color: "#333333"}}>Construction Consultant</h3>
                           <Link to="/services">
                           <img style={{marginLeft: "485px", marginTop: "10px", cursor: "pointer",}} src={arrow_right} alt="" />
                           </Link>
                        </div>
                    </div>
                    <img className={cls.kitchen3} src={kitchen3} alt="" />
                    </div>
                    <div className={cls.product_block}>
                        <div className={cls.product_block_footer}>
                            <span style={{fontWeight: "500"}}>PRODUCT</span>
                            <hr className={cls.line_3}/>
                            <h1 style={{ color: "#333333", fontSize: "36px", fontWeight: "600", marginTop: "30px", position: "relative"}}>Choose your <span style={{display: "block", marginLeft: "-1px", marginTop: "10px"}}>product themes.</span></h1>
                            <p style={{color: "#9C9C9C", fontSize: "18px", marginLeft: "840px", marginTop: "-115px"}}>Find the theme you want. If our choice of theme is <p style={{marginTop: "4px"}}>not what you want, you can customize it as you</p> <p style={{marginTop: "-14px"}}>want.</p></p>
                        </div>
                        <div className={cls.product_footer}>
                            <span style={{fontSize: "32px", fontWeight: "600", color: "#333333"}}>01</span>
                            <h3 style={{fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "87px"}}>Vintage</h3>
                            <h3 className={cls.product_text_footer} style={{fontSize: "18px", fontWeight: "400", color: "#333333",}}>the use of simple and limited elements to get the <span style={{display: "block"}}>best effect or impression.</span></h3>
                            <Link to="/portofolio">
                            <img style={{marginLeft: "1000px"}} className={cls.product_arrow_right} src={arrow_right} alt="" /> 
                            </Link>
                        </div>
                        <div className={cls.product_footer}>
                            <span style={{fontSize: "32px", fontWeight: "600", color: "#333333"}}>02</span>
                            <h3 style={{fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "80px"}}>Minimalist</h3>
                            <h3 className={cls.product_text_footer} style={{fontSize: "18px", fontWeight: "400", color: "#333333",}}>the use of simple and limited elements to get the <span style={{display: "block"}}> best effect or impression.</span></h3>
                            <Link to="/portofolio">
                                <img style={{marginLeft: "962px", }} className={cls.product_arrow_right} src={arrow_right} alt="" />
                            </Link>
                        </div>
                        <div className={cls.product_footer}>
                            <span style={{fontSize: "32px", fontWeight: "600", color: "#333333"}}>03</span>
                            <h3 style={{fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "80px"}}>Modern</h3>
                            <h3 className={cls.product_text_footer} style={{fontSize: "18px", fontWeight: "400", color: "#333333",}}>the use of simple and limited elements to get the <span style={{display: "block"}}> best effect or impression.</span></h3>
                            <Link to="/portofolio">
                            <img style={{marginLeft: "998px", }} className={cls.product_arrow_right} src={arrow_right} alt="" />
                            </Link>
                        </div>
                        <div className={cls.product_footer}>
                            <span style={{fontSize: "32px", fontWeight: "600", color: "#333333"}}>03</span>
                            <h3 style={{fontSize: "32px", fontWeight: "600", color: "#333333", marginLeft: "80px"}}>transitional</h3>
                            <h3 className={cls.product_text_footer} style={{fontSize: "18px", fontWeight: "400", color: "#333333",}}>the use of simple and limited elements to get the <span style={{display: "block"}}> best effect or impression.</span> </h3>
                            <Link to="/portofolio">
                            <img style={{marginLeft: "949px",}} className={cls.product_arrow_right} src={arrow_right} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className={cls.material_block}>
                        <div style={{marginTop: "47px"}} className={cls.material_text_block}>
                            <div>
                            <span style={{fontSize: "16px", fontWeight: "500", color: "#141414", }}>MATERIAL</span>
                            <hr style={{width: "503px", marginLeft: "96px", marginTop: "-12px", border: "1px solid #141414"}}/>
                            <h3 style={{fontSize: "36px", fontWeight: "600", color: "#333333"}}>choice of <span style={{display: "block"}}>materials for</span> quality furniture.</h3>
                            <p style={{fontSize: "18px", color: "#9C9C9C"}}>You can custom the material as desired. And our <span style={{display: "block"}}>furniture uses the best materials and selected quality</span> materials.</p>
                            <Button className={cls.material_btn} variant='outline' size='large'>See Materials</Button>
                            </div>
                        </div>
                        <div className={cls.material_images_block}>
                            <img style={{marginTop: "128px"}} src={material_1} alt="" />
                            <img style={{position: "absolute", top: "0", left: "0", marginLeft: "1130px", marginTop: "4145px"}} src={material_2} alt="" />
                            <img style={{position: "absolute", left: "0", top: "0",  marginLeft: "1130px", marginTop: "4407px"}} src={material3} alt="" />
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
)