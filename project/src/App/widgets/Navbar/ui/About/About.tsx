import { Link } from 'react-router-dom';
import cls from './About.module.scss';

import kitchen2 from '../../../../shared/assets/png/kitchen2.png';
import avatar_user from '../../../../shared/assets/svg/avatar_user.svg';
import { Button } from '../../../../shared/ui/Button/Button';

export const About = () => {
  return (
    <div>
      <div className={cls.about_section}>
        <div>
          <span style={{ fontWeight: '500' }}>ABOUT</span>
          <hr className={cls.line_2} />
        </div>
        <div className={cls.about_text_section}>
          <h4>
            “We're one of the best furniture agency. Prioritizing customers{' '}
            <span style={{ display: 'block' }}>
              and making purchases easy are the hallmarks of our agency.”
            </span>
          </h4>
        </div>
        <img
          style={{ width: '940px', marginTop: '40px' }}
          src={kitchen2}
          alt=""
        />
      </div>
      <div className={cls.user_card}>
        <img className={cls.avatar_user} src={avatar_user} alt="" />
        <div style={{ marginLeft: '91px', marginTop: '-76px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>
            Arga Danaan{' '}
            <span
              style={{ display: 'block', fontWeight: '400', color: '#9C9C9C' }}
            >
              CEO of Dananz
            </span>
          </h3>
        </div>
      </div>
      <div className={cls.content_btn}>
        <span className={cls.text_content_btn}>
          Online learning with us{' '}
          <span style={{ display: 'block' }}>does not interfere with</span> your
          daily life. because{' '}
          <span style={{ display: 'block' }}>learning can be done</span> anytime
          and anywhere.
        </span>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <Button className={cls.btn} variant="default">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};
