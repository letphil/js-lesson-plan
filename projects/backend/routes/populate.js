// const axios = require("axios");
// const express = require("express");
// const dbConnect = require("../db/connect.js");

// const router = express.Router();

// // pokeapi - ?offset=0&limit=10
// // randomusers - ?results=10
// // swapi - https://swapi.dev/api/people // ?page=1

// const APIS = {
//   randomUsers: "https://randomuser.me/api",
//   pokeapi: "https://pokeapi.co/api/v2/pokemon",
//   swapi: "https://swapi.dev/api/people",
// };

// router.get("/users", async function (req, res) {
//   const connection = await dbConnect("users");

//   const find = await connection.collection.find({}).toArray();

//   if (find.length) {
//     return res.send("already populated");
//   }

//   const results = await axios.get(APIS.randomUsers, {
//     params: {
//       results: 100,
//     },
//   });

//   const processed = results.data.results.map((randomUser) => ({
//     name: `${randomUser.name.title} ${randomUser.name.first} ${randomUser.name.last}`,
//     location: `${randomUser.location.city}, ${randomUser.location.country}`,
//     picture: randomUser.picture.medium,
//     chosenPokemon: null,
//     favoriteStarsWarsCharacter: null,
//   }));

//   const insertResult = await connection.collection.insertMany(processed);

//   res.send(insertResult);
// });

// router.get("/pokemon", async function (req, res) {
//   const connect = await dbConnect("pokemon");

//   const find = await connect.collection.find({}).toArray();

//   if (find.length) {
//     return res.send("already populated");
//   }

//   async function isNonEvolved(pokemonUrl) {
//     const data = (await axios.get(pokemonUrl)).data;
//     const speciesData = (await axios.get(data["species"]["url"])).data;

//     const evolutionChainData = (
//       await axios.get(speciesData["evolution_chain"]["url"])
//     ).data;

//     if (evolutionChainData.chain.species.name === data.name) {
//       return true;
//     }

//     return false;
//   }

//   const pokemonResults = (await axios.get(APIS.pokeapi + "?offset=0&limit=250"))
//     .data;

//   const promiseCatcher = [];

//   for (let i = 0; i < pokemonResults.results.length; i++) {
//     promiseCatcher.push(isNonEvolved(pokemonResults.results[i].url));
//   }

//   const resolver = await Promise.all(promiseCatcher);

//   const notEvolvedPokemon = [];

//   for (let i = 0; i < resolver.length; i++) {
//     const isNotEvolved = resolver[i];
//     if (isNotEvolved) {
//       notEvolvedPokemon.push({
//         ...pokemonResults.results[i],
//         picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
//           i + 1
//         }.png`,
//       });
//     }
//   }

//   const insertPokemon = await connect.collection.insertMany(notEvolvedPokemon);

//   res.send(insertPokemon);
// });

// router.get("/starwars", async function (req, res) {
//   // let characters = [];
//   const connect = await dbConnect("pokemon");

//   const find = await connect.collection.find({}).toArray();

//   if (find.length) {
//     return res.send("already populated");
//   }

//   let results = [];

//   for (let i = 1; i < 10; i++) {
//     const request = await axios.get(APIS.swapi, {
//       params: { page: i },
//     });
//     results.push(request);
//   }

//   const resolve = (await Promise.resolve(results)).map((r) => r.data.results);

//   const processed = resolve.flat().map((character) => ({
//     name: character.name,
//     gender: character.gender,
//   }));

//   const insertStarWarsCharacters = await connect.collection.insertMany(
//     processed
//   );

//   res.send(insertStarWarsCharacters);

//   // res.send(characters);

//   // let currentResult = true;

//   // let page = 10;

//   // res.send(request);

//   // while (currentResult) {
//   //   const request = await axios.get(APIS.swapi, {
//   //     params: { page },
//   //   });

//   // }
// });

// module.exports = router;
