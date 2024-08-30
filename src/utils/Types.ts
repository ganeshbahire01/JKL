interface Image {
  src: string;
  alt: string;
}

interface Author {
  name: string;
  image: string;
}

interface Badge {
  text: string;
  theme: "green" | "red" | "blue";
}

export interface BlogPost {
  image: Image;
  category: string;
  title: string;
  description: string;
  author: Author;
  date: string;
  badge: Badge[];
}
