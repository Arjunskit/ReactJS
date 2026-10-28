import { MdDelete } from "react-icons/md"


interface HistoryData {
  id: number
  title: string
  timeAccessed: string
  logoUrl: string
  domainUrl: string
}

interface HistoryItemProps {
  historyData: HistoryData
  deleteHandler: (id: number) => void
}

const index = (props: HistoryItemProps) => {
  const {historyData, deleteHandler} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = historyData

  return (
    <li className="history-item flex gap-3.5 my-1 border border-gray-300 shadow-2xs rounded p-2 items-center">
      <p className="text-xs text-gray-400 basis-32">{timeAccessed}</p>
      <div className="flex gap-3.5 mx-4 basis-full text-sm">
        <img src={logoUrl} alt="domain logo" className="w-5 h-5" />
        <p>{title}</p>
      </div>
      <p className="text-gray-500">{domainUrl}</p>
      <div className="flex justify-end basis-full">
        <button className="cursor-pointer" onClick={() => deleteHandler(id)}>
          <MdDelete className="text-gray-600 hover:text-red-500" />
        </button>
      </div>
    </li>
  )
}

export default index
