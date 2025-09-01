import { Footer, Navbar } from '../../../widgets/Navbar'
import cls from './ContactUsPage.module.scss'
import arrow_down from '../../../shared/assets/svg/arrow_down.svg'
import { Button } from '../../../shared'
import { useState } from 'react'

export const ContactUsPage = () => {

    const [isShow, setIsShow] = useState(false)
    const countries = [
        { code: '+1', name: 'US' },
        { code: '+7', name: 'RU' },
        { code: '+26', name: 'AF' },
        { code: '+27', name: 'AM' },
        { code: '+28', name: 'AZ' },
        { code: '+29', name: 'BA' },
        { code: '+30', name: 'BD' },
        { code: '+31', name: 'BT' },
        { code: '+32', name: 'BN' },
        { code: '+33', name: 'KH' },
        { code: '+34', name: 'CN' },
        { code: '+35', name: 'HK' },
        { code: '+36', name: 'MO' },
        { code: '+37', name: 'CY' },
        { code: '+38', name: 'KP' },
        { code: '+44', name: 'UK' },
    ]

    const handleShow = () => {
        setIsShow(!isShow)
    }

    return (
        <div className={cls.contactus}>
            <div className="container">
                <div className={cls.contactus_wrap}>
                    <Navbar/>
                    <div className={cls.contactus_block}>
                        <h3 className={cls.contactus_logo}>Contact Us</h3>
                        <span className={cls.contactus_desc}>It is a long established fact that a reader will be <span style={{display: "block"}}>distracted by the readable content of a page when</span> looking at its layout.</span>    
                    </div>
                    <section className={cls.input_sections}>
                        <div className={cls.input_block_item}>
                            <h5 className={cls.input_logo}>First Name</h5>
                            <input className={cls.input} placeholder='First Name' type="text" />
                        </div>
                        <div className={cls.input_block_item2}>
                            <h5 className={cls.input_logo2}>Last Name</h5>
                            <input className={cls.input} placeholder='Last Name' type="text" />
                        </div>
                    </section>
                    <section className={cls.input_sections2}>
                        <div className={cls.input_block_item3}>
                            <h5 className={cls.input_logo3}>Email</h5>
                            <input className={cls.input2} placeholder="Email" type="email" />
                        </div>
                        <div className={cls.input_block_item3}>
                            <h5 className={cls.input_logo3}>Phone Number</h5>
                            <input className={cls.input_2} placeholder='First Name' type="text" />
                        </div>
                        <div className={cls.input_block_item3}>
                        <h5 className={cls.input_logo3}>Message</h5>
                        <div className={cls.countrySelector}>
                      <div className={cls.countryHeader} onClick={handleShow}>
                        <h4 className={cls.logo_contries}>US</h4>
                        <img className={cls.arrow_down} src={arrow_down} alt="" />
                      </div>
                       {isShow && (
                        <ul className={cls.countryList}>
                            {countries.map((country) => (
                                <li key={country.code}>
                                    {country.code} {country.name}
                                </li>
                            ))}
                        </ul>
                       )}
                     </div>
                        <input className={cls.input3} placeholder='Your Message' type="text" />
                        </div>
                        <Button className={cls.contactus_btn} variant='default' size='large'>Send Message</Button> 
                    </section>
                   <div className={cls.loaction_block_footer}>
                        <h3 className={cls.loaction_logo}>Loaction</h3>
                        <hr className={cls.location_line}/>
                        <div className={cls.block_1}>
                            <h2 className={cls.block_1_logo}>Visit Our Stores</h2>
                            <span className={cls.block_1_desc}>Find us at these locations.</span>
                        </div>
                        <div>
                            <h3 className={cls.block_2_logo}>Email</h3>
                            <span className={cls.block_2_desc}>dananz@gmail.com</span>
                        </div>
                        <div>
                            <h3 className={cls.block_3_logo}>Phone</h3>
                            <span className={cls.block_3_desc}>+62 815 002 1000</span>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "-157px", marginTop: "-330px"}}>
                        <div style={{marginLeft: "720px"}}>
                            <h2 style={{color: "#333333"}}>Jakarta</h2>
                            <span style={{color: "#9C9C9C"}}>
                            Customize your interior design into a 
                            <span style={{display: "block", marginTop: "5px"}}>dream place with the best designers</span> 
                            <span style={{display: "block", marginTop: "5px"}}>and quality furniture. We try our best </span> 
                            <span style={{display: "block", marginTop: "5px"}}>to fulfill your expectations.</span>
                            </span>
                        </div>
                        <div style={{marginLeft: "720px", marginTop: "20px"}}>
                            <h2 style={{color: "#333333"}}>Yogyakarta </h2>
                            <span style={{color: "#9C9C9C"}}>
                            Customize your interior design into a 
                            <span style={{display: "block", marginTop: "5px"}}>dream place with the best designers</span> 
                            <span style={{display: "block", marginTop: "5px"}}>and quality furniture. We try our best </span> 
                            <span style={{display: "block", marginTop: "5px"}}>to fulfill your expectations.</span>
                            </span>
                            </div>
                        </div>                       
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "168px", marginTop: "-365px"}}>
                        <div style={{marginLeft: "720px"}}>
                            <h2 style={{color: "#333333"}}>Surakarta</h2>
                            <span style={{color: "#9C9C9C"}}>
                            Customize your interior design into a 
                            <span style={{display: "block", marginTop: "5px"}}>dream place with the best designers</span> 
                            <span style={{display: "block", marginTop: "5px"}}>and quality furniture. We try our best </span> 
                            <span style={{display: "block", marginTop: "5px"}}>to fulfill your expectations.</span>
                            </span>
                        </div>
                        <div style={{marginLeft: "720px", marginTop: "20px"}}>
                            <h2 style={{color: "#333333"}}>Bandung</h2>
                            <span style={{color: "#9C9C9C"}}>
                            Customize your interior design into a 
                            <span style={{display: "block", marginTop: "5px"}}>dream place with the best designers</span> 
                            <span style={{display: "block", marginTop: "5px"}}>and quality furniture. We try our best </span> 
                            <span style={{display: "block", marginTop: "5px"}}>to fulfill your expectations.</span>
                            </span>
                            </div>
                        </div>                       
                        </div>
                      
                    <Footer/>
                </div>
            </div>
        </div>
    )
}