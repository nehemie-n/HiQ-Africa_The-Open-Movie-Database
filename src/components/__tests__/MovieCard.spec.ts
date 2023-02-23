import { describe, it, expect, test } from "vitest";

import { mount, shallowMount } from "@vue/test-utils";
import MovieCard from "../MovieCard.vue";
import type { MovieResult } from "@/interface";

const movie = {
  Title: "Last Action Hero",
  Year: "1993",
  imdbID: "tt0107362",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
} as MovieResult;

describe("MovieCard", () => {
  it("Renders Properly", () => {
    const wrapper = shallowMount(MovieCard, { props: { movie: movie } });
    expect(wrapper.find(".MovieTitle").text()).toContain(movie.Title);
    expect(wrapper.find(".MovieYear").text()).toContain(movie.Year);
    expect(wrapper.find("button")).toBeDefined();
    expect(wrapper.find("img")).toBeDefined();
  });
});
