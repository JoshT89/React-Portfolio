import DevImg from "./DevImg";
import Image from "next/image"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Joshua Turner',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '07912 561 741',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'front-end-josh@hotmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born in May 1989',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Professional Certification in Web Development',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Milton Keynes, UK',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Codecademy',
                qualification: 'Professional Certification in Front End Engineering',
                years: '2022 - 2023'
            },
            {
                university: 'Codecademy',
                qualification: 'Certification in PHP, node.js, ASP.Net, C#',
                years: '2023 - 2023'
            },
            {
                university: 'Snozone MK',
                qualification: 'Certification for level 1 Snowboard instructor',
                years: '2014 - 2014'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Bodot.co',
                position: 'Front End Support',
                years: '2019-2021'
            },
            {
                company: 'Front End Josh',
                position: 'Freelance Developer',
                years: '2023-2024'
            },
            {
                company: 'IT Boffins',
                position: 'Web Developer',
                years: '2024-present'
            },

        ]
    }
];
const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'JavaScript, React',
            },
             {
                name: 'Front End Development',
            },
              {
                name: 'Node.js, ASP.Net, PHP',
            },
               {
                name: 'Back End Development',
            },
        ],
    },
    {
         title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
             {
                imgPath: '/about/figma.svg',
            },
              {
                imgPath: '/about/notion.svg',
            },
               {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
]
 



const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
  
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About Me
                </h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about-shape-dark w-[505px] 
                        h-[505px] bg-no-repeat relative' 
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal  */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Up and Coming React Web Developer</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            I have spent the last 2 years crafting intuitive websites with cutting-edge technology, 
                                            delivering dynamic and engaging user experiences.
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                        key={index}>
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                                
                                            
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language Skill</div>
                                            <div className='border-b border-border'></div>
                                                <div>English</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            My Incredible Journey
                                        </h3>
                                        {/* experience and education wrapper */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience').data.map((
                                                        item, index) => {
                                                        const { company, position, years } = item;
                                                        return (
                                                            <div className='flex gap-x-8 group'
                                                                key={index} >
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='h-[11px] w-[11px] bg-primary absolute -left-[5px] rounded-full 
                                                                    group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    
                                                                    </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>
                                                                        {company}
                                                                    </div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                        {position}
                                                                    </div>
                                                                    <div className='text-base font-medium'>
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* education */}
                                          <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education').data.map((
                                                        item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div className='flex gap-x-8 group'
                                                                key={index} >
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='h-[11px] w-[11px] bg-primary absolute -left-[5px] rounded-full 
                                                                    group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    
                                                                    </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>
                                                                        {university}
                                                                    </div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                                                        {qualification}
                                                                    </div>
                                                                    <div className='text-base font-medium'>
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </TabsContent>
                                <TabsContent value='skills'>skills info</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
</div>
            </section>
        )
  
}

export default About;