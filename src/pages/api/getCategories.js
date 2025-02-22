import protect from "@/utils/protect";
import { fetchData } from "@/utils/utils";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const handler = async (req, res) => {
  const token = req.user.wordpressToken;

  const categories = await fetchData(base_url, "/categories", token);

  if (categories.status === 404) {
    return res.status(404).json({
      message: categories.message,
    });
  }

  const formatedData = await categories.categories
    .slice(0, categories.length)
    .map((item) => {
      const object = {
        id: item.id,
        title: item.name.replaceAll("&amp;", "&"),
        description: item.description,
        slug: item.slug,
      };

      return object;
    });

  res.status(200).json({
    data: formatedData.slice(0, formatedData.length - 1),
  });
};

export default protect(handler);
