import { useSuspenseQuery } from "@apollo/client"
import { Suspense, useState } from "react"
import { GetBookDocument, GetBooksDocument, GetShopsDocument } from "../../generated/graphql"

export const NotAvoidingRequestWaterfalls = () => {
  const { data } = useSuspenseQuery(GetBooksDocument)
  const [selected, setSelected] = useState(data.books[0].id)

  return (
    <>
      <select
        onChange={(e) => { setSelected(Number(e.target.value)) }}
        value={selected}
      >
        {data.books.map(({ id, title }) => (<option key={id} value={id}>{title}</option>))}
      </select>
      <Suspense fallback={<p>Loading...</p>}>
        <Book id={selected} />
      </Suspense>
    </>
  )
}

const Book = ({ id }: { id: number }) => {
  const { data } = useSuspenseQuery(GetBookDocument, { variables: { id } })

  return (
    <>
      <div>Title: {data.book.title}</div>
      <div>Author: {data.book.author}</div>
      <div>Price: ¥{data.book.price}</div>
      <Shops />
    </>
  )
}

const Shops = () => {
  const { data } = useSuspenseQuery(GetShopsDocument)

  return (
    <>
      {data.shops.map(({ name }) => <div>Shop Name: {name}</div>)}
    </>
  )
}