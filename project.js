console.log("Project");

// 1. Function to select all elements from an array greater than n
function selectGreaterThan(arr, n) {
  return arr.filter(x => x > n);
}

// Tests for selectGreaterThan
console.log(selectGreaterThan([1, 5, 8, 3, 10], 4)); // [5, 8, 10]
console.log(selectGreaterThan([0, -2, 7, 4], 3));    // [7, 4]
console.log(selectGreaterThan([2, 2, 2], 2));        // []

// 2. Function to check if any two numbers in an array sum to 5
function hasPairSumFive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 5) {
        return true;
      }
    }
  }
  return false;
}

// Tests for hasPairSumFive
console.log(hasPairSumFive([1, 2, 3]));       // true
console.log(hasPairSumFive([0, 5, 10]));      // true
console.log(hasPairSumFive([4, 4, 4]));       // false
console.log(hasPairSumFive([-1, 6, 1, 4]));   // true

// 3. Text processing from the Bill of Rights
var text = "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances. A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed. No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law. The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized. No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation. In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence. In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law. Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted. The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people. The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.";

text = text.toLowerCase();
text = text.replace(/[.,;]/g, "");
var textArray = text.split(" ");

// 1. Keep only words of length 4 or greater
var longWords = textArray.filter(word => word.length >= 4);
console.log("Words with length >= 4:", longWords);

// 2. Find duplicate words
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  for (let word of arr) {
    if (seen.has(word)) {
      duplicates.add(word);
    } else {
      seen.add(word);
    }
  }
  return Array.from(duplicates);
}

var duplicateWords = findDuplicates(longWords);
console.log("Duplicate words:", duplicateWords);
