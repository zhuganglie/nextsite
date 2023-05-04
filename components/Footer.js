const Footer = () => {
  const currentYear = new Date().getFullYear(); // get current year
  return (
    <footer>
      <p>Copyright © {currentYear}
      </p>
    </footer>
  );
}
export default Footer

