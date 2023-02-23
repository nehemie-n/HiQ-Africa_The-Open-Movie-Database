import { createPinia, setActivePinia, storeToRefs } from "pinia";
import { describe, it, expect, test, beforeAll } from "vitest";
import { useMovieStore } from "../movie";
import { useSearchStore } from "../search";
import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

describe("Fetches Movies", () => {
  /**
   * Instantiate pinia
   */
  beforeAll(() => {
    setActivePinia(createPinia());
    // import.meta.env.VITE_OMDB_API_KEY =
  });
  /**
   * Can it search many movies by keyword
   */
  it("Can search many", async () => {
    console.log(import.meta.env.VITE_OMDB_API_KEY);
    const searchStore = useSearchStore();
    searchStore.q = "Action";
    await searchStore.fetchResults();
    expect(searchStore.results.data.Search.length).toBeGreaterThan(0);
  });

  /**
   * Single movies searching
   */
  it("Can search a single movie", async () => {
    const movieStore = useMovieStore();
    await movieStore.fetchResults("tt0107362");
    expect(movieStore.result.data.imdbID).toBeDefined();
  });
});
