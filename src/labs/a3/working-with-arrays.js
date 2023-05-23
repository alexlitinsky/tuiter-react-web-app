import AddingRemovingDataArrays from "./adding-and-removing-data-to-from-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import FindFunction from "./find-function";
import FilterFunction from "./filter-function";

function WorkingWithArrays() {
  let functionScoped = [25];
  let blockScoped = ['-'];
  let constant1 = [31];
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];
  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
  ];
  console.log("Working with arrays");

  return (
    <div>
      <h3> Working with Arrays </h3>
      numberArray1 = {numberArray1} <br />
      stringArray1 = {stringArray1} <br />
      variableArray1 = {variableArray1} <br />
      <ArrayIndexAndLength />
      <AddingRemovingDataArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FilterFunction />

    </div>
  )
}

export default WorkingWithArrays
