const BASE_URL = import.meta.env.VITE_BASE_URL;

export class api {
  static async get(endpoint: string, timeout = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(BASE_URL + endpoint, {
      signal: controller.signal,
    });
    clearTimeout(id);
    return response.json();
  }

  static async getImage(endpoint: string, timeout = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(BASE_URL + endpoint, {
      signal: controller.signal,
    });
    clearTimeout(id);
    return response.blob();
  }
}
