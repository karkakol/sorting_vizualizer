import {useState} from "react";

interface SortingAlgorithmInput {
    data: number[];
    setData: (num: number[]) => void;
}

function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
}

async function defaultTimeout(num: number) {

    await timeout(64000/(num*num));
}

type SuspendFunction = () => void;
type SortFunction = ({data, setData}: SortingAlgorithmInput) => Promise<void>;

export class SuspendableSorting {
    private readonly _execute: SortFunction;
    private readonly _suspend: SuspendFunction;

    constructor(execute: SortFunction, suspend: SuspendFunction) {
        this._execute = execute;
        this._suspend = suspend;
    }

    execute(props: SortingAlgorithmInput): void {
        this._execute(props);
    }

    async suspend(): Promise<void> {
        this._suspend();
        await timeout(100);
    }
}

export const suspendableBubbleSort = () => {
    let suspended = false;
    let isRunning = false;
    const sort = async ({data, setData}: SortingAlgorithmInput) => {
        suspended = false;
        if (isRunning) return;
        isRunning = true;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length - i - 1; j++) {
                if (suspended) {
                    isRunning = false;
                    return;
                }
                if (data[j] > data[j + 1]) {
                    let temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                    await defaultTimeout(data.length);
                    setData([...data]);
                }
            }
        }
        isRunning = false;
    }


    return new SuspendableSorting(sort, () => suspended = true);
}

export const suspendableInsertionSort = () => {
    let suspended = false;
    let isRunning = false;
    const sort = async ({data, setData}: SortingAlgorithmInput) => {
        suspended = false;
        if (isRunning) return;
        isRunning = true;
        const length = data.length;
        for (let i = 1; i < length; i++) {
            if (suspended) {
                isRunning = false;
                return;
            }
            const current = data[i];
            let j = i - 1;

            while (j >= 0 && data[j] > current) {
                if (suspended) {
                    isRunning = false;
                    return;
                }
                data[j + 1] = data[j];
                await defaultTimeout(data.length);
                setData([...data]);
                j--;
            }

            data[j + 1] = current;
            await defaultTimeout(data.length);
            setData([...data]);
        }
        isRunning = false;
    }
    return new SuspendableSorting(sort, () => suspended = true);
}

export const suspendableMergeSort = () => {
    let suspended = false;
    let isRunning = false;
    function merge(left: number[], right: number[]): number[] {
        const mergedArray: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                mergedArray.push(left[leftIndex]);
                leftIndex++;
            } else {
                mergedArray.push(right[rightIndex]);
                rightIndex++;
            }
        }

        while (leftIndex < left.length) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        }

        while (rightIndex < right.length) {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }

        return mergedArray;
    }

    const sort = async ({data, setData}: SortingAlgorithmInput) => {
        suspended = false;
        if (isRunning) return;
        isRunning = true;
        const n = data.length;
        let subArraySize = 1;

        while (subArraySize < n) {
            if (suspended) {
                isRunning = false;
                return;
            }
            let left = 0;
            while (left < n - subArraySize) {
                await timeout(100);
                if (suspended) {
                    isRunning = false;
                    return;
                }
                const mid = left + subArraySize - 1;
                const right = Math.min(left + 2 * subArraySize - 1, n - 1);
                const mergedArray = merge(
                    data.slice(left, mid + 1),
                    data.slice(mid + 1, right + 1)
                );
                for (let i = 0; i < mergedArray.length; i++) {
                    if (suspended) {
                        isRunning = false;
                        return;
                    }
                    data[left + i] = mergedArray[i];
                    await defaultTimeout(data.length);
                    setData([...data]);
                }
                left += 2 * subArraySize;
            }
            subArraySize *= 2;
        }
        isRunning = false;

    }

    return new SuspendableSorting(sort, () => suspended = true);
}

export {};
