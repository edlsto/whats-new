const handleClick = (props, e) => {
  props.selectTopic(e.target.getAttribute("section"));
};

export default handleClick;
