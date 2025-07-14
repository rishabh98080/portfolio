import './Header.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSkillsClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/#skills");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="div-class-header">
      <h3>
        <a href="/" onClick={handleHomeClick}>Home</a>
      </h3>
      <h3>
        <a href="/#skills" onClick={handleSkillsClick}>Skills</a>
      </h3>
      <h3><Link to="/projects">Projects</Link></h3>
      <h3><Link to="/contact">Contact</Link></h3>
    </div>
  );
}

export default Header;