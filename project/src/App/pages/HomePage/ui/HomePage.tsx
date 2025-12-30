import { About, Footer, Material, Navbar, Product, Service } from '../../../widgets/Navbar';
import cls from './HomePage.module.scss';
import kitchen from '../../../shared/assets/png/kitchen.png';
import { Text } from '../../../shared';
import { memo } from 'react';

export const HomePage = memo(() => {

    return (
        <div className={cls.home}>
            <div className="container">
                <div className={cls.home_wrap}>
                    <Navbar />
                    <div>
                        <div className={cls.text_logotype}>
                            <Text as='h1' fz={72} fw={700}>Design your</Text>
                            <Text className={cls.text_logotype_item} as='h1' fz={72} fw={700}>interor with high</Text>
                            <Text className={cls.text_logotype_item} as='h1' fz={72} fw={700}>quality.</Text>
                        </div>
                    </div>
                    <hr className={cls.line} />
                </div>
                <img className={cls.kitchen_img} src={kitchen} alt="" />
                <div className={cls.text_sections}>
                    <div className={cls.text_body}>
                        <div className={cls.text_section}>
                            <span className={cls.number_item}>350 +</span>
                            <p className={cls.p_text_item}>Project Completed</p>
                        </div>
                        <div style={{ marginTop: "57px" }} className={cls.text_section}>
                            <span className={cls.number_item}>23 +</span>
                            <p className={cls.p_text_item}>Professional Teams</p>
                        </div>
                        <div style={{ marginTop: "57px" }} className={cls.text_section}>
                            <span className={cls.number_item}>15 +</span>
                            <p className={cls.p_text_item}>Years Experience</p>
                        </div>
                    </div>
                </div>
                <div>
                    <About />

                    <Service />

                    <Product />

                    <Material />

                    <Footer />
                </div>
            </div>
        </div>
    )
}
);