const fs = require("fs");
const path = require("path");

const DICTIONARY_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Backup list of ~12,000 five-letter words, used if the dictionary API is down.
const FALLBACK_WORDS = new Set(
    fs.readFileSync(path.join(__dirname, "../data/words.txt"), "utf8").split("\n")
);

const checkWord = async (req, res) => {
    // TODO (Step 2): Read and store the word from the URL as a lowercase string

    // TODO (Step 3): Validate the input

    // TODO (Step 5a): Wrap Step 4 in try { ... } catch (err) { ... }

    /** TODO (Step 4): Call dictionary API
     *  Send a request with fetch and WAIT for it with await.
     */ 

    /** 
     * TODO (Step 5b): Add fallback after try/catch
     * If we reach this line, the dictionary API didn't give us an answer
     * Check our local word list instead and respond with:
     * { word, valid: <is the word in FALLBACK_WORDS?>, source: "fallback" }
     */ 
};

module.exports = { checkWord };