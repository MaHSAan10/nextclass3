export default function DynamicRoute({params}:{params: {name:string}}){
    return(
        <div>The name is {params.name}</div>
    )
}