import React from 'react';
import { Contact } from '../../components/Contact';
import './index.css';

export default function Contacts() {
  return (
    <div className='contacts-body'>
      <Contact
        title='Gmail'
        iconUrl='https://www.google.com/images/icons/product/googlemail-128.png'
        contact='andreyuser47@gmail.com'
      />
      <Contact
        title='WhatsApp'
        iconUrl='https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360'
        contact='+55 (81)9.8304-4736'
      />
      <Contact
        title='Ligação'
        iconUrl='https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png'
        contact='+55 (81)9.8304-4736'
      />
      <Contact
        title='LinkedIn'
        iconUrl='https://cdn-icons-png.flaticon.com/512/174/174857.png'
        contact='https://www.linkedin.com/in/andrey-allyson-310a9024b/'
      />
      <Contact
        title='Github'
        contact='https://github.com/Andrey20Allyson'
        iconUrl='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1426048404/y4lxnqcngh5dvoaz06as.png'
      />
    </div>
  );
}