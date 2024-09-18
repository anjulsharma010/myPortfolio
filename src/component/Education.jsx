import React from 'react'
import educationIcon from "../assets/educationIcon.png"
import img10th from "../assets/10thImg.jpg"
import img12th from "../assets/12thImg.jpg"
import bcaImg from "../assets/bcaImg.jpg"


const educationArray = [
    {
        qualification: "Bachelor of Technology (B-tech)",
        year: "2019-2023",
        grade: "GPA - 7.34",
        institution: "Institute of Technology and Management, Gwalior",
        image: bcaImg
    },
    {
        qualification: "12th - Science",
        year: "2017-2018",
        grade: "Percentage - 76%",
        institution: "St. Paul's School, Gwalior",
        image: img12th
    },
    {
        qualification: "10th - Board",
        year: "2015-2016",
        grade: "Percentage - 84%",
        institution: "St. Paul's School, Gwalior",
        image: img10th
    },
]

function Education() {
    return (
        <div id='Education' className='w-full font-nunito mt-[30px] pt-[130px]'>
            <div className='text-center mx-auto px-[8%] '>
                <div className='flex gap-2 md:gap-5 justify-center items-center mb-0'>
                    <img className='w-6' src={educationIcon} alt="education icon" />
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Education</h1>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap gap-5 my-16'>
                    {educationArray.map((elm, index) => (
                        <div key={index} className='educationCard w-[90%] flex flex-col gap-12 justify-between rounded bg-zinc-950 px-5 sm:px-10 py-8'>
                            <div className='text-left'>
                                <h2 className='text-lg text-[#c5ba22] font-semibold'>{elm.qualification}</h2>
                                <h2 className='text-[13px] py-2 text-blue-500'>{elm.year}</h2>
                                <h2 className='text-[13px] pb-2 text-green-500'>{elm.grade}</h2>
                                <h2>{elm.institution}</h2>
                            </div>
                            <div>
                                <img className='h-[120px]' src={elm.image} alt="education image" />
                            </div>
                        </div>

                    ))}
                </div>


            </div>
        </div>
    )
}

export default Education