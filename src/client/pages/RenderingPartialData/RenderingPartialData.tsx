import { useApolloClient, useSuspenseQuery } from "@apollo/client"
import { GetBookDocument, GetBookQuery, GetBooksDocument, GetBooksQuery } from "../../generated/graphql"
import { Suspense, useEffect, useState } from "react"


export const RenderingPartialData = () => {
  const { data } = useSuspenseQuery<GetBooksQuery>(GetBooksDocument)
  const [selected, setSelected] = useState(data.books[0].id)
  const client = useApolloClient()

  client.writeQuery({
    query: GetBookDocument,
    variables: { id: 2 },
    data: {
      book: {
        title: "人間失格2",
        author: "太宰治2",
        price: 2
      }
    }
  })

  useEffect(() => {
    console.log(selected)
  }, [selected])

  return <>
    <select
      onChange={(e) => { setSelected(Number(e.target.value)) }}>
      {data?.books.map(({ id, title }) => (<option key={id} value={id}>{title}</option>))}
    </select>
    <Suspense fallback={<p>Loading...</p>}>
      <Book id={selected} />
    </Suspense>
  </>
}

const Book = ({ id }: { id: number }) => {
  const { data } = useSuspenseQuery<GetBookQuery>(GetBookDocument, { variables: { id }, returnPartialData: true })
  return <>
    <div>Title: {data?.book?.title}</div>
    <div>Author: {data?.book?.author}</div>
    <div>Price: ¥{data?.book?.price}</div>
  </>
}