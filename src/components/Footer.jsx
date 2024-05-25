import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-4">
        <div className="text-center pt-3">
          <p>&copy; {new Date().getFullYear()} Zenzone. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
