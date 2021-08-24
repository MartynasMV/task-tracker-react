import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

/* for default props:
Header.defaultProps = {
  title: "Task Tracker",
}; */

/* in order to make code more robust proptypes could be importerted 
import PropTypes from "prop-types";

then e.g it could be possible to allow only props which are strings:

Header.propTypes = {
  title: PropTypes.stringisRequired,
}; */

/* 
css in JS
const headingStyle = {
  color: "red",
  backgroundColor: "black",
}; */

export default Header;
