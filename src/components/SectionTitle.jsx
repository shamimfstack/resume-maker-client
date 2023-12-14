import PropTypes from "prop-types"

const SectionTitle = ({children}) => {
  return (
    <div>
      <h2 className="text-xl font-bold bg-purple-300 p-2 my-2">{children}</h2>
    </div>
  );
}

SectionTitle.propTypes = {
    children: PropTypes.object
}

export default SectionTitle;