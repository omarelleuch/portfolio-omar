import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'education' },  
    { id: 4, link: 'experience' },
    { id: 5, link: 'skills' },
    { id: 6, link: 'projects' },
    { id: 7, link: 'certifications' },
    { id: 8, link: 'contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-textPrimary bg-primary fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-secondary">Omar Elleuch</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-textSecondary hover:text-secondary duration-200">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-textSecondary md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-textSecondary hover:text-secondary duration-200">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
