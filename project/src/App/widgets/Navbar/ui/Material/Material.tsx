import cls from './Material.module.scss';
import { Button } from '../../../../shared/ui/Button/Button';

import material_1 from '../../../../shared/assets/png/material_1.png';
import material_2 from '../../../../shared/assets/png/material_2.png';
import material3 from '../../../../shared/assets/png/material3.png';

export const Material = () => {
  return (
    <div className={cls.material_block}>
      <div style={{ marginTop: '47px' }} className={cls.material_text_block}>
        <div>
          <span
            style={{ fontSize: '16px', fontWeight: '500', color: '#141414' }}
          >
            MATERIAL
          </span>
          <hr
            style={{
              width: '503px',
              marginLeft: '96px',
              marginTop: '-12px',
              border: '1px solid #141414',
            }}
          />
          <h3 style={{ fontSize: '36px', fontWeight: '600', color: '#333333' }}>
            choice of <span style={{ display: 'block' }}>materials for</span>{' '}
            quality furniture.
          </h3>
          <p style={{ fontSize: '18px', color: '#9C9C9C' }}>
            You can custom the material as desired. And our{' '}
            <span style={{ display: 'block' }}>
              furniture uses the best materials and selected quality
            </span>{' '}
            materials.
          </p>
          <Button className={cls.material_btn} variant="outline" size="large">
            See Materials
          </Button>
        </div>
      </div>
      <div className={cls.material_images_block}>
        <img style={{ marginTop: '128px' }} src={material_1} alt="" />
        <img
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            marginLeft: '1130px',
            marginTop: '4145px',
          }}
          src={material_2}
          alt=""
        />
        <img
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            marginLeft: '1130px',
            marginTop: '4407px',
          }}
          src={material3}
          alt=""
        />
      </div>
    </div>
  );
};
