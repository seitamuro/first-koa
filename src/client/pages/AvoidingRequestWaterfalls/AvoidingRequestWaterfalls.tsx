import { QueryReference, useBackgroundQuery, useReadQuery, useSuspenseQuery } from "@apollo/client"
import { Suspense, useState } from "react"
import { GetBookDocument, GetBooksDocument, GetShopsDocument, GetShopsQuery } from "../../generated/graphql"

export const AvoidingRequestWaterfalls = () => {
  const { data } = useSuspenseQuery(GetBooksDocument)
  const [selected, setSelected] = useState(data.books[0].id)
  const [queryRef] = useBackgroundQuery(GetShopsDocument)

  return (
    <>
      <select
        onChange={(e) => { setSelected(Number(e.target.value)) }}
        value={selected}
      >
        {data.books.map(({ id, title }) => (<option key={id} value={id}>{title}</option>))}
      </select>
      <Suspense fallback={<p>Loading...</p>}>
        <Book id={selected} queryRef={queryRef} />
      </Suspense>
    </>
  )
}

const Book = ({ id, queryRef }: { id: number, queryRef: QueryReference<GetShopsQuery> }) => {
  const { data } = useSuspenseQuery(GetBookDocument, { variables: { id } })

  return (
    <>
      <div>Title: {data.book.title}</div>
      <div>Author: {data.book.author}</div>
      <div>Price: ¥{data.book.price}</div>
      <Shops queryRef={queryRef} />
    </>
  )
}

const Shops = ({ queryRef }: { queryRef: QueryReference<GetShopsQuery> }) => {
  const { data } = useReadQuery(queryRef)

  return (
    <>
      {data.shops.map(({ name }) => <div>Shop Name: {name}</div>)}
    </>
  )
}