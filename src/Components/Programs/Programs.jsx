import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.png'
import program_2 from '../../assets/program_2.png'
import program_3 from '../../assets/program_3.png'
import program_icon from '../../assets/program_icon.png'
import Apple from './Apple.png'
import aand from './aand.png'
import Windows from './Windows.png'


const programs = () => {
  const downloadFileAtUrl = (url) => {
    const filePath = url.split('/').pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div className='programs' id='program'>
        <div className='program'>
        <img src={program_1} alt=""/>
        
          <div className='caption'>
            <a href={Apple} download='Medicosis'>
              <img src={program_icon} alt=""/> <p>IOS</p>
              </a>
            </div>
            
        </div>
        <div className='program'>
            <img src={program_2} alt=""/>
            <div className='caption'>
            <a href={aand} download='Medicosis' className='program'><img src={program_icon} alt=""/> <p>Android</p>
            </a>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=""/>
            <div className='caption'>
            <a href={Windows} download='Medicosis' className='program'><img src={program_icon} alt=""/>
            <p>Windows</p>
            </a>
            </div>
        </div>
    </div>
  )
}

export default programs