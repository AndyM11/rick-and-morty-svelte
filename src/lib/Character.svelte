<script>
  export let character;
</script>

<div class="card bg-gray-700 p-4 rounded shadow">
  <img
    src={character.image}
    alt={character.name}
    class="w-full h-50 object-cover rounded-t"
  />
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2 text-white">{character.name}</h2>
    <p class="text-gray-400">{character.status} - {character.species}</p>
  </div>
</div>
