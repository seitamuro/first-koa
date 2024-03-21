import { QueryReference, useLoadableQuery, useReadQuery, useSuspenseQuery } from "@apollo/client"
import { Suspense, useEffect } from "react"
import { GetBookDocument, GetBookQuery, GetBooksDocument } from "../../generated/graphql"

export const LoadableQuery = () => {
  const { data } = useSuspenseQuery(GetBooksDocument)
  const [loadBook, queryRef] = useLoadableQuery(GetBookDocument)

  useEffect(() => {
    loadBook({ id: data.books[0].id })
  }, [])

  return (
    <>
      <select
        onChange={(e) => loadBook({ id: Number(e.target.value) })}
      >
        {data.books.map(({ id, title }) => <option key={id} value={id}>{title}</option>)}
      </select>
      <Suspense fallback={<div>Loading...</div>}>
        {queryRef && <Book queryRef={queryRef} />}
      </Suspense>
    </>
  )
}

const Book = ({ queryRef }: { queryRef: QueryReference<GetBookQuery> }) => {
  const { data } = useReadQuery(queryRef)

  return (
    <>
      <div>Title: {data.book.title}</div>
      <div>Author: {data.book.author}</div>
      <div>Price: ¥{data.book.price}</div>
    </>
  )
}