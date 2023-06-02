
interface SortingAlgorithmInput{
    data: number[];
    setData: (num: number[]) => void;
}

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

async function defaultTimeout(){
    await timeout(10);
}

export async function bubbleSort({data, setData} : SortingAlgorithmInput) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
                await defaultTimeout();
                setData([...data]);
            }
        }
    }
}

export async function insertionSort({data, setData} : SortingAlgorithmInput) {
    const length = data.length;

    for (let i = 1; i < length; i++) {
        const current = data[i];
        let j = i - 1;

        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            await defaultTimeout();
            setData([...data]);
            j--;
        }

        data[j + 1] = current;
        await defaultTimeout();
        setData([...data]);
    }

}
export {};
