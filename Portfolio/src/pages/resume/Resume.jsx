import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import Timeline from './Timeline'
import Skill from './Skill'

const Resume = () => {
  return (
    <section>
        <header>
            <h2 className='h2 article-title'>Resume</h2>
        </header>
        {/* timeline */}
        <div className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <FaBookReader />
                </div>
                <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
                <Timeline
                 title="Bachelor of Science in Computer Science"
                 date="2022 - 2026"
                 description="University of California, Irvine"/>
                 <Timeline
                 title="Bachelor of Science in Computer Science"
                 date="2017 - 2021"
                 description="University of California, Irvine"/>
                 <Timeline
                 title="Bachelor of Science in Computer Science"
                 date="2017 - 2021"
                 description="University of California, Irvine"/>
            </ol>
        </div>

        {/* Experience */}
        <div className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <FaBookReader />
                </div>
                <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
                <Timeline
                 title="Bachelor of Science in Computer Science"
                 date="2017 - 2021"
                 description="University of California, Irvine"/>
                 <Timeline
                 title="Bachelor of Science in Computer Science"
                 date="2017 - 2021"
                 description="University of California, Irvine"/>
                 <Timeline
                 title="Bachelor of Science in Computer Science"
                 date="2017 - 2021"
                 description="University of California, Irvine"/>
            </ol>
        </div>

        {/* skills */}
        <div className="skill">
            <h3 className='h3 skills-title'>My Skills</h3>
            <ul className="skills-list content-card">
                <Skill title="Web Design" value={80} />
                <Skill title="React" value={70} />
                <Skill title="Typescript" value={60} />
                <Skill title="FrontEnd Dev" value={90} />
            </ul>
        </div>
    </section>
  )
}

export default Resume