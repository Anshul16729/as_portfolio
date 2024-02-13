import React from "react";

const SocialMediaLinks = ({
  linkTo,
  headerTitle,
  socialMedia,
  profileImg,
  profileAlt,
}) => {
  return (
    <div className="profile">
      <img
        src={profileImg}
        alt={profileAlt}
        className="img-fluid rounded-circle"
      />
      <h1 className="text-light">
        <a to={linkTo}>{headerTitle}</a>
      </h1>

      <div className="social-links mt-3 text-center">
        {socialMedia.map((items, i) => {
          return (
            <a href={items.href} className={items.className} target="_blank">
              <i className={items.iconClassName}></i>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMediaLinks;
