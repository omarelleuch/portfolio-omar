const Footer = () => {
  return (
    <footer className="bg-primary text-textSecondary py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-textPrimary">Omar Elleuch</h3>
            <p>Software & Embedded Systems Engineer</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="mailto:elleuchomar316@gmail.com" className="hover:text-secondary">
              elleuchomar316@gmail.com
            </a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+21622206544" className="hover:text-secondary">
              +216 22 206 544
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Omar Elleuch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;