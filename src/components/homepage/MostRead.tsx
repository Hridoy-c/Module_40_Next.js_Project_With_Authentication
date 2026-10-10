import React from 'react'
import IMostReadNewsType from '@/types/All-Types'


const MostRead = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read', {
    next: { revalidate: 600 },
  })
  const data = await res.json()
  const mostRead: IMostReadNewsType[] = data.data

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <h2 className="mb-3 text-base font-bold text-gray-900 sm:mb-4 sm:text-lg">
        সর্বাধিক পঠিত
      </h2>
      <ol className="grid grid-cols-1 gap-x-8 gap-y-3 sm:gap-y-4 md:grid-cols-2 lg:grid-cols-1">
        {mostRead.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span className="w-6 shrink-0 text-xl font-semibold leading-none text-rose-500 sm:w-7 sm:text-2xl">
              {item.rank.toLocaleString('bn-BD')}
            </span>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 break-words text-sm font-medium leading-snug text-gray-900 hover:text-rose-700 sm:text-[15px]"
            >
              {item.title.trim()}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default MostRead