import { QueryReference, useLoadableQuery, useReadQuery } from "@apollo/client"
import { Suspense, useEffect } from "react"
import { GetBookDocument, GetBookQuery } from "../../generated/graphql"
import { preloadedGetBooks } from "../../preload/preloadedGetBooksRef"
import { preloadedGetShopsRef } from "../../preload/preloadedGetShopsRef"

export const PreloadQuery = () => {
  const { data } = useReadQuery(preloadedGetBooks)
  const [loadBook, queryRef] = useLoadableQuery(GetBookDocument)

  useEffect(() => {
    loadBook({ id: data.books[0].id })
  }, [])

  return (
    <>
      <select
        onChange={(e) => loadBook({ id: Number(e.target.value) })}
      >
        {data.books.map((book) => (<option key={book.id} value={book.id}>{book.title}</option>))}
      </select>
      <Suspense fallback={<div>Loading...</div>}>
        {queryRef && <Book queryRef={queryRef} />}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Shops />
      </Suspense>
    </>
  )
}

const Book = ({ queryRef }: { queryRef: QueryReference<GetBookQuery> }) => {
  const { data } = useReadQuery(queryRef)
  return (<>
    <div>Title: {data.book.title}</div>
    <div>Author: {data.book.author}</div>
    <div>Price: ¥{data.book.price}</div>
  </>
  )
}

const Shops = () => {
  const { data } = useReadQuery(preloadedGetShopsRef)
  return <>
    {data.shops.map((shop) => <div key={shop.id}>{shop.name}</div>)}
  </>
}