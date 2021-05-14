import { api } from "../services";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export enum ImageSize {
  VERY_LARGE = "very_large",
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
  THUMBNAIL = "thumbnail",
}

interface FormatTypes {
  mime: string;
  name: string;
  height: number;
  width: number;
  url: string;
}

interface ImageFormats extends Record<string, FormatTypes> {
  large: FormatTypes;
  medium: FormatTypes;
  small: FormatTypes;
  thumbnail: FormatTypes;
}

export interface IImage extends FormatTypes {
  formats: ImageFormats;
  id: number;
}

export class Image {
  static windowSize(): ImageSize {
    const viewWidth = window.visualViewport.width;

    if (viewWidth > 1200) return ImageSize.LARGE;
    if (viewWidth > 600) return ImageSize.MEDIUM;

    return ImageSize.SMALL;
  }

  static selectImageSize(image: IImage): FormatTypes {
    const viewWidth = Image.windowSize();

    if (viewWidth === ImageSize.VERY_LARGE) return image;

    return (
      image.formats[viewWidth.toString()] ||
      image.formats.large ||
      image.formats.medium ||
      image.formats.small ||
      image.formats.thumbnail
    );
  }

  static selectImageSizeUrl(image: IImage): string {
    return BASE_URL + Image.selectImageSize(image).url;
  }

  static createImageURL(imageBlob: Blob) {
    return URL.createObjectURL(imageBlob);
  }

  static getMinimalImageUrl(image: IImage) {
    return (
      BASE_URL + image.formats.thumbnail.url ||
      image.formats.small.url ||
      image.formats.medium.url ||
      image.formats.large.url
    );
  }

  static async selectApropriateImage(image?: IImage) {
    if (!image) return "";
    const selectedImage = Image.selectImageSize(image);
    const imageBlob = await api.getImage(selectedImage.url);
    return Image.createImageURL(imageBlob);
  }
}
