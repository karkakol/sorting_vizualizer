import SortingComponent from "../components/sorting_component";
import {bubbleSort} from "../algorithms/sorting/sorting_algorithms";

export default function BubbleSortPage(){

    return (
        <SortingComponent sortingFunction={bubbleSort} />
    )
}