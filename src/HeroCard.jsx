import {useEffect, useRef, useState} from 'react'
import Overview from './sections/Overview'
import Menu from './sections/Menu'
import Photos from './sections/Photos'
import Experiences from './sections/Experiences'
import Reviews from './sections/Reviews'

const HeroCard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const observer = useRef(new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        setActiveSection(entry.target.id)
      }
    })
  }, { threshold: 1 }));

  const sectionRefs = {
    overview: useRef(null),
    menu: useRef(null),
    photos: useRef(null),
    experiences: useRef(null),
    reviews: useRef(null),
  };

  useEffect(() => {
    Object.values(sectionRefs).forEach((ref) => {
      if(ref.current){
        observer.current.observe(ref.current)
      }
    })
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if(ref.current){
          observer.current.unobserve(ref.current)
        }
      })
    }
  },[])

  const navigateTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className='font-open w-[550px] h-auto'>
      <ul className='flex items-baseline justify-between w-[550px] h-auto text-xl text-center border-b-[1px] border-gray-200 py-3 px-2 bg-white rounded-lg cursor-pointer sticky top-0'>
        <li className={`${activeSection === 'overview' ? 'active' : ''}`} onClick={() => setActiveSection('overview')}>Overview</li>
        <li className={`${activeSection === 'menu' ? 'active' : ''}`} onClick={() => setActiveSection('menu') } >Menu</li>
        <li className={`${activeSection === 'photos' ? 'active' : ''}`} onClick={() => setActiveSection('photos')}>Photos</li>
        <li className={`${activeSection === 'experiences' ? 'active' : ''}`} onClick={() => setActiveSection('experiences')}>Experiences</li>
        <li className={`${activeSection === 'reviews' ? 'active' : ''}`} onClick={() => setActiveSection('reviews')}>Reviews</li>
      </ul>
      <div className='flex flex-col gap-8'>
        <div ref={sectionRefs.overview} id="overview"><Overview /></div>
        <div ref={sectionRefs.menu} id="menu"><Menu /></div>
        <div ref={sectionRefs.photos} id="photos"><Photos /></div>
        <div ref={sectionRefs.experiences} id="experiences"><Experiences /></div>
        <div ref={sectionRefs.reviews} id="reviews"><Reviews /></div>
      </div>
    </div>
  )
}

export default HeroCard