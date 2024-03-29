import { useSuspenseQuery } from "@apollo/client"
import { Suspense, useTransition } from "react";
import { GetBookDocument, GetBookQuery, GetBooksDocument, GetBooksQuery } from "../../generated/graphql"
import { useState } from "react";
import { IntegerType } from "typeorm";

export const SuspenseSelect = () => {
  const [isPending, startTransition] = useTransition()
  const { data } = useSuspenseQuery<GetBooksQuery>(GetBooksDocument);
  const [selected, setSelected] = useState(data.books[0].id)
  return <>
    <select
      style={{ opacity: isPending ? 0.5 : 1 }}
      onChange={(e) => startTransition(() => { setSelected(Number(e.target.value)) })}>
      {data?.books.map(({ id, title }) => (<option key={id} value={id}>{title}</option>))}
    </select>
    <Suspense fallback={<p>Loading...</p>}>
      <Book id={selected} />
    </Suspense>
  </>
}

const Book = ({ id }: { id: IntegerType }) => {
  const { data } = useSuspenseQuery<GetBookQuery>(GetBookDocument, { variables: { id } })
  return (
    <>
      <div>Title: {data.book.title}</div>
      <div>Author: {data.book.author}</div>
      <div>Price: ¥{data.book.price}</div>
    </>
  )
}