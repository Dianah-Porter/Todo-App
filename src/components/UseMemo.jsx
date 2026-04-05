import { useMemo } from "react";

export default function MemoHook({number}){
    const double = useMemo(() => number * 2, [number])
    return <p>{double}</p>
}