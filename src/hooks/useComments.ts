import {useEffect, useState} from "react";
import axios from "axios";

export function useComments(id: string, subreddit: string) {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        axios.get(`https://api.reddit.com/r/${subreddit}/comments/${id}`, {})
            .then((resp) => {
                setData(resp.data[1].data.children);
            })
            .catch(console.log)
    }, [])

    return [data];
}
