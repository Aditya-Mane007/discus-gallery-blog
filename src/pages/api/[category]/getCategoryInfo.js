import protect from "@/utils/protect";
import { CategoryObject, fetchData } from "@/utils/utils";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

// export const CategoryObject = {
//   "Care and Maintenance": "care-and-maintenance",
//   "Best Food for Discus Fish": "best-food-for-discus-fish",
//   "Breeding and Raising Fry": "breeding-and-raising-fry",
//   "Health and Diseases": "health-and-diseases",
//   "Species and Types": "species-and-types",
// };

const handler = async (req, res) => {
  const token = req.user.wordpressToken;

  const category = req.query.category;

  const categories = await fetchData(
    base_url,
    `/categories/slug:${category}`,
    token
  );

  if (categories.status === 404) {
    return res.status(404).json({
      message: categories.message,
    });
  }

  // const formatedCategoryData = {
  //   id: categories.id,
  //   name: categories.name,
  //   slug: categories.slug,
  //   description: categories.description,
  // };

  res.status(200).json({
    data: categories,
  });
};

export default protect(handler);
