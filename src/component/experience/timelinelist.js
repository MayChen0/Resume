import TimelineImage_Deepwave from '../../assets/image/deepwave.png'
import TimelineImage_Exchange from '../../assets/image/exchange.png'
import TimelineImage_Innovative from '../../assets/image/innovative.png'
import TimelineImage_Metal from '../../assets/image/metal.png'
import TimelineImage_Lightwhisper from '../../assets/image/lightwhisper.png'
import TimelineImage_Poster from '../../assets/image/poster.png'
import TimelineImage_Deepwave_2x from '../../assets/image/deepwave@2x.png'
import TimelineImage_Exchange_2x from '../../assets/image/exchange@2x.png'
import TimelineImage_Innovative_2x from '../../assets/image/innovative@2x.png'
import TimelineImage_Metal_2x from '../../assets/image/metal@2x.png'
import TimelineImage_Lightwhisper_2x from '../../assets/image/lightwhisper@2x.png'
import TimelineImage_Poster_2x from '../../assets/image/poster@2x.png'




const TimelineList = [
    {
        category:"education",
      year: "2021-2023",
      location: "Tainan Taiwan",
      company: "National Cheng Kung University",
      position: "Master in Industrial Design",
      
    },
    {category:"intern",
      year: "2022-2023",
      location: "Taipei",
      company: "Deep Wave Company",
      position: "Front-end Engineer Intern",
      discription: "Over the past year, I transitioned from a design background to a Front-end Engineering intern. Combining my design expertise with guidance from the company and self-directed learning in front-end programming, I actively participated in web development projects from a front-end engineer's perspective. During the internship, I played a pivotal role in assisting the development of the company's website.",
      src: TimelineImage_Deepwave,
      srcSet: `${TimelineImage_Deepwave} 1x,${TimelineImage_Deepwave_2x} 2x`,
    },
    {category:"intern",
      year: "2022-2023",
      location: "Kaohsiung Taiwan",
      company: "Metal Industries Research & Development Centre",
      position: "Game UI/UX Design Intern",
      discription: "I was involved in the internship where I focused on the design of serious games for the training of offshore wind power system maintenance personnel. Utilizing participatory design and agile design research methods, I researched and developed serious game interfaces for training offshore wind power maintenance worker. These interfaces simulated realistic scenarios for maintenance practice, allowing users to test and provide feedback before making necessary adjustments. The validation process demonstrated significant improvements in user experience and learning effectiveness.",
      src: TimelineImage_Metal,
      srcSet: `${TimelineImage_Metal} 1x,${TimelineImage_Metal_2x} 2x`,
    },
    {category:"education",
        year: "2016-2021",
        location: "Tainan Taiwan",
        company: "National Cheng Kung University",
        position: "Bachelor in Industrial Design <br>Minor: Mechanical Engineering",
        
      },
      {category:"activity",
        year: "2021",
        location: "Seoul Korea",
        company: "Ewha Womans University",
        position: "Exchange Student Program",
        discription: "During my university years, I participated in an internal selection process and had the opportunity to engage in a one-semester exchange program at Ewha Womans University in South Korea. Ewha Womans University is ranked 348th in the QS World University Rankings and 45th in the Asian University Rankings.",
        src: TimelineImage_Exchange,
        srcSet: `${TimelineImage_Exchange} 1x,${TimelineImage_Exchange_2x} 2x`,  
    },
      {category:"activity",
        year: "2020",
        location: "California USA",
        company: "Taiwan Tech Arena",
        position: "Innovative Start Up Training Program",
        discription: "Selected for entrepreneurship based on the design product Unicharm Single-arm Hair Tie Holder, I represented the National Cheng Kung University entrepreneurial team in undergoing innovative entrepreneurship training at the renowned Plug and Play accelerator in Silicon Valley, USA.",
        src: TimelineImage_Innovative,
        srcSet: `${TimelineImage_Innovative} 1x,${TimelineImage_Innovative_2x} 2x`,  
    },
    {category:"intern",
        year: "2019",
        location: "Luoyang China",
        company: "LightWhisper Design Company",
        position: "Design Intern",
        discription:"I engaged in designing local cultural and creative products for Luoyang, collaborating with local intangible cultural heritage craftsmen. The focus was on integrating the distinctive historical and cultural features of the region into the design of cultural and creative products.",
        src: TimelineImage_Lightwhisper,
        srcSet: `${TimelineImage_Lightwhisper} 1x,${TimelineImage_Lightwhisper_2x} 2x`, 
        last: true, 
      },
    {category:"activity",
        year: "2018-2021",
        location: "Tainan Taiwan",
        company: "National Cheng Kung University",
        position: "Design Part Time Job",
        discription: "Employed as a student worker in various departments, including the museum and department, at National Cheng Kung University. I gained experience in collaborative work with colleagues and supervisors. My responsibilities included designing posters and promotional brochures for lecture events, assisting in exhibition management and setup. Additionally, I utilized my spare time as a student worker to enhance my design skills.",
        src: TimelineImage_Poster,
        srcSet: `${TimelineImage_Poster} 1x,${TimelineImage_Poster_2x} 2x`, 
        last: true, 
    },
      {category:"education",
        year: "2014-2016",
        location: "Taipei Taiwan",
        company: "Taipei First Girl Senior High School",
        last: true,
      },
  ];
  
  export default TimelineList;