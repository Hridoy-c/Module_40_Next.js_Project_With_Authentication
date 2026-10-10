const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white">
      <div className="mx-auto flex w-[92%] flex-col items-center justify-between gap-1 py-5 text-sm text-gray-600 sm:w-[94%] sm:flex-row lg:w-full lg:max-w-[80vw]">
        <p>© {new Date().getFullYear()} BanglaBulletin</p>
        <p>Source: BBC Bangla</p>
      </div>
    </footer>
  );
};

export default Footer;