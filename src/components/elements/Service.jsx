import { ReactSVG } from "react-svg";

const Service = ({ service: { title, text, icon } }) => {
  return (
    <div className="service card hovercard relative overflow-hidden p-4 md:p-5">
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Service;
