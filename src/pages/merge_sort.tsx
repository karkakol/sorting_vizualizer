import SortingComponent from "../components/sorting_component";
import {suspendableMergeSort} from "../algorithms/sorting/sorting_algorithms";

export default function MergeSortPage() {
    const sort = suspendableMergeSort();
    return (
        <SortingComponent sortingFunction={sort}/>
    )

}