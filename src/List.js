import React from "react"

export default function List({ data = [], renderItem, renderEmpty}){
    return !data.length ? (
      renderEmpty
      ) : (
      <ul>
        {data.map((item, i) => {
         return (<li key={i}>{renderItem(item)}</li>)
        })}
      </ul>
    )
  }
  