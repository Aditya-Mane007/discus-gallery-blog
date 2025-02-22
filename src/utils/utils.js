export const modifyTitle = (text) => {
  const words = text.split("-");

  let modifiedText = "";
  words.forEach((word) => {
    modifiedText += word.slice(0, 1).toUpperCase() + word.slice(1) + " ";
  });

  return modifiedText;
};

const Months = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const formateDate = (dateString) => {
  const d = new Date("2025-02-12T22:45:47+05:30");
  const date = d.getDate();
  const month = Months[d.getMonth()];
  const year = d.getFullYear();

  return `${date} ${month}, ${year}`;
};

// const BASE_URL =
//   process.env.NODE_ENV == "production"
//     ? process.env.NEXT_PUBLIC_BACKEND_URL
//     : "http://localhost:3000";

export const fetchData = async (base_url, endpoint, token) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await fetch(base_url + endpoint, options);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchData = async (base_url, endpoint) => {
//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
//     },
//   };

//   try {
//     const res = await fetch(base_url + endpoint, options);

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const CategoryObject = {
  "care-and-maintenance": "Care and Maintenance",
  "best-food-for-discus-fish": "Best Food for Discus Fish",
  "breeding-and-raising-fry": "Breeding and Raising Fry",
  "health-and-diseases": "Health and Diseases",
  "species-and-types": "Species and Types",
};
