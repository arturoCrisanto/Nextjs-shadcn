'use client'

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-3 border rounded-[8px] p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        <p >AC</p>
        </div>
        <div className="grow">
        <p className="text-lg font-bold">Arturo Crisanto</p>
        <p className="text-sm text-gray-500">arturocrisanto@gmail.com</p>
        </div>
    </div>
  );   
}