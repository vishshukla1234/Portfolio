import React, { useRef, useState, useEffect } from 'react'
import CustomHooks from './CustomHooks';

const Contacts = () => {

  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+91 92847-16995',
    },
    {
      title: "Email",
      value: 'shuklav8552@gmail.com'
    },
    {
    title: 'Github',
    value: 'https://github.com/vishshukla1234',
    },
    {
    title: 'LinkedIn',
    value: 'https://www.linkedin.com/in/vishal-shukla-986016348/',
    }
  ]);

  const refTab = useRef();
  const divs = useRef([]);
  CustomHooks(refTab, divs);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        These are my contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Like what you see? Here is my contact to get in touch with me. Looking forward to work with you!!
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div key={key} className="item">
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Contacts