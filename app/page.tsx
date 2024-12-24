import Link from "next/link"

export default function Home() {
  return (
    <div className=" main_container grid h-screen w-full place-items-center">
      <div className=" space-y-7">
        <h2 className=" text-3xl font-semibold text-slate-200 md:text-5xl">
          {">> Next Template"}
        </h2>
        <Link
          href={"https://github.com/MgHtetMyatAung/next-template"}
          className=" mx-auto block w-fit border border-cyan-400 px-10 py-3 text-center text-slate-100 underline"
          target="_blank"
        >
          Get Github Repo
        </Link>
      </div>
    </div>
  )
}
