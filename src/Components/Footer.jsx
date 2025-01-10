import React from 'react';
// import 'About.css'; 
// import './Home.css';
import './Footer.css';
const Footer  = () => {
  return (
    <div className="container-fluid">
       <footer className="P-0 " id="FOOTER">
          <section className="row footer  justify-content-md-evenly p-0 fs-6">
            <div className="col-11">

              <div className="row align-items-start justify-content-around mt-5">
                <div className="col-12 col-lg-3">
                  <div className=''><img src="public/Images/Background/foot-logo.png" alt="" /></div>
                  <div className="foot mt-2">
                    <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.Lorem ipsum dolo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.
                    </p>
                  </div>
                  <div className="foot">
                    <p><a href="">Learn</a></p>
                  </div>

                </div>


                <div className=" col-12 col-lg-2 text-white  foot">
                  <div>
                    <h3>Useful Links
                    </h3>
                  </div>
                  <div>
                    <ul className="list-unstyled text-white">
                      <li><a href="">About</a></li>
                      <li><a href="">News</a></li>
                      <li><a href="">Services</a></li>
                      <li><a href="">Our Team</a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">Project</a></li>
                    </ul>
                  </div>
                </div>

                <div className=" col-12 col-lg-2 m-0 text-white  foot">
                  <div>
                    <h3>Latest News</h3>
                  </div>

                  <div>
                    <ul className="list-unstyled text-white">
                      <li><a href="">Industrial</a></li>
                      <li><a href="">Construction</a></li>
                      <li><a href="">Remodeling</a></li>
                    </ul>
                  </div>
                </div>

                <div className=" col-12 col-lg-2 text-white  foot">
                  <div>
                    <h3>Contact</h3>
                  </div>

                  <div>
                    <ul className="list-unstyled text-white  ">
                      <li><a href="">Help Center</a></li>
                      <li><a href="">Support Community </a></li>
                      <li><a href="">Press</a></li>
                      <li><a href="">FAQ</a></li>
                      <li><a href="">Our Partners</a></li>
                    </ul>
                  </div>
                </div>


              </div>

            </div>



            <div className="col-11 col-lg-10 py-5 mt-5 text-center">
              <p>
                <hr className='text-white' />
                Copyright ©2024 All rights reserved | created by omkar Hole</p>
            </div>

          </section>
        </footer>
    </div>
  );
};

export default Footer ;
