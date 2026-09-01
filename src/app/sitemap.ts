import type { MetadataRoute } from "next";

const routes = [
  "",
  "/nuestra-historia",
  "/quienes-somos",
  "/capitulos",
  "/membresia",
  "/eventos",
  "/medallero",
  "/becas",
  "/blog",
  "/patrocinadores",
  "/donaciones",
];

const baseUrl = "https://pinkbootslatam.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => [
    {
      url: `${baseUrl}/es${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/pt${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]);
}
