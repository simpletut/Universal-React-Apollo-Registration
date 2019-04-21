import React from 'react';

export const UnconnectedFooter = () => (
  <footer data-test="footerComponent">

    <div className="copyright">&copy; 2019 <a href="http://www.react-starter-kit.com" target="_blank" rel="noopener noreferrer">React-Starter-Kit.com</a></div>

    <div className="social_icons">
      <ul>
        <li><a href="https://www.facebook.com/SimpleTut" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="https://github.com/simpletut" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
      </ul>
    </div>

  </footer>
);

export default UnconnectedFooter;