interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
}

interface Work {
  id: number;
  title: string;
  full_title: string;
  tags: string[];
  main_img: string;
  year: string;
  text: string;
  content: Array<[string, string]>;
}
