import { Link } from "react-router-dom";
import { useData } from "../../context/index";
import "./CategoryCard.css";

const CategoryCard = ({ categoryName, srcImg }) => {
const { setClickedCategory } = useData();

return (
<div className="container-category-card">
  <div className="category-image">
    <img src={srcImg} alt="thumbnail" className="video-thumbnail img-responsive" />
  </div>
  <Link to="/videolist">
  <div className="video-heading" onClick={()=> setClickedCategory(categoryName)}
    >
    {categoryName}
  </div>
  </Link>
</div>
);
};

export { CategoryCard };