// // Page.jsx
// import React, { useState } from 'react';
// import Template1 from '../template/Template1'; // Adjust the path based on your file structure
// import './PortFolioDesign.scss'; 
// import Template2 from '../template/Template2';
// import Header from '../Header/Header';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter, faGithub, faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

// const PortFolioDesign = () => {
//   // State for input values
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [project, setProject] = useState('');
//   const [about, setAbout] = useState('');
//   const [image, setImage] = useState(null);
//   const [resume, setResume] = useState(null);
//   const [address, setAddress] =useState(null);

//   const handleAddToSite = () => {

//      <Template1 name={name} description={description} project={project} about={about} image={image} address={address} />

//     // For now, let's pass only 'name'
//     // <2 name={name} image={image} resume={resume} />;
//   };

//   return (
//     <div>
//     <Header/>
//     <div className="page-container">
//       {/* Left Section with Input Boxes */}
//       <div className="left-section">
//         <h2>Input Section</h2>
//         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//         <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//         <textarea type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
//         <textarea type="text" placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} />
//         <input type="text" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} />
//         <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
//         <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
//         <button onClick={handleAddToSite}>Add to Site</button>
//         <h4>Social Links</h4>
        

//       </div>
//       {/* Right Section displaying Template1 */}
//       <div className="right-section">
//         <h2>Template Preview</h2>
//         <Template1 name={name} description={description} project={project} about={about} image={image} address={address}/>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default PortFolioDesign;



// Page.jsx
import React, { useState } from 'react';
import Template1 from '../template/Template1';
import Template2 from '../template/Template2';
import './PortFolioDesign.scss'; 
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const PortFolioDesign = () => {
  // State for input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState(null);
  const [resume, setResume] = useState(null);
  const [address, setAddress] = useState(null);
  const [facebooklink, setFaceBookLink] = useState(null);
  const [instagramlink, setInstagramLink] = useState(null);
  const [twitterlink, setTwitterLink] = useState(null);
  const [githublink, setGitHubLink] = useState(null);
  const [linkedinlink, setLinkedInLink] = useState(null);
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    instagram: '',
    twitter: '',
    github: '',
    whatsapp: '',
    linkedin: '',
    telegram: '',
  });

  const handleAddToSite = () => {
    <Template2 name={name} description={description} project={project} about={about} image={image} address={address} />
    // For now, let's pass only 'name'
    // <2 name={name} image={image} resume={resume} />;
    // Call a function or update state as needed
  };

  return (
    <div>
      <Header />
      <div className="page-container">
        {/* Left Section with Input Boxes */}
        <div className="left-section">
          <h2 style={{ color: '#ffff', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', fontWeight: 'bold' }}>Input Section</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <textarea type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          <textarea type="text" placeholder="Project" value={project} onChange={(e) => setProject(e.target.value)} />
          <input type="text" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <input type="file" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />

          {/* Social Links */}
          <div className="social-links">
            <h4>Social Links</h4>
            <div className="social-input">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <input type="text" placeholder="Facebook" value={facebooklink} onChange={(e) => setFaceBookLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <input type="text" placeholder="Instagram" value={instagramlink} onChange={(e) => setInstagramLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <input type="text" placeholder="Twitter" value={twitterlink} onChange={(e) => setTwitterLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <input type="text" placeholder="GitHub" value={githublink} onChange={(e) => setGitHubLink(e.target.value )} />
            </div>
            <div className="social-input">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <input type="text" placeholder="LinkedIn" value={linkedinlink} onChange={(e) => setLinkedInLink(e.target.value )} />
            </div>
            
            {/* Repeat similar structure for other social links */}
          </div>

          <button onClick={handleAddToSite}>Add to Site</button>
        </div>
        {/* Right Section displaying Template1 */}
        <div className="right-section">
          <h2>Template Preview</h2>
          <Template2 name={name} description={description} project={project} about={about} image={image} address={address} phone={phone} email={email} facebooklink={facebooklink} instagramlink={instagramlink} twitterlink={twitterlink} githublink={githublink} linkedinlink={linkedinlink}/>
        </div>
      </div>
    </div>
  );
};

export default PortFolioDesign;
