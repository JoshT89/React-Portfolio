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

const qulaificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Codecademy',
                qulaification: 'Professional Certification in Front End Engineering',
                years: '2022 - 2023'
            },
            {
                university: 'Codecademy',
                qulaification: 'Certification in PHP, node.js, ASP.Net, C#',
                years: '2023 - 2023'
            },
            {
                university: 'Snozone MK',
                qulaification: 'Certification for level 1 Snowboard instructor',
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
                                <TabsContent value='personal'>personal info</TabsContent>
                                <TabsContent value='qualifications'>qualifications info</TabsContent>
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