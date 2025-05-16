import React, { useEffect, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';

const Portfolio = () => {
  const [projects, setProjects] = useState([]); // Initialize with an empty array
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setFilteredProjects(data); // Show all projects initially
      });
  }, []);

  // Function to handle category selection and filtering
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.category.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      <section>
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        {/* Filter buttons */}
        <ul className="filter-list">
          {['All', 'Web design', 'Application', 'Web development'].map(category => (
            <li key={category} className="filter-item">
              <button
                onClick={() => handleSelectCategory(category)} // Fixed event handler
                className={category === selectedCategory ? 'active' : ''}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Show portfolio data */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <li key={project.id} className="project-item active">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </figure>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))
          ) : (
            <p>No projects found</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
