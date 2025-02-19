import { Link } from "react-router-dom"

export function BottoWarning({label, buttonText, to}) {
    return <div className={'font-medium py-2 text-sm flex justify-center'}>
      <div>
        {label}
      </div>
      <Link className={' font-medium pointer underline pl-1 cursor-pointer'} to={to}>
        {buttonText}
      </Link>
    </div>
}
  