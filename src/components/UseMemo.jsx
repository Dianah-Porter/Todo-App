import { useMemo } from "react";

export default function MemoHook({number}){
    const double = useMemo(() => number * 2, [number])
    return <p className="mx-43">{double}</p>
}