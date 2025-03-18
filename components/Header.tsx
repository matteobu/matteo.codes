import Image from 'next/image';
import Link from 'next/link';

// components/Header.tsx
const Header = () => {
  return (
    <header className="bg-lightblue w-full py-4 px-8 mt-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-full">
        {/* Logo and Title on the left */}
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-3xl font-extrabold">
            <Link href="/">matteo.codes</Link>
          </h1>
        </div>
        <nav className="flex space-x-6">
          <Link href="#main" className="text-xl font-bold hover:text-gray-200">
            main
          </Link>
          <Link
            href="#projects"
            className="text-xl font-bold hover:text-gray-200"
          >
            projects
          </Link>
          <Link
            href="#about"
            className="text-xl font-bold hover:text-gray-200"
          >
            about
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
