import { useQuery } from "@apollo/client";
import { GetBookDocument, GetBookQuery, GetBooksDocument, GetBooksQuery } from "../../generated/graphql"
import { useEffect, useState } from "react";

export const Select = () => {
  const { data, loading } = useQuery<GetBooksQuery>(GetBooksDocument);
  const [selected, setSelected] = useState<number>()

  useEffect(() => {
    setSelected(data?.books[0].id)
  }, [data])

  return <>
    {loading ? <p>Loading...</p> : (
      <>
        <select onChange={e => setSelected(Number(e.target.value))} value={selected}>
          {data?.books.map(({ id, title }) => <option value={id}>{title}</option>)}
        </select>
        <Book id={Number(selected)} />
      </>
    )
    }
  </>
}

const Book = ({ id }: { id: number }) => {
  const { loading, data } = useQuery<GetBookQuery>(GetBookDocument, { variables: { id } })
  return <>
    {loading ? <p>Loading...</p> : (
      <>
        <div>Title: {data?.book.title}</div>
        <div>Author: {data?.book.author}</div>
        <div>Price: ¥{data?.book.price}</div>
      </>
    )}
  </>
}