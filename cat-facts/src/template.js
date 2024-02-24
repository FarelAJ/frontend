import React from 'react'; 
import './styles.css';
import profileImage from './images.jfif';
import CatFact from './CatFact';

function Template() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="./styles.css" rel="stylesheet" />
      </head>
      <body className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
              <a className="navbar-brand" href="index.html"><span className="fw-bolder text-primary">Wikipawdia</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      
            </div>
          </nav>
          <header className="py-5">
            <div className="container px-5 pb-5">
              <div className="row gx-5 align-items-center">
                <div className="col-xxl-5">
                  <div className="text-center text-xxl-start">
                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Cat &middot; Fact &middot; Ninja</div></div>
                    <div className="fs-3 fw-light text-muted">Use this site to receive your daily dose of</div>
                    <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Daily Cat Facts</span></h1>
                    
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                    <CatFact />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7">
                  <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                    <div className="profile bg-gradient-primary-to-secondary">
                      <img className="profile-img" src={profileImage} alt="Profile" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </main>
        <section className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">About Us</span>
              </h2>
              <p className="lead fw-light mb-4">
                This is a website dedicated to delivering cat facts.
              </p>
              <p className="text-muted">
              Welcome to our paw-some website! Dive into a world of whisker-licking cat facts, adorable images, and purr-fect stories. Whether you're a cat connoisseur or a curious kitten, our site offers a paw-some blend of insights and tips to keep your feline friends happy. Join us for a meow-gical journey through the enchanting realm of cats!
              </p>
              <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="#!">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </body>
    </html>
  );
}

export default Template;

    