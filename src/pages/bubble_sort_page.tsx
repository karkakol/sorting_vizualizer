import SortingComponent from "../components/sorting_component";
import {suspendableBubbleSort} from "../algorithms/sorting/sorting_algorithms";

export default function BubbleSortPage(){
    const sort = suspendableBubbleSort();
    return (
        <SortingComponent sortingFunction={sort} />
    )
}