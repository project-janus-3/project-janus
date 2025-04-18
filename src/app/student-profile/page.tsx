/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
/* import * as rbs from 'react-bootstrap'; */

/** Render a list of stuff for the logged in user. */
const StudentProfile = async () => {
  <main className="container my-5">
    <div className="row mb-5">
      <div className="col-md-4 profile-sidebar">
        <div className="card p-3 shadow-sm profile-sidebar-content">
          <img src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png" alt="Profile Picture" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
          <p>JOHN DOE</p>
          <p>XYZ MAJOR</p>
          <p>PREFERRED GEOGRAPHIC LOCATION</p>
          <a href="#" style={{ width: '5%' }}>Edit Profile</a>
        </div>
      </div>
      <div className="col-md-8 profile-contents">
        <div className="card p-3 shadow-sm">
          <h5>ABOUT ME</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="row">
          <div className="col-7">
            <div className="card p-3 mt-4 shadow-sm">
              <h5>INTERESTS-SKILLS</h5>
              <p>Lorem ipsum</p>
            </div>
          </div>

          <div className="col-5">
            <div className="card p-3 mt-4 shadow-sm">
              <h5>PROFESSIONAL PORTFOLIO</h5>
              <a href="#">Lorem ipsum</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>;
};

export default StudentProfile;
