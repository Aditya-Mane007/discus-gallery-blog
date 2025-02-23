import protect from "@/utils/protect";
import { CategoryObject, fetchData } from "@/utils/utils";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const handler = async (req, res) => {
  const token = req.user.wordpressToken;

  const category = CategoryObject[req.query.category];

  const posts = await fetchData(base_url, "/posts", token);

  if (posts.status === 404) {
    return res.status(404).json({
      message: posts.message,
    });
  }

  const filterdPosts = await posts.posts.map((post) => {
    if (post.terms.category.hasOwnProperty(category)) {
      const formatedPost = {
        id: post.ID,
        date: post.date,
        title: post.title,
        slug: post.slug,
        content: post.content,
        image: post.featured_image,
      };

      return formatedPost;
    }
  });

  res.status(200).json({
    data: filterdPosts.filter(Boolean),
  });
};

export default protect(handler);
