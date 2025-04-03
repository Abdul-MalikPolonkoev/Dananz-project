import { Footer, Navbar } from '../../../widgets/Navbar'
import cls from './MinimalistRoomPage.module.scss'
import minimalistroom_photo from '../../../shared/assets/png/minimalistroom_photo.png'
import minimalistroom_photo2 from '../../../shared/assets/png/minimalistroom_photo2.png'
import minimalistroom_photo3 from '../../../shared/assets/png/minimalistroom_photo3.png'
import minimalistroom_photo4 from '../../../shared/assets/png/minimalistroom_photo4.png'
import minimalistroom_photo5 from '../../../shared/assets/png/minimalistroom_photo5.png'
import minimalistroom_photo6 from '../../../shared/assets/png/minimalistroom_photo6.png'
export const MinimalistRoomPage = () => {

    return (
        <div className={cls.minimalistroom}>
            <div className='container'>
                <div className={cls.minimalistroom_wrap}>
                    <Navbar/>
                   <section>
                   <div className={cls.minimalistroom_block}>
                        <h3 className={cls.minimalistroom_logo}>Minimalist Room</h3>
                        <span className={cls.minimalistroom_desc}>It is a long established fact that a reader will be <span className={cls.textdd} style={{display: "block",}}>distracted by the readable content of a page when</span>looking at its layout.</span>
                        <img className={cls.minimalistroom_img} src={minimalistroom_photo} alt="" />
                    </div>
                    <div className={cls.minimalist_block_text}>
                        <div className={cls.minimalist_block_item}>
                            <h4 className={cls.minimalist_logo_item}>Project Overview</h4>
                            <span className={cls.minimalist_desc_item}>Online learning with us does not interfere with your daily life. 
                            <span style={{display: "block", marginTop: "5px"}}>because learning can be done anytime and anywhere. Online</span>
                            <span style={{display: "block", marginTop: "5px"}}>learning with us does not interfere with your daily life. because</span> 
                            <span style={{display: "block", marginTop: "5px"}}>learning can be done anytime and anywhere. Online learning</span> 
                            <span style={{display: "block", marginTop: "5px"}}>with us does not interfere with your daily life. because learning </span> 
                            <span style={{display: "block", marginTop: "5px"}}>can be done anytime and anywhere.</span> 
                            </span>
                            <div style={{marginTop: "64px",}}>
                                <span style={{fontSize: "18px", fontWeight: "400", color: "#9C9C9C"}}>July 22 - 2022</span>
                                <span style={{fontSize: "18px", fontWeight: "400", color: "#9C9C9C", marginLeft: "58px"}}>Interior Design - Furnitur</span>
                            </div>
                        </div>
                        <div className={cls.minimalist_block_item} style={{marginLeft: "200px"}}>
                            <h4 className={cls.minimalist_logo_item}>Design Process</h4>
                            <span className={cls.minimalist_desc_item}>Online learning with us does not interfere with your daily life. 
                            <span style={{display: "block", marginTop: "5px"}}>because learning can be done anytime and anywhere. Online</span>
                            <span style={{display: "block", marginTop: "5px"}}>learning with us does not interfere with your daily life. because</span> 
                            <span style={{display: "block", marginTop: "5px"}}>learning can be done anytime and anywhere.</span> 
                            </span>
                            <div style={{marginTop: "35px"}}>
                            <span className={cls.minimalist_desc_item} style={{marginTop: "100px"}}>Online learning with us does not interfere with your daily life. 
                            <span style={{display: "block", marginTop: "5px"}}>because learning can be done anytime and anywhere. Online</span>
                            <span style={{display: "block", marginTop: "5px"}}>learning with us does not interfere with your daily life. because</span> 
                            <span style={{display: "block", marginTop: "5px"}}>learning can be done anytime and anywhere.</span> 
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className={cls.minimalist_block_images}>
                        <img className={cls.image_1} src={minimalistroom_photo2} alt="" />
                        <img style={{marginLeft: "32px"}} className={cls.image_1} src={minimalistroom_photo3} alt="" />
                        <img style={{marginTop: "28px"}} className={cls.image_2} src={minimalistroom_photo4} alt="" />
                        <img  style={{marginTop: "28px"}} className={cls.image_1} src={minimalistroom_photo5} alt="" />
                        <img style={{marginLeft: "32px"}} className={cls.image_1} src={minimalistroom_photo6} alt="" />
                    </div>
                   </section>
                   <Footer/>
                </div>
            </div>
        </div>
    )
}