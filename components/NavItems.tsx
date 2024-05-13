import { navItems } from '@/constants';
import Link from 'next/link';
import AnimatedText from './AnimatedText';
import { useState } from 'react';

const NavItems: React.FC = () => {
  // Initialize an array of hover states, initially all set to false
  const [hoverStates, setHoverStates] = useState<boolean[]>(Array(navItems.length).fill(false));

  // Function to handle hover state change for a specific item
  const handleHoverChange = (index: number, isHovered: boolean): void => {
    const newHoverStates = [...hoverStates]; // Create a copy of the array
    newHoverStates[index] = isHovered; // Update the hover state for the specific item
    setHoverStates(newHoverStates); // Update the state
  };

  return (
    <div className='bg-gray-200/70 flex rounded-full p-1'>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onMouseEnter={() => handleHoverChange(index, true)} // Set hover state to true on mouse enter
          onMouseLeave={() => handleHoverChange(index, false)} // Set hover state to false on mouse leave
          className='flex-center text-black px-5 hover:bg-white rounded-full'
        >
          <AnimatedText hover={hoverStates[index]} title={item.title} /> {/* Pass the hover state for the specific item */}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
