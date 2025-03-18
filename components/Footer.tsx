// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="shadow-sm p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} matteo.codes all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
