import Nav from "../nav";

const Header = (props) => {

  return (
    <header>
      <section className="header-container">
        <h1 className="heading"> Milfred Martinez </h1>
        <h2 className="sub-heading"></h2>
      </section>
      <Nav
        navSections={props.navSections}
        setCurrentSection={props.setCurrentSection}
        currentSection={props.currentSection}
      ></Nav>
    </header>
  );
};

export default Header;
