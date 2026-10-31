type CategoriesProps = {
  filterItems: (category: string) => void;
  theCategories: string[];
};

const Categories = ({ filterItems, theCategories }: CategoriesProps) => {
  return (
    <>
      <h1 className="my-4" id="winter">Winter Collection</h1>

      <div className="btn-container">
        {theCategories.map((category, index) => {
          return (
            <button
              className="mt-3 mx-3"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
