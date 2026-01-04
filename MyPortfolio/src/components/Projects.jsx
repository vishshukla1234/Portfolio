import React, { useRef, useState } from 'react'
import CustomHooks from './CustomHooks';

const Projects = () => {

  const [listProjects] = useState([
    {
      name: 'File Encryptor',
      des: "•Built a Spring Boot + React application that compresses and decompresses files. Used Huffman coding algorithm for compression logic. Provided Docker containerization for deployment.",
      mission: "Java Developer, Backend Developer, SWE",
      language: "Java, React.js, Docker",
      images: './project1.png'
    },
    {
      name: 'Gemini Chat-Bot',
      des: "Built a Spring Boot + React chatbot for real-time dynamic Q/A. Integrated the application with Gemini API for real-time responses. Used Bootstrap for interactive frontend UI.",
      mission: "Java Developer, Backend Developer, SWE",
      language: "Java, Reactjs",
      images: './project2.png'
    }
  ]);

  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHooks(refTab, refDivs);
  return (
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        These are my projects
      </div>

      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        These are my 2 projects that I did in Java and User Interface(UI) in React.js and for backend I used SpringBoot for both the projects.
      </div>
      <div className="list" ref={(el) => el && refDivs.current.push(el)}>
        {
          listProjects.map((value, key) => (
            <div key={key} className='item'>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                  <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M280 88C280 57.1 254.9 32 224 32C193.1 32 168 57.1 168 88C168 118.9 193.1 144 224 144C254.9 144 280 118.9 280 88zM304 300.7L341 350.6C353.8 333.1 369.5 317.9 387.3 305.6L331.1 229.9C306 196 266.3 176 224 176C181.7 176 142 196 116.8 229.9L46.3 324.9C35.8 339.1 38.7 359.1 52.9 369.7C67.1 380.3 87.1 377.3 97.7 363.1L144 300.7L144 576C144 593.7 158.3 608 176 608C193.7 608 208 593.7 208 576L208 416C208 407.2 215.2 400 224 400C232.8 400 240 407.2 240 416L240 576C240 593.7 254.3 608 272 608C289.7 608 304 593.7 304 576L304 300.7zM640 464C640 384.5 575.5 320 496 320C416.5 320 352 384.5 352 464C352 543.5 416.5 608 496 608C575.5 608 640 543.5 640 464zM553.4 403.1C560.5 408.3 562.1 418.3 556.9 425.4L492.9 513.4C490.1 517.2 485.9 519.6 481.2 519.9C476.5 520.2 471.9 518.6 468.6 515.3L428.6 475.3C422.4 469.1 422.4 458.9 428.6 452.7C434.8 446.5 445 446.5 451.2 452.7L478 479.5L531 406.6C536.2 399.5 546.2 397.9 553.4 403.1z"/></svg></div>
                  <h4>Mission</h4>
                  <div className="de">{value.mission}</div>
                </div>
                <div className="mission">
                  <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M511.6 239C480 164.4 406.1 112 320 112C297.9 112 276.6 115.5 256.6 121.8C256.2 123.8 256 125.9 256 128L256 201.4C256 213.9 266.1 224 278.6 224C284.6 224 290.4 221.6 294.6 217.4L310.6 201.4C316.6 195.4 324.7 192 333.2 192L338.7 192C367.2 192 381.5 226.5 361.3 246.6C355.3 252.6 347.2 256 338.7 256L277.2 256C268.7 256 260.6 259.4 254.6 265.4L233.3 286.7C227.3 292.7 223.9 300.8 223.9 309.3L223.9 352C223.9 369.7 238.2 384 255.9 384L287.9 384C305.6 384 319.9 398.3 319.9 416L319.9 448C319.9 465.7 334.2 480 351.9 480L354.6 480C363.1 480 371.2 476.6 377.2 470.6L406.5 441.3C412.5 435.3 415.9 427.2 415.9 418.7L415.9 400C415.9 391.2 423.1 384 431.9 384C440.7 384 447.9 376.8 447.9 368L447.9 333.3C447.9 324.8 444.5 316.7 438.5 310.7L422.5 294.7C418.3 290.5 415.9 284.7 415.9 278.7C415.9 266.2 426 256.1 438.5 256.1L483.5 256.1C495.9 256.1 506.2 249 511.5 239.1zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg></div>
                  <h4>Languages</h4>
                  <div className="de">{value.language}</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects