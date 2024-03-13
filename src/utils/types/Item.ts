export interface IITem {
  firstPreviewImage: ImageType;
  title: string;
  author: AuthorType;
  price: string;
  description: string;
  id: number
}

type AuthorType = {
  details: {
    publicName: string;
  };
};

type ImageType = {
  watermarked: string;
};
