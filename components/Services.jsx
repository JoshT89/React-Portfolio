import { GanttChartSquare, Blocks, Gem } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';


const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Web Design',
            description: 'Come to me with an idea and I will make it a reality. I will do all the design for you giving you time to focus on other things.'
    },
     {
        icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Web Development',
            description: 'Develop a website just for your needs, only pay for what you require. Most projects made using React.js and Next.js. for a fast and responsive website.'
    },
      {
        icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Wordpress',
            description: 'For a simple cost effective website with good SEO optimisation, Wordpress is the way to go.'
    },
];

const Services = () => {
    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
                {/** grid items */}
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {servicesData.map((item, index) => {
                        return (
                            <Card
                                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                                key={index}
                            >
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='textcenter'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                   <CardDescription className='text-lg'>{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;