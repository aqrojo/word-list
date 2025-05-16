import { defineCollection, z } from "astro:content";

// Define el esquema para la colección de unidades
const unitsCollection = defineCollection({
  type: "data",
  schema: z.object({
    nodes: z.array(
      z.array(
        z.object({
          value: z.string(),
          audio: z.boolean().optional(),
        })
      )
    ),
  }),
});

// Exporta las colecciones
export const collections = {
  units: unitsCollection,
};
