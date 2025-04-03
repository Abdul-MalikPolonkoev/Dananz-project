import { Footer, Navbar } from '../../../widgets/Navbar'
import cls from './AboutUsPage.module.scss'
import about_photo from '../../../shared/assets/png/about_photo.png'
import about_photo2 from '../../../shared/assets/png/about_photo2.png'

const customizeCards = [
    {name: "High Quality", description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."}, {name: "Professional Designer", description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."}, {name: "The Best Services", description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."}
]

export const AboutUsPage = () => {

    return (
        <div className={cls.about}>
            <div className='container'>
                <div className={cls.about_wrap}>
                  <Navbar/>
                  <div className={cls.logo_desc}>
                    <h2 className={cls.text_logo}>About</h2>
                    <span className={cls.text_desc} style={{color: "#000"}}>It is a long established fact that a reader will be distracted by <span style={{display: "block"}}>the readable content of a page when looking at its layout.</span></span>
                    <img className={cls.about_photo} src={about_photo} alt="" />
                  </div>
                  <div className={cls.about_block}>
                    <span className={cls.about_block_logo}>ACHIEVEMENT</span>
                    <hr className={cls.about_line}/>
                    <p className={cls.about_block_txt}>interior customization with Danaanz, <span style={{display: "block"}}>best quality with professional workers</span></p>
                  </div>
                  <div>
                    <img className={cls.about_photo2} src={about_photo2} alt="" />
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
                  </div>
                  <div className={cls.latest_about_block}>
                    <span className={cls.latest_about_logo}>SERVICE</span>
                    <hr className={cls.latest_about_line}/>
                    <h3 className={cls.latest_about_text}>Why Choose Us</h3>
                    <p className={cls.latest_about_desc}>Customize your interior design into a dream place <span style={{display: "block", marginTop: "5px"}}>with the best designers and quality furniture. We try </span> <p style={{marginTop: '5px'}}>our best to fulfill your expectations.</p></p>
                  </div>
                  <div className={cls.about_cards}>
                    {
                        customizeCards.map((item, index) => (
                            <div key={index} className={cls.card_item}>
                            <div className={cls.circle}></div>
                            <h1 className={cls.logo}>{item.name}</h1>
                            <span className={cls.text_desc} style={{display: "block"}}>Customize your interior design into a 
                            <span style={{display: "block"}}>dream place with the best designers </span>
                            <span style={{display: "block"}}>and quality furniture. We try our best</span>
                            <span style={{display: "block"}}> to fulfill your expectations.</span>
                            </span>
                         </div>
                        ))
                    }
                  </div>

                  <Footer/>
                </div>
            </div>
        </div>
    )
}