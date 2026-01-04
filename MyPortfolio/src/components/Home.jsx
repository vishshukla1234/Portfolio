import React, {useRef} from 'react'
import CustomHooks from './CustomHooks';

const Home = () => {

  const refTab = useRef();
  CustomHooks(refTab);

  return (
    <section className='home' ref={refTab}>
      <div className="content">
        <div className="name">
          Hi there this is, <span>Vishal</span>
        </div>
        <div className="des">
          A 3rd year B.Tech CSE undergrad student with technical skills in programming languages like Java, Python, React.js. Looking to apply my skills in real world projects through new opportunities.
        </div>
        <a href="./Resume.pdf" target='blank' rel='noopener noreferrer'>Download</a>
      </div>

      <div className="avatar">
        <div className="card">
          <img src="./profile1.png" alt="" />
          <div className="info">
            <div>SWE</div>
            <div>Indian</div>
            <div>19-10-2005</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home