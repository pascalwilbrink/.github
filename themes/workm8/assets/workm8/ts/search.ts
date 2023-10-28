import lunr from "lunr";

const MIN_SEARCH_LENGTH = 3;

document.addEventListener("DOMContentLoaded", () => {
  const searchInput: HTMLInputElement = document.querySelector("input#search")!;

  const searchResultsMessage = document.querySelector(
    "#search-results-message"
  );
  const searchResultsCount = document.querySelector("#search-results-count");
  const searchResultsList = document.querySelector(".search-results");
  const searchResults = Array.from(
    searchResultsList!.querySelectorAll(".post")
  );

  let searchIndex;

  const getInitialSearchTerm = (): string => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("q") || "";
  };

  const showMessage = (message?: string) => {
    if (message) {
      searchResults.forEach((result) => result.classList.add("hidden"));
      searchResultsCount!.classList.add("hidden");
      searchResultsMessage!.classList.remove("hidden");
      searchResultsMessage!.innerHTML = message;
    } else {
      searchResultsMessage!.classList.add("hidden");
    }
  };

  const onSearch = (query: string) => {
    if (query.length < MIN_SEARCH_LENGTH) {
      searchResultsCount?.classList.add("hidden");
      showMessage(
        `Enter a search term (of at least ${MIN_SEARCH_LENGTH} characters) to search`
      );
      return;
    }
    showMessage("");

    if (searchIndex) {
      const results = searchIndex.search(query);

      console.log("results: ", results);
      if (!results) {
        showMessage("No results found");
        return;
      }

      console.log("Results: ", results);

      console.log("found results: ", searchResults);
      searchResults.forEach((result) => {
        const id = result.getAttribute("data-id")!;

        if (results.find((result) => result.ref === id)) {
          result.classList.add("shown");
          result.classList.remove("hidden");
        } else {
          result.classList.add("hidden");
          result.classList.remove("shown");
        }
      });

      const sortedResults = searchResults.sort((a, b) => {
        const aOrder = results.indexOf(a.getAttribute("data-id"));
        const bOrder = results.indexOf(b.getAttribute("data-id"));

        return aOrder < bOrder ? -1 : aOrder > bOrder ? 1 : 0;
      });

      searchResultsCount!.innerHTML = `Found ${results.length} results`;
      searchResultsCount!.classList.remove("hidden");
    }
  };

  searchInput.setAttribute("disabled", "disabled");
  const initialSearchTerm: string = getInitialSearchTerm();
  searchInput.value = initialSearchTerm;

  fetch("/search/index.json")
    .then((res) => res.json())
    .then((res) => {
      searchIndex = lunr(function () {
        this.ref("id");
        this.field("title");
        this.field("content");

        res.forEach((page) => {
          this.add(page);
        }, this);
      });

      searchInput.addEventListener("change", (evt) => {
        onSearch((evt.target as HTMLInputElement).value);
      });

      searchInput.removeAttribute("disabled");

      if (initialSearchTerm) {
        document.getElementsByTagName("h1")[0].scrollIntoView();
      }
    });
});
