import { useMutation, useQuery, type MutationOptions, type QueryOptions } from "@tanstack/react-query";
import engine from "..";

const useLogin = ({mutationOptions}: {mutationOptions: MutationOptions}) => {
    const fn =  (data: any) => {
        return  engine.post("https://jsonplaceholder.typicode.com/posts", data)
    };
    return useMutation({
        mutationFn: fn,
        ...mutationOptions
    })
}

const useGetSession = ({queryOptions}: {queryOptions?: QueryOptions}) => {
    const fn =  () => {
        return  engine.get("https://jsonplaceholder.typicode.com/todos/1")
    }
    return useQuery({
        queryKey: ["useGetSession"],
        queryFn: fn,
        ...queryOptions
    })
}

export {useLogin, useGetSession}