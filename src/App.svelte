<script>
  import Character from "./lib/Character.svelte";

  let character = [];
  let page = 1;

  const loadCharacters = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    character = data.results;
  };

  loadCharacters();

  const nextPage = () => {
    page++;
    loadCharacters();
  };

  const previousPage = () => {
    page--;
    loadCharacters();
  };
</script>

<div class="dark bg-gray-900 text-white min-h-screen flex flex-col">
  <h1 class="text-4xl font-bold text-center my-4">Rick And Morty Svelte</h1>

  <div class="container mx-auto flex-grow">
    <div class="flex justify-between mb-4">
      <button
        class="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        on:click={previousPage}
        disabled={page === 1}>Previous</button
      >
      <button
        class="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        on:click={nextPage}>Next</button
      >
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {#each character as character}
        <Character {character} />
      {/each}
    </div>
  </div>
</div>
