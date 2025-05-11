export default function DockSkeleton() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="flex-center h-21 animate-pulse flex-row rounded-[26px] bg-white/40 pr-2 pl-2">
        <a
          href="#"
          target="_self"
          rel="noopener noreferrer"
          className="flex-center mr-2 ml-2 flex size-[60px] rounded-xl bg-[#fff]"
        >
          <div className="size-10 rounded-xl bg-gray-200"></div>
        </a>
        <a
          href="#"
          target="_self"
          rel="noopener noreferrer"
          className="flex-center mr-2 ml-2 flex size-[60px] rounded-xl bg-[#fff]"
        >
          <div className="size-10 rounded-xl bg-gray-200"></div>
        </a>
        <a
          href="#"
          target="_self"
          rel="noopener noreferrer"
          className="flex-center mr-2 ml-2 flex size-[60px] rounded-xl bg-[#fff]"
        >
          <div className="size-10 rounded-xl bg-gray-200"></div>
        </a>
      </div>
    </div>
  )
}
