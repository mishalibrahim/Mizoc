import { navItems } from '@/constants';
import Link from 'next/link';
import AnimatedText from './AnimatedText';
import { useState } from 'react';

interface HoverState {
  [key: string]: boolean;
}

const NavItems: React.FC = () => {
  const [hoverStates, setHoverStates] = useState<HoverState>({});

  const handleHoverChange = (id: string, isHovered: boolean): void => {
    setHoverStates((prevHoverStates) => ({
      ...prevHoverStates,
      [id]: isHovered,
    }));
  };

  return (
    <div className='bg-gray-200/70 flex rounded-full p-1'>
      {navItems.map((item,i) => (
        <Link
          key={i}
          href={item.href}
          onMouseEnter={() => handleHoverChange(item.id, true)}
          onMouseLeave={() => handleHoverChange(item.id, false)}
          className='flex-center text-black px-5 hover:bg-white rounded-full'
        >
          <AnimatedText hover={hoverStates[item.id]} title={item.title} />
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
