import protect from "@/utils/protect";

async function handler(req, res) {
  const { url } = req.query;

  const token = req.user.wordpressToken;

  if (!url) {
    return res.status(400).json({ error: "Image URL is required" });
  }

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Use env variable for security
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const contentType = response.headers.get("content-type");
    res.setHeader("Content-Type", contentType);

    const imageBuffer = await response.arrayBuffer(); // Convert to Buffer
    res.send(Buffer.from(imageBuffer)); // Send Image Data
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Error fetching image" });
  }
}

export default protect(handler);
