'use client'
import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

const SearchBar: NextPage = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      window.location.href = `https://cn.bing.com/search?q=${searchValue}&form=QBRE`
    }
  }

  return (
    <div className="flex flex-row justify-center pt-26">
      <label className="input input-ghost h-13 w-140 gap-0 rounded-2xl border-0 bg-white/50 p-0 focus-within:outline-none">
        <section className="flex-center size-13">
          <section className="flex-center size-8 rounded-lg hover:cursor-pointer hover:bg-white/50">
            <Image src="/icon-bing.png" alt="bing" width={24} height={24} />
          </section>
        </section>
        <input
          type="text"
          placeholder="输入搜索内容"
          className="h-6 flex-1 text-base leading-6"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <section className="flex-center size-13">
          <button
            style={{ display: searchValue ? 'block' : 'none' }}
            onClick={() => {
              setSearchValue('')
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-gray-500 hover:cursor-pointer hover:text-gray-800 active:text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
      </label>
    </div>
  )
}

export default SearchBar
