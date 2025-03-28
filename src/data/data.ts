import { FiBell, FiBox, FiCamera, FiCommand, FiCompass, FiDollarSign, FiMonitor, FiTrendingUp } from "react-icons/fi";

import client1 from '../assets/images/team/01.jpg'
import client2 from '../assets/images/team/02.jpg'
import client3 from '../assets/images/team/03.jpg'
import client4 from '../assets/images/team/04.jpg'
import client5 from '../assets/images/team/05.jpg'
import client6 from '../assets/images/team/06.jpg'

import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'

import partner1 from '../assets/images/team/amazon.svg'
import partner2 from '../assets/images/team/google.svg'
import partner3 from '../assets/images/team/lenovo.svg'
import partner4 from '../assets/images/team/paypal.svg'
import partner5 from '../assets/images/team/shopify.svg'
import partner6 from '../assets/images/team/spotify.svg'

export const servicesData = [
    {
        icon: FiTrendingUp,
        title: 'Liaison',
        desc: `We provide services to bridge the gap between talents and clients`
    },
    {
        icon: FiDollarSign,
        title: 'Finance',
        desc: `We provide services to handle payments with transparent process between talents and clients`
    },
    {
        icon: FiCompass,
        title: 'Screening',
        desc: `We provide services to handle background check and verify individual's identity`
    },
    {
        icon: FiCommand,
        title: 'Interviewing',
        desc: `We provide services to handle interviews for clients identifying the right talents`
    }
]

export const clientData = [
    {
        image: client1,
        name: 'Calvin Carlo',
        position: 'Manager',
        desc: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client2,
        name: 'Christa Smith',
        position: 'Manager',
        desc: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client3,
        name: 'Jemina CLone',
        position: 'Manager',
        desc: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client4,
        name: 'Smith Vodka',
        position: 'Manager',
        desc: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client5,
        name: 'Cristino Murfi',
        position: 'Manager',
        desc: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
    {
        image: client6,
        name: 'Cristino Murfi',
        position: 'Manager',
        desc: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`,
        rate: ['mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star', 'mdi mdi-star']
    },
]

export const offerData = [
    {
        image: blog1,
        title: 'Design Your Apps In Your Own Way',
        desc: `We offer robust support and mentorship to empower talent in securing jobs and excelling his project work`
    },
    {
        image: blog2,
        title: 'Lucrative Collaboration',
        desc: `We offer lucrative projects and foster respectful, trusthworthy relationships between talents and clients.`
    },
    {
        image: blog3,
        title: 'Remote Work Environment',
        desc: `We offer a remote work environment to enhance work-life balance for our talents.`
    },
    {
        image: blog3,
        title: 'Strong Community',
        desc: `We offer a robust talent community, enabling talents to easily find individuals aligned with their needs.`
    },
]
export const partnerData = [
    partner1, partner2, partner3, partner4, partner5, partner6
]