import { Footer, Navbar } from '../../../widgets/Navbar'
import cls from './OurTeamsPage.module.scss'
import ourteams_photo from '../../../shared/assets/png/ourtimes_photo.png'
import person_1 from '../../../shared/assets/png/person_1.png'
import person_2 from '../../../shared/assets/png/person_2.png'
import person_3 from '../../../shared/assets/png/person_3.png'
import person_4 from '../../../shared/assets/png/person_4.png'
import person_5 from '../../../shared/assets/png/person_5.png'
import person_6 from '../../../shared/assets/png/person_6.png'
import person_7 from '../../../shared/assets/png/person_7.png'
import person_8 from '../../../shared/assets/png/person_8.png'

const cardsCreativePerson = [
    { photo: person_1, name: "", description: "CEO" }, 
    { photo: person_2, name: "Shoo Phar Dhie", description: "CEO" }, 
    { photo: person_3, name: "Shoo Phar Dhie", description: "CEO" }, 
    { photo: person_4, name: "Shoo Phar Dhie", description: "CEO" }, 
    { photo: person_5, name: "Shoo Phar Dhie", description: "CEO" }, 
    { photo: person_6, name: "Shoo Phar Dhie", description: "CEO" }, 
    { photo: person_7, name: "Shoo Phar Dhie", description: "CEO" }, 
    { photo: person_8, name: "Shoo Phar Dhie", description: "" },
]

const customizeCards = [
    {
        name: "High Quality", 
        description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
    },{
        name: "Professional Designer", 
        description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
    },{
        name: "The Best Services", 
        description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."
    }
]

export const OurTeamsPage = () => {
    return (
        <div className={cls.ourteams}>
            <div className="container">
                <div className={cls.ourteams_wrap}>
                    <Navbar/>
                    <div className={cls.ourteams_block}>
                        <h3 className={cls.ourteams_logo}>Our Teams</h3>
                        <span className={cls.ourteams_desc}>It is a long established fact that a reader will be <span style={{display: "block"}}>distracted by the readable content of a page when</span> looking at its layout.</span>
                        <img className={cls.ourteams_img} src={ourteams_photo} alt="" />
                    </div>
                    <section className={cls.block_section}>
                        <div className={cls.block_logo_designer}>
                            <span className={cls.design_logo}>Designer</span>
                            <hr className={cls.design_line}/>
                            <h3 className={cls.design_logo2}>Creative Person</h3>
                            <p className={cls.design_desc}> 
                            <span style={{display: 'block'}}>Customize your interior design into a dream place</span> 
                            <span style={{display: 'block', marginTop: "5px"}}>with the best designers and quality furniture. We try</span>
                            <span style={{display: 'block', marginTop: "5px"}}> our best to fulfill your expectations.</span>
                            </p>
                        </div>
                        <section className={cls.block_creative_persons}>
                                <article className={cls.creative_person_item}>
                                 <img className={cls.person_img} src={person_1} alt="" />
                                  <div className={cls.person_desc}>
                                   <h5 className={cls.person_name}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person}>CEO</span>
                                  </div>
                                </article>
                                <article className={cls.creative_person_item}>
                                 <img className={cls.person_img} src={person_2} alt="" />
                                  <div className={cls.person_desc}>
                                   <h5 className={cls.person_name}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person}>CEO</span>
                                  </div>
                                </article>
                                <article className={cls.creative_person_item}>
                                 <img className={cls.person_img} src={person_3} alt="" />
                                  <div className={cls.person_desc}>
                                   <h5 className={cls.person_name}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person}>CEO</span>
                                  </div>
                                </article>
                                <article className={cls.creative_person_item}>
                                 <img className={cls.person_img} src={person_4} alt="" />
                                  <div className={cls.person_desc}>
                                   <h5 className={cls.person_name}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person}>CEO</span>
                                  </div>
                                </article>
                                <article className={cls.creative_person_item}>
                                 <img className={cls.person_img} src={person_5} alt="" />
                                  <div className={cls.person_desc}>
                                   <h5 className={cls.person_name}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person}>CEO</span>
                                  </div>
                                </article>
                                <article className={cls.creative_person_item}>
                                 <img className={cls.person_img} src={person_6} alt="" />
                                  <div className={cls.person_desc}>
                                   <h5 className={cls.person_name}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person}>CEO</span>
                                  </div>
                                </article>
                                <article className={cls.creative_person_item2}>
                                 <img className={cls.person_img2} src={person_7} alt="" />
                                  <div className={cls.person_desc2}>
                                   <h5 className={cls.person_name2}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person2}>CEO</span>
                                  </div>
                                </article>
                                <article className={cls.creative_person_item}>
                                 <img className={cls.person_img} src={person_8} alt="" />
                                  <div className={cls.person_desc}>
                                   <h5 className={cls.person_name}>Shoo Phar Dhie</h5>
                                   <span className={cls.about_person}>CEO</span>
                                  </div>
                                </article>
                        </section>
                    </section>
                    <div className={cls.latest_about_block}>
                    <span className={cls.latest_about_logo}>SERVICE</span>
                    <hr className={cls.latest_about_line}/>
                    <h3 className={cls.latest_about_text}>Why Choose Us</h3>
                    <p className={cls.latest_about_desc}>Customize your interior design into a dream place <span style={{display: "block", marginTop: "5px"}}>with the best designers and quality furniture. We try </span> <p style={{marginTop: '5px'}}>our best to fulfill your expectations.</p></p>
                  </div>
                    <div className={cls.about_cards}>
                    {
                        customizeCards.map((item, index) => (
                        <article key={index} className={cls.card_item}>
                            <div className={cls.circle}></div>
                            <h1 className={cls.logo}>{item.name}</h1>
                            <span className={cls.text_desc} style={{display: "block"}}>Customize your interior design into a 
                            <span style={{display: "block"}}>dream place with the best designers </span>
                            <span style={{display: "block"}}>and quality furniture. We try our best</span>
                            <span style={{display: "block"}}> to fulfill your expectations.</span>
                            </span>
                         </article>
                        ))
                    }
                  </div>
                  <Footer/>
                </div>
            </div>
        </div>
    )
}