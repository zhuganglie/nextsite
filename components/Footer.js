const Footer = () => {
  const currentYear = new Date().getFullYear(); // get current year
  return (
    <footer className="flex items-center justify-center sticky bottom-0 bg-gray-200">
      <p className="m-0">Copyright © {currentYear}
      </p>
    </footer>
  );
}
export default Footer

