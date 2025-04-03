import { Footer, Navbar } from '../../../widgets/Navbar'
import cls from './PortofolioPage.module.scss'
import portfolio_photo from '../../../shared/assets/png/portfolio_photo.png'
import portofolio_photo from '../../../shared/assets/png/portofolio_photo.png'
import avatar_user from '../../../shared/assets/svg/avatar_user.svg'
import portofolio_photo2 from '../../../shared/assets/png/portofolio_photo2.png'
import portofolio_photo3 from '../../../shared/assets/png/portofolio_photo3.png'
import portofolio_photo4 from '../../../shared/assets/png/portofolio_photo4.png'
import { Button } from '../../../shared'

const customizeCards = [
    {name: "High Quality", description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."}, {name: "Professional Designer", description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."}, {name: "The Best Services", description: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."}
]
export const PortofolioPage = () => {

    return (
        <div className={cls.portofolio}>
            <div className="container">
                <div className={cls.portofolio_wrap}>
                    <Navbar/>
                    <div className={cls.portofolio_block}>
                        <h3 className={cls.portofolio_logo}>Portofolio</h3>
                        <span className={cls.portofolio_desc}>It is a long established fact that a reader will be <span className={cls.textdd} style={{display: "block",}}>distracted by the readable content of a page when</span>looking at its layout.</span>
                        <img className={cls.portofolio_img} src={portfolio_photo} alt="" />
                    </div>
                    <div className={cls.block_portofolio_footer}>
                        <h3 className={cls.portofolio_logo_footer}>Portofolio</h3>
                        <hr className={cls.portofolio_line}/>
                        <img className={cls.portofolio_img_footer} src={portofolio_photo} alt="" />

                    <div className={cls.user_card}>
                        <img className={cls.avatar_user} src={avatar_user} alt="" />
                      <div style={{marginLeft: "91px", marginTop: "-76px"}}>
                        <h3 style={{fontSize: "18px", fontWeight: "600", }}>Arga Danaan <span style={{display: "block", fontWeight: "400", color: "#9C9C9C", }}>CEO of Dananz</span></h3>
                      </div>
                    </div>
                        <div className={cls.block_minimalist_room}>
                            <h3 className={cls.minimalist_room_logo}>Minimalist Room</h3>
                            <span className={cls.minimalist_room_desc}>
                            <span>Online learning with us</span>
                            <span style={{display: "block", marginTop: "5px"}}>does not interfere with</span>
                            <span style={{display: "block", marginTop: "5px"}}>your daily life. because</span>
                            <span style={{display: "block", marginTop: "5px"}}> learning can be done</span>
                            <span style={{display: "block", marginTop: "5px"}}>anytime and anywhere.</span>
                            </span>
                            <Button className={cls.minimalist_room_btn} variant='default' size='small'>See More</Button>
                        </div>
                    </div>
                    <div className={cls.vintage_room_block}>
                        <img className={cls.vintage_img} src={portofolio_photo2} alt="" />
                        <div className={cls.vintage_block}>
                            <h3 className={cls.vintage_block_logo}>Vintage Room</h3>
                            <span className={cls.vintage_block_desc}>
                            <span>Online learning with us</span>
                            <span style={{display: "block", marginTop: "5px"}}>does not interfere with</span>
                            <span style={{display: "block", marginTop: "5px"}}>your daily life. because</span>
                            <span style={{display: "block", marginTop: "5px"}}> learning can be done</span>
                            <span style={{display: "block", marginTop: "5px"}}>anytime and anywhere.</span>
                            </span>
                            <Button variant='default' size='small' className={cls.vintage_block_btn}>See More</Button>
                            <div className={cls.user_card2}>
                        <img className={cls.avatar_user2} src={avatar_user} alt="" />
                      <div style={{marginLeft: "91px", marginTop: "-76px"}}>
                        <h3 style={{fontSize: "18px", fontWeight: "600", }}>Arga Danaan <span style={{display: "block", fontWeight: "400", color: "#9C9C9C", }}>CEO of Dananz</span></h3>
                      </div>
                      </div>
                        </div>
                    </div>

                    <div className={cls.modern_room_block}>
                        <img className={cls.modern_img} src={portofolio_photo3} alt="" />
                        <div className={cls.modern_block}>
                            <h3 className={cls.modern_block_logo}>Modern Room</h3>
                            <span className={cls.modern_block_desc}>
                            <span>Online learning with us</span>
                            <span style={{display: "block", marginTop: "5px"}}>does not interfere with</span>
                            <span style={{display: "block", marginTop: "5px"}}>your daily life. because</span>
                            <span style={{display: "block", marginTop: "5px"}}> learning can be done</span>
                            <span style={{display: "block", marginTop: "5px"}}>anytime and anywhere.</span>
                            </span>
                            <Button variant='default' size='small' className={cls.modern_block_btn}>See More</Button>
                            <div className={cls.user_card3}>
                        <img className={cls.avatar_user3} src={avatar_user} alt="" />
                      <div style={{marginLeft: "91px", marginTop: "-76px"}}>
                        <h3 style={{fontSize: "18px", fontWeight: "600", }}>Arga Danaan <span style={{display: "block", fontWeight: "400", color: "#9C9C9C", }}>CEO of Dananz</span></h3>
                      </div>
                      </div>
                        </div>
                    </div> 

                    <div className={cls.transitional_room_block}>
                        <img className={cls.transitional_img} src={portofolio_photo4} alt="" />
                        <div className={cls.transitional_block}>
                            <h3 className={cls.transitional_block_logo}>transitional Room</h3>
                            <span className={cls.transitional_block_desc}>
                            <span>Online learning with us</span>
                            <span style={{display: "block", marginTop: "5px"}}>does not interfere with</span>
                            <span style={{display: "block", marginTop: "5px"}}>your daily life. because</span>
                            <span style={{display: "block", marginTop: "5px"}}> learning can be done</span>
                            <span style={{display: "block", marginTop: "5px"}}>anytime and anywhere.</span>
                            </span>
                            <Button variant='default' size='small' className={cls.transitional_block_btn}>See More</Button>
                            <div className={cls.user_card4}>
                        <img className={cls.avatar_user4} src={avatar_user} alt="" />
                      <div style={{marginLeft: "91px", marginTop: "-76px"}}>
                        <h3 style={{fontSize: "18px", fontWeight: "600", }}>Arga Danaan <span style={{display: "block", fontWeight: "400", color: "#9C9C9C", }}>CEO of Dananz</span></h3>
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