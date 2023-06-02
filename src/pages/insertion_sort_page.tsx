import SortingComponent from "../components/sorting_component";
import {insertionSort} from "../algorithms/sorting/sorting_algorithms";

export default function InsertionSortPage() {

    return (
        <SortingComponent sortingFunction={insertionSort}/>
    )
}