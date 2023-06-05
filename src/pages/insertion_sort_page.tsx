import SortingComponent from "../components/sorting_component";
import {suspendableInsertionSort} from "../algorithms/sorting/sorting_algorithms";

export default function InsertionSortPage() {
    const sort = suspendableInsertionSort();
    return (
        <SortingComponent sortingFunction={sort}/>
    )
}