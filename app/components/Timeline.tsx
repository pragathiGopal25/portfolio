"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"

interface TimelineProps {
    experiences: {
        date: string,
        title: string,
        location: string,
        responsibility: string
        stack: string[],
    }[]
}

function Timeline(
    {experiences}: TimelineProps
) {
    return (
        <>
            <div className="pt-16 text-4xl"></div>
            <div>
                <VerticalTimeline
                    lineColor="#352208"
                    animate={true}
                >            
                    {experiences.map((experience, index) => {
                        return (

                        <VerticalTimelineElement
                            className="hover:scale-120"
                            key={index}
                            date={experience.date}
                            dateClassName="!text-2xl !font-bold !text-white"
                            contentStyle={{ background: "#FFFBEB", color:"black",}}
                            contentArrowStyle={{ borderRight: "7px solid white"}}
                            iconStyle={{ background: "#352208", color: '#3498db', border: '2px solid white', padding: "16px", marginRight:"4px"}}
                        >
                            <h3 className="vertical-timeline-element-title text-2xl font-bold">{experience.title}</h3>
                            <h3 className="vertical-timeline-element-subtitle font-serif">{experience.location}</h3>
                            <p className="font-serif">{experience.responsibility}</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {experience.stack.map((tech) => (
                                    <span className="border rounded-lg bg-[#A4AC86] pl-2 pr-2" key={tech}>{tech + ""}</span>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                        )
                    }) }
                </VerticalTimeline>
                <div className="h-10" aria-hidden="true" />
            </div>
        
        </>
    )
}

export default Timeline 