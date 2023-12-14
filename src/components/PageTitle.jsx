import PropTypes from 'prop-types'

const PageTitle = ({title}) => {
  return (
    <div>
      <h2 className="text-2xl text-center">{title}</h2>
    </div>
  );
}

PageTitle.propTypes = {
    title: PropTypes.string
}

export default PageTitle;
