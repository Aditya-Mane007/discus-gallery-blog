import protect from "@/utils/protect";
import { CategoryObject, fetchData } from "@/utils/utils";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const handler = async (req, res) => {
  const token = req.user.wordpressToken;

  const blogSlug = req.query.blogSlug;

  const post = await fetchData(base_url, `/posts/slug:${blogSlug}`, token);

  if (post.status === 404) {
    return res.status(404).json({
      message: post.message,
    });
  }

  res.status(200).json({
    data: post,
  });
};

export default protect(handler);
